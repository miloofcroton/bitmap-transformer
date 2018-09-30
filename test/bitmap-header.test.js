const assert = require('assert');
const constants = require('../lib/bitmap-constants');
const BitmapHeader = require('../lib/bitmap-header');

const fs = require('fs');

describe('bitmap header', () => {

    let buffer = null;
    beforeEach(done => {
        fs.readFile('./test/pics/test-bitmap.bmp', (err, data) => {
            if(err) return done(err);
            buffer = data;
            done();
        });
    });

    it('has correct specs', () => {
        assert.ok(constants.PIXEL_OFFSET);
        assert.ok(constants.BITS_PER_PIXEL_OFFSET);
        assert.ok(constants.FILE_SIZE_OFFSET);
    });

    it('parses header data', () => {
        const header = new BitmapHeader(buffer);
        assert.equal(header.bitsPerPixel, 24);
        assert.equal(header.pixelOffset, 54);
        assert.equal(header.fileSize, 30054);
    });

});

describe('checks color table', () => {

    let buffer = null;

    beforeEach(done => {
        fs.readFile('./test/pics/palette-test-bitmap.bmp', (err, data) => {
            if(err) return done(err);
            buffer = data;
            done();
        });
    });

    it('reads table data', () => {
        const header = new BitmapHeader(buffer);
        assert.equal(header.paletteSize, 256);
        assert.equal(header.pixelOffset, 1078);
    });
});
