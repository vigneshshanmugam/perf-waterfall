export default function(d, p){
	let	t;
	if(p && p.timing) {
		t = p.timing;
		return {
			url: d.URL,
			start: 0,
			duration: t.responseEnd - t.navigationStart,
			redirectStart: t.redirectStart === 0 ? 0 : t.redirectStart - t.navigationStart,
			redirectDuration: t.redirectEnd - t.redirectStart,
			appCacheStart: 0,
			appCacheDuration: 0,
			dnsStart: t.domainLookupStart - t.navigationStart,
			dnsDuration: t.domainLookupEnd - t.domainLookupStart,
			tcpStart: t.connectStart - t.navigationStart,
			tcpDuration: t.connectEnd - t.connectStart,
			sslStart: t.secureConnectionStart > 0 ? t.secureConnectionStart - t.navigationStart : 0,
			sslDuration: t.secureConnectionStart > 0 ? t.connectEnd - t.secureConnectionStart : 0,
			requestStart: t.requestStart - t.navigationStart,
			requestDuration: t.responseStart - t.requestStart,
			responseStart: t.responseStart - t.navigationStart,
			responseDuration: t.responseEnd - t.responseStart
		}
	}
	return null;
}