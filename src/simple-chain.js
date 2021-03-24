const CustomError = require("../extensions/custom-error");

const chainMaker = {
	result: [],
	getLength() {
		return this.result.length
	},
	addLink(value) {
		this.result.push(`~( ${value} )~`)
		return this
	},
	removeLink(position) {
		if (typeof position !== 'number' || position < 1 || position > this.getLength) { this.result = []; return error };
		this.result.splice(position - 1, 1);
		return this
	},
	reverseChain() {
		this.result.reverse()
		return this
	},
	finishChain() {
		let res = this.result
		this.result = [];
		res = res.join('')
		res = res.slice(1)
		res = res.slice(0, res.length - 1)
		this.chainMaker = res;
		return this.chainMaker
	}
};

module.exports = chainMaker;
