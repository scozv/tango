(function(type, undefined){
	var error = {};

	Object.defineProperties(error, {
		'INVALID_EMPTY_COL_ACTION'	: {writable: false, value: 'invalid action on an empty collection'},
		'INVALID_NUMERIC_VALUE'		: {writable: false, value: 'invalid numeric value has been passed'},
		'INVALID_GRAPH_ACTION'		: {writable: false, value: 'invalid action on this graph, check it is directed or not'}
	});

	Object.defineProperty(type, 'ERROR',{
		writable: false,
		value: error
	});

	type.__x__ = function (d, b) {
		// inspired from http://www.typescriptlang.org/Playground/
		for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		function __() { this.constructor = d; }
		__.prototype = b.prototype;
		d.prototype = new __();
	};
})(window.T = window.T || {});	