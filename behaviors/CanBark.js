export const CanBark = superclass => class extends superclass {
  bark () {
    writeLog(`${this.name} does WOOF WOOF, cause he can bark`);
  }
};