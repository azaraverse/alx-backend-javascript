const Utils = {
  calculateNumber(type, a, b) {
    const newA = Math.round(a);
    const newB = Math.round(b);
    if (type === 'SUM') {
      return newA + newB;
    } if (type === 'SUBTRACT') {
      return newA - newB;
    } if (type === 'DIVIDE' && newB === 0) {
      return 'Error';
    }
    return newA / newB;
  },
};

module.exports = Utils;
