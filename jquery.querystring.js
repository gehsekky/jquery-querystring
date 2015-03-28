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
		}
	});	
})( jQuery, window, document );
