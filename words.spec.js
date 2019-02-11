const words = require('./words');
const assert = require('chai').assert;

describe('Strings based algorithms', () => {
    before(done => {
        done();
    });

    after(done => {
        done();
    });

    // beforeEach(() => {
        
    // });

    describe('GET', () => {
        it('Find word friquency should return correct array of the most friquet values', done => {
            const text = `It is not changed, you are looking at Assert's functionality:s, but not Expect's/Should!s which topic starter was changed concerned about`;
            const exclude = ["it", "is", "the", "not"]; 
            const result = words.findWordFriquency(text, exclude);
            
            assert.deepStrictEqual(result, ["s"]);
            
            done();
        });
    });

});
