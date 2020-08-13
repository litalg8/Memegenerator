var gCanvas;
var gIsDragOn;


function init() {
    console.log('type anywhere on the screen and it kinda works')
}


function drawMeme() {
    gCanvas = document.getElementById('myCanvas');
    gCtx = gCanvas.getContext('2d');
    gCanvas.addEventListener("click", canvasClicked);
    gCanvas.addEventListener("touch", canvasClicked);
    drawImg();
}

function drawImg() {
    var img = new Image();
    var meme = getMeme();
    var currImg = getImageById(meme.selectedImgId);
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        // drawText();
        getMemeLines()
    }
    img.src = currImg.url;
}

function getMemeLines() {
    gMeme.lines.forEach((line, idx) => {
        drawText(idx, line.left, line.top)
    });
}

function changeTxtLine() {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
    drawMeme()
}

function drawText(idx, x, y) {
    var memeText = gMeme.lines[idx].txt;
    var fontSize = gMeme.lines[idx].size;
    var txtAlign = gMeme.lines[idx].align;
    var txtColor = gMeme.lines[idx].color;
    var font = getFont();
    gCtx.lineWidth = '2';
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = txtColor;
    gCtx.font = `${fontSize}px ${font}`;
    gCtx.textAlign = txtAlign;
    console.log(memeText)
    gCtx.fillText(memeText, x, y)
    gCtx.strokeText(memeText, x, y)
        // setUserPos(xPos, userPos)
}

function editTextLine(elBtn) {
    setLineChanges(elBtn);
    drawMeme();
}