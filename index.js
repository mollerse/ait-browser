const jsword = require('ait-lang/interfaces');

const raf = jsword(function(quote) {
  const timestamp = (new Date()).valueOf();

  let lastFrame = 0;
  let rafID = requestAnimationFrame(function inner(t) {
    const delta = t - lastFrame;

    rafID = requestAnimationFrame(inner.bind(this));
    this.addAnimation(timestamp, rafID);

    if(lastFrame && delta < 33) { return; }

    this.evaluateQuotation(quote);
    lastFrame = t;
  }.bind(this));
  this.addAnimation(timestamp, rafID);
});

module.exports = { raf };
