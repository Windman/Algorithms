module.exports = function ({chunkCount, emitter}) {
    return new Promise((resolve, reject) => {
		chunks = {};
		chunksRecieved = 0;
		emitter.on(job => {
			chunksRecieved ++;
			if (chunks[job.id]) {
				reject(`Duplicate id: ${job.id}`);
			} else {
				chunks[job.id] = job;

				if (chunksRecieved === chunkCount) {
					const result = Object.values(chunks).sort((a,b) => {
						if (new Date(a.timestamp) > new Date(b.timestamp)) { return 1 }
						else if (new Date(a.timestamp) === new Date(b.timestamp)) { return 0; } 
						else { return -1}
					}).map(job => job.data).join('');

					resolve(`Resolved with "${result}"`)
				}
			}
		});

		setTimeout(() => {
			reject('Time out exceeded');
		}, 1000)
		
	});
};