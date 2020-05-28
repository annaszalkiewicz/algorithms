const oddOccurencesInArray = (A) => {
  let first = A[0];
  let pair = A.slice(1).indexOf(first);  
	if (pair >= 0) {    
    let newArr = [A.slice(1, pair+1), A.slice(pair+2)].flat();    
		return oddOccurencesInArray(newArr);
	} else {
    console.log(A[0]);
		return A[0];
	}
};


oddOccurencesInArray([9, 3, 9, 3, 9, 7, 9]);
oddOccurencesInArray([9, 7, 3, 9, 3, 9, 7, 6, 9]);
