/* Create Stand Alone waterfall diagrams and integrate on your workflow/CI. 

Author : Vignesh Shanmugam
License :MIt

data - Pass the Resource timings data as array in the below format,
data : [
	{
		URL : 'ww.example.com/main.css',
		dnsStart : '', ....
	},
	{
		
	}
]

*/

import NavTiming from './plugins/navtimings';
import ResTiming from './plugins/restimings';

(function(w,d){
	var COLORS = {
		blocked: '#cdcdcd',
		dns: '#1f7c83',
		tcp: '#e58226',
		ssl: '#D566DF',
		ttfb: '#5fdd5f',
		download: '#4189d7',
		error : '#FF0000'
	}
	var p = w.performance || w.msPerformance || w.webkitPerformance || w.mozPerformance,
		entries = [],
		navTiming = NavTiming(d,p);

	//Current URL - Navigation Timing
	if(navTiming){
		entries.push(navTiming);
	}
	//Resources - Resource Timing
	entries = ResTiming(p,entries);
	drawWaterfall(entries);

	function drawWaterfall(entries){
		
	}
		
})(window,window.document);
