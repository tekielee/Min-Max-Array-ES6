function minMax(arr) {
	let n = arr.length;
	let minMax = {min: 0, max: 0};
	if(n === 1) {
		minMax.min = arr[0];
		minMax.max = arr[0];
		return minMax;
	}
	if(arr[0] > arr[1]) {
		minMax.max = arr[0];
		minMax.min = arr[1];
	} else {
		minMax.max = arr[1];
		minMax.min = arr[0];
	}
	for(let i = 2; i < n; i++) {
		if(arr[i] > minMax.max) {
			minMax.max = arr[i];
		} else if(arr[i] < minMax.min) {
			minMax.min = arr[i];
		}
	}
	return minMax;
}

let arr = [1000, 11, 445, 1, 330, 3000];
console.log(minMax(arr));