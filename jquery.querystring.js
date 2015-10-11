/*
 *  jquery.querystring.js
 *  a simple plugin to access querystring params.
 *  @author gehsekky
 */

;(function ( $, window, document, undefined ) {
	$.extend({
		querystring: function(name) {
			var match;
			if (name === "") return "";
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			match = new RegExp("[\\?&]" + name + "=([^&#]*)").exec(window.location.search);
			return match === null ? "" : decodeURIComponent(match[1].replace(/\+/g, " "));
		},
		
		querystringToJSON: function () {
			var queryString = {};

			$.each(window.location.search.slice(1).split('&'), function (i, pair) {
				var pairArr = pair.split('=');
				var key = decodeURIComponent(pairArr[0]);
				var value = decodeURIComponent((pairArr[1] || '').replace(/\+/g, ' '));

				if (key in queryString) {
					if (!$.isArray(queryString[key])) { // create an array when encountering a key more than once
						queryString[key] = new Array(queryString[key]);
					}

					queryString[key].push(value);
				}
				else {
					queryString[key] = value;
				}
			});

			return queryString;
		}
	});	
})( jQuery, window, document );
