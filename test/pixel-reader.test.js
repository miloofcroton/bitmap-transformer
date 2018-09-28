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

            console.log(colors);

            assert.deepEqual(colors[0], { offset: 0, b: 116, g: 63, r: 63 });
            assert.deepEqual(colors[1], { offset: 24, b: 116, g: 63, r: 63 });
            assert.deepEqual(colors[2], { offset: 48, b: 116, g: 63, r: 63 });
            done();

        });

        const buffer = Buffer.alloc(24 * 3); // for three pixels, 24 bits * 3 = 72 bits

        // pixel #1
        buffer.writeInt8(116, 0);
        buffer.writeInt8(63, 8);
        buffer.writeInt8(63, 16);

        // pixel #2
        buffer.writeInt8(116, 24);
        buffer.writeInt8(63,32);
        buffer.writeInt8(63, 40);

        // pixel #3
        buffer.writeInt8(116, 48);
        buffer.writeInt8(63, 56);
        buffer.writeInt8(63, 64);

        // Call read method with your buffer
        reader.read(buffer);
    });

});
