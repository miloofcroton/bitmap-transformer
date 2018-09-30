const { 
    PIXEL_OFFSET, 
    BITS_PER_PIXEL_OFFSET, 
    FILE_SIZE_OFFSET,
    PALETTE_SIZE_OFFSET,
    // COLOR_TABLE_OFFSET
} = require('../lib/bitmap-constants');

module.exports = class BitmapHeader {

    constructor(data) {
        this.pixelOffset = data.readUInt32LE(PIXEL_OFFSET);
        this.fileSize = data.readUInt32LE(FILE_SIZE_OFFSET);
        this.bitsPerPixel = data.readUInt16LE(BITS_PER_PIXEL_OFFSET);
        this.paletteSize = data.readUInt32LE(PALETTE_SIZE_OFFSET);
    }

};
