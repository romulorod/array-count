function arrayCount(array, element) {
	const flattenedArray = array.flat(Infinity);
	for (let index = 0, count = 0; index < flattenedArray.length; index++) {
		if (flattenedArray[index] === element) count++;
		if (flattenedArray.length - 1 === index) return count;
	}
}

function arrayCountBenchmark(array, element) {
	console.time("arrayCountBenchmark");
	const flattenedArray = array.flat(Infinity);
	for (let index = 0, count = 0; index < flattenedArray.length; index++) {
		if (flattenedArray[index] === element) count++;
		if (flattenedArray.length - 1 === index)
			return console.timeEnd("arrayCountBenchmark"), count;
	}
}

module.exports = { arrayCount, arrayCountBenchmark };
