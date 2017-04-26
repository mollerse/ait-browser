const jsword = require('ait-lang/interfaces');

function fpsToMs(fps) {
  // We know that 60fps means 16.5ms to do all calcs
  return 60 / fps * 16.5;
}

const rAF = jsword('rAF', function(fps, quote) {
  const timestamp = new Date().valueOf();
  const msThreshold = fpsToMs(fps);

  const frame = () => this.evaluateQuotation(quote);
  const animationId = id => this.addAnimation(timestamp, id);

  let rafID;
  let lastFrame = 0;
  function inner(t) {
    const delta = t - lastFrame;

    rafID = requestAnimationFrame(inner);
    animationId(rafID);

    if (lastFrame && delta < msThreshold) {
      return;
    }

    frame();

    lastFrame = t;
  }

  rafID = requestAnimationFrame(inner);
  animationId(rafID);
});

module.exports = { rAF };
