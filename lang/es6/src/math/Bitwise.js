export default class Bitwise {
  constructor(n, ) {
    if (!Array.isArray(arr)) {
      throw new Error('invalid args, use array.');
    }

    this.dimension = arr.length;
    this.coordinates = arr.map(function (x) {
      return parseFloat(x);
    });
  }
}
