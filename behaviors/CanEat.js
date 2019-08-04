export const CanEat = superclass => class extends superclass {
  eat () {
    writeLog(`${this.name} does NOM NOM, cause he can eat`);
  }
};