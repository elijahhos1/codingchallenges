function charCount(myChar, str) {
	let strCharArray = str.split('');
	let charCount = 0;
	
	strCharArray.forEach( char => {
		if (char == myChar) charCount++;
	});
	
	return charCount;
}