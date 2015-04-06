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

;(function(w,d){
	const COLORS = {
		blocked: '#cdcdcd',
		dns: '#1f7c83',
		tcp: '#e58226',
		ssl: '#D566DF',
		ttfb: '#5fdd5f',
		download: '#4189d7',
		error : '#FF0000'
	};

	const HEADERS = ['Name', 'Waterfall'];

	var p = w.performance || w.msPerformance || w.webkitPerformance || w.mozPerformance,
		entries = [],
		navTiming = NavTiming(d,p);

	var table = d.createElement('table');

	//Current URL - Navigation Timing
	if(navTiming){
		entries.push(navTiming);
	}
	//Resources - Resource Timing
	entries = ResTiming(p,entries);
	
	drawWaterfall(entries);

	function drawWaterfall(){
		createHeaders();
		createContainer();
		// d.body.appendChild(table);
	}

	function createHeaders(){
		var tHead = table.createTHead();
		var thRow = tHead.insertRow(), thCol;
		HEADERS.map((v)=>{
			thCol = thRow.insertCell();
			thCol.innerHTML = v;
		});
	}

	function createContainer(){
		var tBody = d.createElement('tbody');
		entries.map((o)=>{
			createResourceGraph(o, tBody);
		});
	}

	function createResourceGraph(obj, tBody){
		var tbRow = tBody.insertRow();
		var nameCol = tbRow.insertCell();
		nameCol.innerHTML = obj.url;
		var timelineCol = tbRow.insertCell();
		var timeline = createTimeline(obj);
		timelineCol.innerHTML = timeline;
	}
		
	function createTimeline(obj){
		var fragment = d.createDocumentFragment();
		var div = d.createElement('div');
		var startTime = obj.start || 0;

	}

})(window,window.document);
