var end = 0; //endLocation
var start = 200; //
var distance = end - start;
var t = 0;//timeLapsed

var dH=(function getDocumentHeight(H,B){
	var s,h=H,b=B;
	return Math.max((s='scrollHeight',b[s]),h[s],(s='offsetHeight',b[s]),h[s],(s='clientHeight',b[s]),h[s]);
})(document.body,document.documentElement);




var scrollInterval = setInterval(function () {
	t += 16;
	var percentage = (t / 20);//speed
	percentage = (percentage > 1) ? 1 : percentage;
	var position = startLocation + (distance * easingPattern(settings.easing, percentage));

	scrollTo(0, Math.floor(position));

	var currentLocation = pageYOffset;
	if(position == end || currentLocation == end || ((innerHeight + currentLocation) >= dH)) {
		clearInterval(scrollInterval);
	}
}, 16);




var easingPattern = function ( type, time ) {
		var k;
s= type, t=time;
	
		if ( s === 'easeInQuad' ) k = t * t; // accelerating from zero velocity
		if ( s === 'easeOutQuad' ) k = t * (2 - t); // decelerating to zero velocity
		if ( s === 'easeInOutQuad' ) k = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // acceleration until halfway, then deceleration
		if ( s === 'easeInCubic' ) k = t * t * t; // accelerating from zero velocity
		if ( s === 'easeOutCubic' ) k = (--t) * t * t + 1; // decelerating to zero velocity
		if ( s === 'easeInOutCubic' ) k = t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; // acceleration until halfway, then deceleration
		if ( s === 'easeInQuart' ) k = t * t * t * t; // accelerating from zero velocity
		if ( s === 'easeOutQuart' ) k = 1 - (--t) * t * t * t; // decelerating to zero velocity
		if ( s === 'easeInOutQuart' ) k = t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; // acceleration until halfway, then deceleration
		if ( s === 'easeInQuint' ) k = t * t * t * t * t; // accelerating from zero velocity
		if ( s === 'easeOutQuint' ) k = 1 + (--t) * t * t * t * t; // decelerating to zero velocity
		if ( s === 'easeInOutQuint' ) k = t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; // acceleration until halfway, then deceleration
		return k || t; // no easing, no acceleration
	};
