

module.exports = function redscale(pixel) {

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

};
