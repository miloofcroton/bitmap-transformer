

module.exports = function grayscale(pixel) {

    let sum = 0;
    for(let key in pixel) {
        if(key !== 'offset'){
            sum += pixel[key];
        }
    }
    
    const avg = Math.floor(sum / 3);
    for(let key in pixel) {
        if(key !== 'offset'){
            pixel[key] = avg;
        }
    }


    return pixel;
    // return pixel.reduce((acc, curr) => {

    //     acc.

    // }, {});

};
