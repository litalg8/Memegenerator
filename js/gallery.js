var gCanvas;
var gImages = [{ id: 1, url: './img/15.jpg', keywords: 'ring' }]
var gIsMouseDown;
var gMeme = {
    selectedImgId: 1,
    selectedLinkIdx: 0,
    lines: [{
        txt: 'one does not simply code without git',
        size: 20,
        align: 'center',
        color: 'red'
    }]
}

function init() {
    gCanvas = document.getElementById('myCanvas');
    gCtx = gCanvas.getContext('2d');

    gCtx.fillStyle = 'lightgray';
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
    drawImg()
}


function drawImg() {
    const img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    }
    img.src = './img/15.jpg';
}




// function drawSomething(ev) {
//     const { offsetX, offsetY } = ev;
//     if (gIsMouseDown && (offsetX > gLastShape.x + gLastShape.width || offsetX < gLastShape.x - gLastShape.width ||
//             offsetY > gLastShape.y + gLastShape.height || offsetY < gLastShape.y - gLastShape.height)) {
//         console.log(offsetX, offsetY)

//         // drawRect(offsetX, offsetY, 50, 50);
//         // drawCircle(offsetX, offsetY);

//     }
// }