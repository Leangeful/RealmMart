let workerID: ReturnType<typeof setInterval>;

onmessage = ({ data: { data, msg } }) => {
	const ts = data.value ?? 1000;
	if (msg == 'start' && !workerID) {
		startInterval(ts);
	} else if (msg == 'changets') {
		clearInterval(workerID);
		startInterval(ts);
	}
};

function startInterval(ts: number) {
	workerID = setInterval(() => {
		postMessage({ msg: 'tick' });
	}, ts);
}

export {};
