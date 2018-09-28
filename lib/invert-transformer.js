

module.exports = function invert(pixel) {

    function unsignedIntSub(num) {
        return Math.abs(num - 256) - 1;
    }

    for(let key in pixel) {
        pixel[key] = unsignedIntSub(pixel[key]);
    }

    return pixel;

};

