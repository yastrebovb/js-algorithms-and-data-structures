const rot13 = str => {
	let res='';

	for (let char in str) {
		let code = str.charCodeAt(char);

		if (code > 64 && code < 91) {
			res += code < 78 ? String.fromCharCode(code + 13) : String.fromCharCode(code - 13);
		} else {
		  res += str[char];
		}
	}

	return res;
};

console.log(rot13("SERR PBQR PNZC")); // returns 'FREE CODE CAMP'
