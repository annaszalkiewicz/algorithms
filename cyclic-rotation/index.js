const cyclicRotation = (A, K) => {
	if (K === A.length || K === 0) {
		return A;
	} else {
		const remainder = K % A.length;
		const left =
			K === 1 ? A.slice(0, A.length - 1) : A.slice(0, A.length - remainder);
		const right =
			K === 1 ? A.slice(A.length - 1) : A.slice(A.length - remainder);
		return [right, left].flat();
	}
};

cyclicRotation([3, 8, 9, 7, 6], 3);
cyclicRotation([3, 8, 9, 7, 6], 10);
cyclicRotation([5, -1000], 1);
