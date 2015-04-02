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

var COLORS = {
	blocked: '#cdcdcd',
	dns: '#1f7c83',
	tcp: '#e58226',
	ssl: '#D566DF',
	request: '#5fdd5f',
	response: '#4189d7',
	error : '#FF0000'
}
