# jquery.querystring.js

@author gehsekky

code taken from [here](http://stackoverflow.com/questions/901115/get-query-string-values-in-javascript/901144)

it should be noted that this function ALWAYS returns a string. the following should illustrate:

* querystring param exists and has value: that value
* querystring param exists and doesn't have value: empty string
* querystring param does not exist: empty string
* param given is empty string: empty string

also, as stated in the above stackoverflow answer, this solution doesn't handle multi-value keys (eg. ?key1=aa&key2=bb&key1=bb) as it just grabs the last one.

example:

    var qvalue = $.querystring("q");
