'use strict';
var gCanvas = document.getElementById('myCanvas')
var gCtx;
var gDrag = 'up';
var gCurrLine;
var gCurrSelection;
var gCanvas = document.getElementById('myCanvas');
console.log(gCanvas, 'type anywhere on the screen and it kinda works')
var gCtx = gCanvas.getContext('2d');
resizeCanvas();

function init() {
    var images = getImageById();
    renderImages(images)


}

function openMemeEditor(imgId) {
    document.querySelector('.meme-editor').hidden = !document.querySelector('.meme-editor').hidden;
    document.querySelector('.gallery').hidden = !document.querySelector('.gallery').hidden;
    createMeme(imgId)
    drawCanvas();

    // onToggleGallery()
}

function drawCanvas() {
    const meme = getMeme()
    const img = document.getElementById(meme.selectedImgId)
        // console.log(img);
        // console.log(meme)
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    meme.lines.map(line => drawText(line))
        // console.log(gCurrLine);
    markLine();

}


// function resizeCanvasByImg(img) {
//     gCanvas.width = img.width;
//     gCanvas.height = img.height;


// }

function onAddLine() {
    const meme = getMeme();
    meme.selectedLineIdx++;
    var x = gCanvas.width / 2;
    var y;
    if (meme.lines.length === 0) y = 100;
    if (meme.lines.length === 1) y = (gCanvas.height - 100);
    if (meme.lines.length >= 2) y = (gCanvas.height / 2);
    addLine('Test Text', x, y)
    document.querySelector('.line-edit').value = '';
    drawText(meme.lines[meme.lines.length - 1]);
    // switchLine()
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
    // if (!meme.lines.length) return;
    var currLine = meme.selectedLineIdx;
    if (currLine === meme.lines.length - 1) currLine = 0
    else currLine++;
    setLineIdx(currLine)
    document.querySelector('.line-edit').value = meme.lines[currLine].txt;
    drawCanvas();
    // drawLineHighlight()
}

function editTextLine(elBtn) {
    setLineChanges(elBtn);
    drawCanvas();
}

function markLine() {
    var meme = getMeme();
    var markedLine = meme.selectedLineIdx;
    gCurrLine = meme.lines[markedLine];
    var lineWidth = gCtx.measureText(gCurrLine.txt).width;
    var lineHeight = gCurrLine.size;
    let x;
    switch (gCurrLine.align) {
        case 'center':
            x = gCurrLine.x - (lineWidth / 2);
            break;
        case 'left':
            x = gCurrLine.x;
            break;
        case 'right':
            x = gCurrLine.x - lineWidth;
            break;
    }
    let y = gCurrLine.y - (0.9 * lineHeight)
    drawRect(x, y, lineWidth, lineHeight)

}

function onHideMark() {
    const img = new Image();
    const currImg = getImageById(gMeme.selectedImgId);
    img.src = currImg.url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        gMeme.lines.forEach((line) => {
            drawText(line)
        })
    }

}

function drawRect(x, y, width, height) {
    gCtx.beginPath();
    gCtx.rect(x, y, width, height); /// x, y, width, height
    gCtx.setLineDash([5]);
    gCtx.strokeStyle = '#ffffff';
    gCtx.stroke();
    gCtx.setLineDash([0]);
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

function onDownloadMeme(elLink) {
    const memeImg = gCanvas.toDataURL('image/jpg')
        // console.log(memeImg)
    elLink.href = memeImg;
    elLink.download = 'my-meme.jpg'

}

// function onToggleGallery() {
//     const elGallery = document.querySelector('.gallery');
//     const elMemeEditor = document.querySelector('.meme-editor');
//     elMemeEditor.classList.remove('hidden');
//     elGallery.classList.add('hidden')

// }

function onCloseEdit() {
    const elGallery = document.querySelector('.gallery');
    const elMemeEditor = document.querySelector('.meme-editor');
    elGallery.classList.remove('hidden')
    elMemeEditor.classList.add('hidden')
    drawCanvas();

}

function onRemoveLine() {
    removeLine();
    document.querySelector('.line-edit').value = '';
    drawCanvas();
}

function resizeCanvas() {
    const elcContainer = document.querySelector('.canvas-container');
    gCanvas.width = elcContainer.offsetWidth;
    gCanvas.height = elcContainer.offsetHeight;


}

function refreshCanvas() {
    var meme = getMeme();
    document.getElementById('first-line').value = meme.lines[meme.selectedLineIdx].txt;

}

function renderImages() {
    var images = getImages();
    var strHtmls = images.map(function(image) {
        return `
          <img  onclick="openMemeEditor('${image.id}',this)" id='${image.id}' src=${image.url} alt=""/>
          `
    })
    document.querySelector('.gallery').innerHTML = strHtmls.join('')
}




function onDragEl(ev) {
    gDrag = 'down';
    // console.log(gDrag)
    const { offsetX, offsetY } = ev
    if ((Math.abs(offsetY - gMeme.lines[0].y)) + (Math.abs(offsetX - gMeme.lines[0].y)) < (Math.abs(offsetY - gMeme.lines[1].y)) + (Math.abs(offsetX - gMeme.lines[1].y))) {
        gMeme.selectedLineIdx = 0
    } else {
        gMeme.selectedLineIdx = 1;
    }

    drawCanvas();

}

function onMoveEl(ev) {
    if (gDrag === 'down') {
        const { offsetX, offsetY } = ev;
        gMeme.lines[gMeme.selectedLineIdx].x = offsetX;
        gMeme.lines[gMeme.selectedLineIdx].y = offsetY;
        drawCanvas()
    }
}

function onPlaceEl(ev) {
    gDrag = 'up';
    document.querySelector('.line-edit').focus();
}


function onSaveMeme() {
    return
    addSavedMeme()
    saveToStorage(SAVED_KEY, gSavedMemes)
}