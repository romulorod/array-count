let count = 0;
function arrayCount(array, element) {
	for (let index = 0; index < array.length; index++) {
		if (Array.isArray(array[index])) arrayCount(array[index], element);
		if (array[index] === element) count++;
	}
	return count;
}

module.exports = arrayCount;
