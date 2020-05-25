/**
 * @param {integer} n 
 */
const binaryGap = (n) => {
	//Convert decimal number to binary string
	const binary = n.toString(2);

	// If binary ends with 0, remove trailing zeros
	let trimmed = null;
	if (binary.endsWith('0')) {
		trimmed = binary.replace(/0+\b/, '');
	} else {
		trimmed = binary;
	}
	// Find all gaps in the binary
	const arr = trimmed.match(/0+/g);
	let gaps = [];
	if (arr === null) {
		console.log('0');
		return 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			gaps = [...gaps, arr[i].length];
		}
		gaps.sort((a, b) => b - a);
		console.log(gaps[0]);
		return gaps[0];
	}
};

binaryGap(10000); // 3
binaryGap(2147483647); // 0
binaryGap(66561); // 9
binaryGap(6); //0
binaryGap(328); // 2
binaryGap(1162); // 3
