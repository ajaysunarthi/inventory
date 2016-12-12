var rgbed = getAverageRGB(document.getElementById('i'));

document.body.style.backgroundColor = 'rgb(' + rgbed.r + ',' + rgbed.g + ',' + rgbed.b + ')';

function getAverageRGB(imgEl) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    // var i = -4;
    var height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    var width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    var data = context.getImageData(0, 0, width, height);

    var length = data.data.length;
    var rgb = { r: 0, g: 0, b: 0 };
    var count = 0;

    for (var i = 0; i < length; i += 4) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
    }

    rgb.r = Math.floor(rgb.r / count);
    rgb.g = Math.floor(rgb.g / count);
    rgb.b = Math.floor(rgb.b / count);

    return rgb
}


