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