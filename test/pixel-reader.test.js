const assert = require('assert');
const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {

    it('reads pixel from buffer', done => {
        const reader = new PixelReader({ bitsPerPixel: 24 });
        
        const colors = [];

        reader.on('color', color => {
            const { offset, b, g, r } = color;
            colors.push({
                offset: offset,
                b: b,
                g: g,
                r: r
            });
        });

        reader.on('end', () => {

            assert.deepEqual(colors[0], { offset: 0, b: 116, g: 63, r: 63 });
            assert.deepEqual(colors[1], { offset: 24, b: 116, g: 63, r: 63 });
            assert.deepEqual(colors[2], { offset: 48, b: 116, g: 63, r: 63 });
            done();

        });

        const buffer = Buffer.alloc(24 * 3); 

        for(let i = 0; i < 3; i++) {
            buffer.writeInt8(116, i * 24);
            buffer.writeInt8(63, i * 24 + 8);
            buffer.writeInt8(63, i * 24 + 16);
        }

        reader.read(buffer);
    });

});
