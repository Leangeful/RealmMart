let workerID: ReturnType<typeof setInterval>;

onmessage = ({ data: { data, msg } }) => {
	console.debug(msg, data);
	const ts = data.value ?? 1000;
	if (msg == 'start' && !workerID) {
		console.debug('starting worker');
		startInterval(ts);
	} else if (msg == 'changets') {
		console.log('change tickspeed', data.value);
		clearInterval(workerID);
		startInterval(ts);
	}
};

function startInterval(ts: number) {
	workerID = setInterval(() => {
		//console.log('worker:', workerID);
		postMessage({ msg: 'tick' });
	}, ts);
}

export {};
