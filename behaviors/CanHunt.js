export const CanHunt = superclass => class extends superclass {
  hunt () {
    writeLog(`${this.name} kills 🐰, cause he can hunt`);
  }
};