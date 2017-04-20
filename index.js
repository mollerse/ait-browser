const jsword = require('ait-lang/interfaces');

function fpsToMs(fps) {
  // We know that 60fps means 16ms to do all calcs
  return (60/fps) * 16;
}

const rAF = jsword('rAF', function(fps, quote) {
  const timestamp = (new Date()).valueOf();
  let rafID;
  let lastFrame = 0;

  const inner = t => {
    const delta = t - lastFrame;

    rafID = requestAnimationFrame(inner);
    this.addAnimation(timestamp, rafID);

    if(lastFrame && delta < (fpsToMs(fps) + 1)) { return; }

    this.evaluateQuotation(quote);
    lastFrame = t;
  };

  rafID = requestAnimationFrame(inner);
  this.addAnimation(timestamp, rafID);
});

module.exports = { rAF };
