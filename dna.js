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


/* SEE EXAMPLE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Using map to reformat objects in an array
The following code takes an array of objects and creates a new array containing the newly reformatted objects.

var kvArray = [{key: 1, value: 10}, 
               {key: 2, value: 20}, 
               {key: 3, value: 30}];

var reformattedArray = kvArray.map(function(obj) { 
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 

// kvArray is still: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 

Used in Reverse a String and more from earlier in FCC....split() method returns an array

The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.

Syntax
str.split([separator[, limit]])
Tip: If an empty string ("") is used as the separator, the string is split between each character.

Parameters
separator Optional
Specifies the string which denotes the points at which each split should occur. The separator is treated as a string or as a regular expression. If a plain-text separator contains more than one character, that entire string must be found to represent a split point. If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string. If separator is an empty string, str is converted to an array of characters.
limit Optional
Integer specifying a limit on the number of splits to be found. When this parameter is provided, the split() method splits the string at each occurence of the specified separator but stops when limit entries have been placed into the array. It may still contain fewer entries than limit if the end of the string is reached before the specified limit is reached. The left-over text is not returned in the new array.

Return value
A Array of strings split at each point where the separator occurs in the given string. */