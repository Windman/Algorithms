
const torrentclient = require('./torrent-client/torrent-client');

const tonnernt1 = {
	chunkCount: 3,
    emitter: {on: (fn) => {
        fn({id: 5314, data: 'The Good, ', timestamp: new Date('2019-01-01')});
        fn({id: 1543, data: 'd the Ugly', timestamp: new Date('2019-01-03')});
        fn({id: 2494, data: 'the Bad an', timestamp: new Date('2019-01-02')});
    }}
};

const tonnernt2 = {
    chunkCount: 2,
    emitter: {on: (fn) => {}}
}

const torrent3 = {
    chunkCount: 1,
    emitter: {on: (fn) => {
        fn({id: 0, data: 'hello', timestamp: new Date('2019-01-01')});
        fn({id: 0, data: 'world', timestamp: new Date('2019-01-02')});
    }}
};
torrentclient(torrent3)
.then(result => {
	console.log(result);
}, err => {
	console.log(err)
})
.catch(err => console.log(err));