function codeMessage (msg, n) {
	let wordArray = []
	for(let i = 0; i < msg.length; i++){
		wordArray[i] = msg[i].charCodeAt(0) + n;
		if(wordArray[i] > 122) wordArray[i] -= 26;
		if(wordArray[i] < 97) wordArray[i] += 26;
		if(msg[i] === ' ') wordArray[i] = 32;
		if(msg[i] === '.') wordArray[i] = 46;
	};
	return String.fromCharCode(...wordArray) ;
}

//console.log(codeMessage('abcd', 1));
module.exports = codeMessage;
