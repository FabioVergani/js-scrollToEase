function scrollToEase(to,ms){
	function f(ts){
		var y=scrollY,s=start, d=duration, mc=Math.ceil, easeInOutCubic=function(t) {var i = 1000,j = (2 * t - 2);return mc((t < .5 ? 4 * t * t * t : (t - 1) * j * j + 1) * i) / i;};
		if(!s){s=start=ts};
		if(ts - s > d){return;}
		scrollTo(0, y + ((to - y) * easeInOutCubic(1 / d * (ts - start))));
		requestAnimationFrame(f);
	}
	var B = document.body, duration=(ms||1000), start=null, n=B.scrollHeight-B.offsetHeight;
	if(to > n) {to=n};
	requestAnimationFrame(f);
}



scrollToEase(200);
