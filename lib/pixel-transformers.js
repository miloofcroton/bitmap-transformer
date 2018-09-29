
function invert(pixel) {

    pixel.r = 255 - pixel.r;
    pixel.g = 255 - pixel.g;
    pixel.b = 255 - pixel.b;

    return pixel;
}

function grayscale(pixel) {

    let sum = 0;
    for(let key in pixel) {
        if(key !== 'offset') {
            sum += pixel[key];
        }
    }

    const avg = Math.floor(sum / 3);
    for(let key in pixel) {
        if(key !== 'offset') {
            pixel[key] = avg;
        }
    }

    return pixel;
}

function redscale(pixel) {

    let sum = 0;
    for(let key in pixel) {
        if(key !== 'offset'){
            sum += pixel[key];
        }
    }
    
    const avg = Math.floor(sum / 3);
    
    pixel.r = 255;
    pixel.g = avg;
    pixel.b = 0;

    return pixel;
}

module.exports = { 
    invert, 
    grayscale, 
    redscale 
};
