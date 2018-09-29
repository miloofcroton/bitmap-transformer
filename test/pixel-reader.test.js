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
            assert.deepEqual(colors[0], { offset: 0, b: 220, g: 63, r: 63 });
            assert.deepEqual(colors[1], { offset: 3, b: 220, g: 63, r: 63 });
            assert.deepEqual(colors[2], { offset: 6, b: 220, g: 63, r: 63 });
            done();
        });

        const buffer = Buffer.alloc(24 * 3);

        buffer.writeUInt8(220, 0);
        buffer.writeUInt8(63, 1);
        buffer.writeUInt8(63, 2);
        buffer.writeUInt8(220, 3);
        buffer.writeUInt8(63, 4);
        buffer.writeUInt8(63, 5);
        buffer.writeUInt8(220, 6);
        buffer.writeUInt8(63, 7);
        buffer.writeUInt8(63, 8);
        reader.read(buffer);
    });

});

