const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {

  chain : [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {

    if (value === undefined) this.chain.push('  ');
    else this.chain.push('( ' + value + ' )');

    return this;
  },

  removeLink(position) {
    if(Number.isInteger(position) && position > 0 && (position - 1) in this.chain) {
      this.chain.splice(position - 1, 1);
      return this;
    }

    this.chain = [];
    throw new Error("You can't remove incorrect link!");
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let clone = this.chain;
    this.chain = [];
    return clone.join('~~');
  }
};

module.exports = {
  chainMaker
};
