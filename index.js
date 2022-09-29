export function arrayCount(array, element) {
	let count = 0;
	for (let index = 0; index < array.length; index++) {
		if (array[index] === element) count++;
	}
	return count;
}
