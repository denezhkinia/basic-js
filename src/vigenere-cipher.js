const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor(value = true) {
		this.noReverse = value
	}
	encrypt(text, key) {
		if (typeof text !== 'string') return error;
		if (typeof key !== 'string') return error;
		text = text.toUpperCase();
		let newText = '';
		key = key.toUpperCase();
		let j = 0;
		for (let i = 0; i < text.length; i++) {
			let letter = text[i];
			if (letter.charCodeAt() > 64 && letter.charCodeAt() < 91) {
				const A = 65;
				let Pi = letter.charCodeAt(0) - A;
				let Ki = (key[j % key.length].charCodeAt() - A)
				let charSum = Pi + Ki;
				let newLetter = ((charSum % 26) + 26) % 26
				newText = newText + String.fromCharCode(newLetter + A);
				j++;
			}
			else newText += letter
		}
		if (!this.noReverse) {
			newText = this.textReverse(newText);
		}
		return newText;
	}
	decrypt(text, key) {
		if (typeof text !== 'string') return error;
		if (typeof key !== 'string') return error;
		text = text.toUpperCase();
		if (!this.noReverse) {
			text = this.textReverse(text);
		}
		let newText = '';
		key = key.toUpperCase();
		let j = 0;
		for (let i = 0; i < text.length; i++) {
			let letter = text[i];
			if (letter.charCodeAt() > 64 && letter.charCodeAt() < 91) {
				const A = 65;
				let Pi = letter.charCodeAt(0) - A;
				let Ki = (key[j % key.length].charCodeAt() - A)
				let charDif = Pi - Ki;
				let newLetter = ((charDif % 26) + 26) % 26
				newText = newText + String.fromCharCode(newLetter + A);
				j++;
			}
			else newText += letter
		}
		return newText;
	}
	textReverse(text) {
		text = text.split(' ')
		for (let i = 0; i < text.length; i++) {
			text[i] = text[i].split('').reverse().join('');
		}
		text = text.join(' ');
		return text
	}

}

module.exports = VigenereCipheringMachine;

// let res = [];
		// text.forEach(element => {
		// 	let el = element.split('')
		// 	let signs = [];
		// 	let i = 1;
		// 	while (el[el.length - i].charCodeAt() < 65 || el[el.length - i].charCodeAt() > 90) {
		// 		signs.unshift(el[el.length - i])
		// 		el.pop();
		// 		i++;
		// 		if (i => el.length)
		// 			break;
		// 	}
		// 	element = el.reverse().join('') + signs;
		// 	res.push(element)
		// });
		// res = res.join(' ')