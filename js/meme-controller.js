'use strict';
var gCanvas = document.getElementById('my-canvas');

// console.log(gCanvas, 'type anywhere on the screen and it kinda works')
// CR: run in init
// var gLineIdx; 
var gCtx;
var gIsDrag = false;
var BoundingBox = gCanvas.getBoundingClientRect();
var gSelectedLine = false;
// CR:  gIsMark 




function init() {
    document.querySelector('.meme-editor').style.display = 'none';
    var images = getImageById();
    renderImages(images)
    gCtx = gCanvas.getContext('2d');
    // gCanvas.addEventListener("touchstart", onDragEl);
    // gCanvas.addEventListener("touchmove", onMoveEl);
    // gCanvas.addEventListener("touchend", onPlaceEl);

}

function openMemeEditor(imgId) {
    document.querySelector('.meme-editor').style.display = 'flex';
    document.querySelector('.gallery').style.display = 'none';
    createMeme(imgId);
    drawCanvas();
}


function drawCanvas() {
    const meme = getMeme();
    // console.log(meme)
    var currImg = getImageById(meme.selectedImgId)
    const img = new Image();
    // console.log(currImg)
    img.src = currImg.url;
    // const line = getLineById();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        meme.lines.forEach(line => drawText(line))
        markLine();

    }
}


function onAddLine() {
    const meme = getMeme();
    meme.selectedLineIdx++;
    var x = gCanvas.width / 2;
    var y;
    if (meme.lines.length === 0) y = 100;
    if (meme.lines.length === 1) y = (gCanvas.height - 100);
    if (meme.lines.length >= 2) y = (gCanvas.height / 2);
    addLine('This is another line', x, y)
// gHeight += 50 
    document.querySelector('.line-edit').value = '';
    drawText(meme.lines[meme.lines.length - 1]);
    drawCanvas();
}

function drawText(line) {
    gCtx.beginPath();
    gCtx.lineWidth = '2';
    gCtx.strokeStyle = line.strokeColor;
    gCtx.fillStyle = line.color;
    gCtx.font = line.size + 'px' + ' ' + line.fontFamily;
    gCtx.textAlign = line.align;
    // console.log(line)
    gCtx.fillText(line.txt, line.x, line.y)
    gCtx.strokeText(line.txt, line.x, line.y)
        // setUserPos(xPos, userPos)
}


function onSwitchLine() {
    var meme = getMeme();
    document.querySelector('.line-edit').value = meme.lines[meme.selectedLineIdx].txt;
    switchLines()
    drawCanvas();
}

function onTextEdit(elBtn) {
    setLineChanges(elBtn);
    drawCanvas();
}

function markLine() {
    var meme = getMeme();
    var markedLine = meme.selectedLineIdx;
    var currLine = meme.lines[markedLine];
    var lineWidth = gCtx.measureText(currLine.txt).width;
    var lineHeight = currLine.size;
    let x;
    switch (currLine.align) {
        case 'center':
            x = currLine.x - (lineWidth / 2);
            break;
        case 'left':
            x = currLine.x;
            break;
        case 'right':
            x = currLine.x - lineWidth;
            break;
    }
    let y = currLine.y - (0.9 * lineHeight)

    gCtx.beginPath();
    gCtx.rect(x, y, lineWidth, lineHeight); /// x, y, width, height
    gCtx.strokeStyle = '#59b6c1';
    gCtx.fillStyle = '#ffffff15';
    gCtx.strokeRect(x, y, lineWidth, lineHeight);
    gCtx.fillRect(x, y, lineWidth, lineHeight);

}


function onChangeFont(font) {
    setFontFamily(font)
    drawCanvas();
}

function onChangeStrokeColor(stroke) {
    setStrokeColor(stroke)
    drawCanvas();
}

function onChangeColor(color) {
    setFontColor(color);
    drawCanvas();
}

function onWrite(ev) {
    setMemeTxt(ev.value);
    drawCanvas();
}


function onToggleGallery() {
    document.querySelector('.meme-editor').style.display = 'none';
    document.querySelector('.gallery').style.display = 'grid';
}


function onRemoveLine() {
    removeLine();
    document.querySelector('.line-edit').value = '';
    drawCanvas();
}

function renderImages() {
    var images = getImages();
    var strHtmls = images.map(function(image) {
        return `
          <img onclick="openMemeEditor(${image.id},this)" id='${image.id}' src=${image.url} alt=""/>
          `
    })
    document.querySelector('.gallery').innerHTML = strHtmls.join('')
}



function onMouseMove(ev) {
    ev.preventDefault()
    ev.stopPropagation();
    const { offsetX, offsetY } = ev;
    var meme = getMeme();
    gIsDrag = true;
    meme.lines.forEach((line) => {
        let lineWidth = gCtx.measureText(line.txt).width;
        let lineHeight = line.size;
        if (offsetX >= line.x - (lineWidth / 2) &&
            offsetX <= line.x + (lineWidth / 2) &&
            offsetY >= line.y - (lineHeight) &&
            offsetY <= line.y) {
            gSelectedLine = true;
            getLineIdx(offsetX, offsetY);
            document.querySelector('.line-edit').value = line.txt;
        } else {
            gSelectedLine = false;
        }
    })

}



function onMouseDown(ev) {
    ev.preventDefault()
    if (!gIsDrag && !gSelectedLine) return;
    const { offsetX, offsetY } = ev;
    // gLineIdx = getLineIdx(offsetX, offsetY)
    const { movementX, movementY } = ev;
    let linePosX = offsetX + movementX;
    let linePosY = offsetY + movementY;
    var meme = getMeme();
    if (gSelectedLine) {
        getLineIdx(meme.lines[meme.selectedLineIdx], linePosX, linePosY)
        drawCanvas();
    }
}



function onMouseUp(ev) {
    ev.preventDefault()
    gIsDrag = false;
    gSelectedLine = false;
}



function onSaveMeme() {
    // return
    addSavedMeme()
    saveToStorage(SAVED_KEY, gSavedMemes)
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
    document.querySelector('.mobile-menu-close').hidden = !document.querySelector('.mobile-menu-close').hidden;
    document.querySelector('.mobile-menu-btn').hidden = !document.querySelector('.mobile-menu-btn').hidden;
}

function toggleClose() {
    document.querySelector('.mobile-menu-close').hidden = true;
    document.querySelector('.mobile-menu-btn').hidden = false;
    document.body.classList.toggle('menu-open');
}



function onDownloadMeme(elLink) {
    const memeImg = gCanvas.toDataURL('image/jpg')
        // console.log(memeImg)
    elLink.href = memeImg;
    elLink.download = 'my-meme.jpg'

}







// if (offsetX >= line.x - (lineWidth / 2) &&
// offsetX <= line.x + (lineWidth / 2) &&
// offsetY >= line.y - (lineHeight) &&
// offsetY <= line.y) {
