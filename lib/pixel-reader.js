const EventEmitter = require('events');

module.exports = class PixelReader extends EventEmitter {
    constructor(options) {
        super();
        this.bitsPerPixel = options.bitsPerPixel;
    }

    read(buffer) {

        for(let i = 0; i < buffer.length; i += this.bitsPerPixel) {

            this.emit('color', {
                offset: i,
                b: buffer.readInt8(i),
                g: buffer.readInt8(i + 8),
                r: buffer.readInt8(i + 16),
            });
        }

        this.emit('end');
    }
};
