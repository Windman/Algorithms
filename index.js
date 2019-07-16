const torrentclient = require('./yandex/torrent-client');

const quizz = {
	chunkCount: 3,
    emitter: {on: (fn) => {
        fn({id: 5314, data: 'The Good, ', timestamp: new Date('2019-01-01')});
        fn({id: 1543, data: 'd the Ugly', timestamp: new Date('2019-01-03')});
        fn({id: 2494, data: 'the Bad an', timestamp: new Date('2019-01-02')});
    }}
};

torrentclient(quizz)
.then(result => console.log(result))
.catch(err => console.log(err));

