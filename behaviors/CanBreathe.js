export const CanBreathe = superclass => class extends superclass {
  breathe () {
    writeLog(`${this.name} does AAHHH 💨, cause he can breathe`);
  }
};