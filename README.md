# jquery.querystring.js

@author gehsekky

code taken from [here](http://stackoverflow.com/questions/901115/get-query-string-values-in-javascript/901144)

it should be noted that the $.querystring function ALWAYS returns a string. the following should illustrate:

* querystring param exists and has value: that value
* querystring param exists and doesn't have value: empty string
* querystring param does not exist: empty string
* param given is empty string: empty string

also, as stated in the above stackoverflow answer, this solution doesn't handle multi-value keys (eg. ?key1=aa&key2=bb&key1=bb) as it just grabs the last one.

example:

    var qvalue = $.querystring("q");

$.querystringToJSON should always return an object with keys and values.  This function DOES handle multi-value keys by packing them into an array.

example:

	// https://www.example.com?key1=aa&key2=bb&key1=bb
	var qobject = $.querystringToJSON();
	alert(qobject.key1[1]) // result: bb