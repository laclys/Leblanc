const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const subFlow = createFlow([() => delay(1000).then(() => log("c"))]);

createFlow([
  () => log("a"),
  () => log("b"),
  subFlow,
  [() => delay(1000).then(() => log("d")), () => log("e")],
]).run(() => {
  console.log("done");
});

function createFlow(effects = []) {
  return {
    effects: [...effects].flat(),
    async run (cb = () => {}) {
      for (let i = 0; i < this.effects.length; i++) {
        typeof this.effects[i] === 'function' ? await this.effects() : await this.effects.run()
      }
      cb()
    }
  }
}
