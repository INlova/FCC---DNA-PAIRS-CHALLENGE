function pairElement(str) {
	var pairs = {
		A: 'T',
		T: 'A',
		C: 'G',
		G: 'C'
	};
	return str.split('').map(function(item) {
		return [item, pairs[item]];
	});
}
pairElement("GCG");

/*The map() method creates a new array with the results of calling a function for every array element.

The map() method calls the provided function once for each element in an array, in order.

Note: map() does not execute the function for array elements without values.

Note: map() does not change the original array.*/


