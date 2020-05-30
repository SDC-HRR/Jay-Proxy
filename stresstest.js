function randomId(context, events, done) {
  context.vars.id = Math.floor(Math.random() * 10000000) + 1;
  return done();
}

module.exports = { randomId };
