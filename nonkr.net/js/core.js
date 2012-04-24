/**
 * 
 */

(function () {
	
})();

function $(element) {
	if (arguments.length > 1) {
		for (var i = 0, elements = [], length = arguments.length; i < length; i++) {
			elements.push($(arguments[i]));
		}
		return elements;
	}
	if (isString(element)) return document.getElementById(element);
	return element;
};

function isString(elem) {
	return Object.prototype.toString.call(elem) === "[object String]";
};