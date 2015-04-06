export default function(p,e){
	let	resources = [];
	
	if(p && p.getEntriesByType) {
		resources = p.getEntriesByType('resource');
		if(resources.length > 0){
			resources.map((resource) => {
				e.push(createtimingObj(resource));
			});
		}
	}
	return e;
}

function createtimingObj(r){
	return {
		url: r.name,
		start: r.startTime,
		duration: r.duration,
		redirectStart: r.redirectStart,
		redirectDuration: r.redirectEnd - r.redirectStart,
		appCacheStart: 0,
		appCacheDuration: 0,
		dnsStart: r.domainLookupStart,
		dnsDuration: r.domainLookupEnd - r.domainLookupStart,
		tcpStart: r.connectStart,
		tcpDuration: r.connectEnd - r.connectStart,
		sslStart: r.secureConnectionStart > 0 ? r.secureConnectionStart : 0,
		sslDuration: r.secureConnectionStart > 0 ? r.connectEnd - r.secureConnectionStart : 0,
		requestStart: r.requestStart,
		requestDuration: r.responseStart - r.requestStart,
		responseStart: r.responseStart,
		responseDuration: r.responseStart == 0 ? 0 : r.responseEnd - r.responseStart
	}
}