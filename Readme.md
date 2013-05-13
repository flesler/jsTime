# JS Time

##Works both on Node and the browser
<pre>require('./lib/jsTime.js');</pre>
<pre>&lt;script type="type/javascript" src="js/jsTime.js">&lt;/ script></pre>

##After that you can do things like these:
<pre>
setTimeout(function(){
	alert('After 10 seconds');
}, 10..seconds());

setInterval(function(){
	alert('Every 1.5 hours');
}, 1.5.minutes());

// Timestamp of 3 days from now
var expire = new Date() + 3..days();
</pre>

The double dot (..) is needed for integer numbers, else the interpreter thinks it's a mistyped float number.
Another possible syntax that is just a it longer but less magical would be:

<pre>
var expire = new Date() + (3).days();
</pre>

Pick the one you prefer.


##TODO
 - Add a getter version that only works on modern browsers