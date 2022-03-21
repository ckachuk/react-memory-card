/**
 * Disorder the array
 *
 * @param {bool} preserve Returns a copy without modifying the original
 * @return {array} The disordered array
 */
 const disorder = function (arr, preserve) {
	var array = preserve ? arr.slice() : arr;
	var disordered = [];
	
	while(array.length > 0) {
		var index = Math.round(Math.random()*(array.length-1));
		disordered.push(array[index]);
		array.splice(index, 1);
	}
	
	if(!preserve) {
		arr.push.apply(arr, disordered);
	}
	
	return disordered;
};

export default disorder;