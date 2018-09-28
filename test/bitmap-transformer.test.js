const assert = require('assert');
const { readFileSync } = require('fs');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transformer');

describe('bitmap file transformer', () => {
    
    let buffer = null;

    beforeEach(() => {
        buffer = readFileSync('./test/test-bitmap.bmp');
    });

    it('test whole transform', done => {

        const bitmap = new BitmapTransformer(buffer);

        bitmap.transform(invert, err => {
            if(err) return done(err);

            const expected = readFileSync('./test/inverted-expected.bmp');
            assert.deepEqual(bitmap.buffer, expected);
            done();

            // If you don't have a standard file yet, or need to update or are adding new test,
            // you can write it out by commenting above code block, and uncomment code below 
            // that writes the file and then visually inspect the file for correctness.
            // return fs.writeFileSync('./test/inverted-expected.bmp', bitmap.buffer);
        });

    });
});
