function detectWord(str) {
	const regex = /[a-z]/g;
	const word = str.match(regex);
	
	return word.join('');
}