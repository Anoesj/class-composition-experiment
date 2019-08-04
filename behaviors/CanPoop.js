export const CanPoop = superclass => class extends superclass {
  poop () {
    writeLog(`${this.name} does PFFLL 💩, cause he can poop`);
  }
};