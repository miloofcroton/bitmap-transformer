const assert = require('assert');
const { readFileSync, writeFileSync } = require('fs');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/grayscale-transformer');

describe('bitmap file transformer', () => {
    
    let buffer = null;

    beforeEach(() => {
        buffer = readFileSync('./test/test-bitmap.bmp');
    });

    it('test invert transform', done => {

        const bitmap = new BitmapTransformer(buffer);

        bitmap.transform(invert, err => {
            if(err) return done(err);

            const expected = readFileSync('./test/inverted-expected.bmp');
            assert.deepEqual(bitmap.buffer, expected);
            done();

        });

    });

    it('test whole transform', done => {

        const bitmap = new BitmapTransformer(buffer);

        bitmap.transform(grayscale, err => {
            if(err) return done(err);

            const expected = readFileSync('./test/grayscale-expected.bmp');
            assert.deepEqual(bitmap.buffer, expected);
            done();
            
            // write to this file and use for visual inspection
            // writeFileSync('./test/grayscale-expected.bmp', bitmap.buffer);
        });

    });
});
