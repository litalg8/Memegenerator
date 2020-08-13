'use strict';
// const USER_POS = 50;
const MEME_KEY = 'memes';
var gColor = 'white';
var gFontFamily = 'impact';
// var gMemes = [];
var gImgs = createImages();
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
            txt: 'Line Text 1',
            size: 42,
            align: 'center',
            color: gColor,
            top: 100,
            left: 250
        },
        {
            txt: 'Line Text 2',
            size: 42,
            align: 'center',
            color: gColor,
            top: 400,
            left: 250
        },

    ]
}

function getMeme() {
    console.log('gMeme', gMeme)
    return gMeme;
}

function getImageById(imgId) {
    console.log(imgId)
    return gImgs.find((img) => img.id === imgId)
}

function getImages() {
    console.log(gImgs)
    return gImgs;
}

function setLineChanges(val) {
    switch (val) {
        case '+':
            gMeme.lines[gMeme.selectedLineIdx].size += 2;
            break;
        case '-':
            gMeme.lines[gMeme.selectedLineIdx].size -= 2;
            break;
        case 'up':
            gMeme.lines[gMeme.selectedLineIdx].top -= 5;
            break;
        case 'down':
            gMeme.lines[gMeme.selectedLineIdx].top += 5;
            break;
        case 'left':
            gMeme.lines[gMeme.selectedLineIdx].left -= 5;
            break;
        case 'right':
            gMeme.lines[gMeme.selectedLineIdx].left += 5;
            break;
        case 'align-center':
            gMeme.lines[gMeme.selectedLineIdx].align = 'center';
            break;
        case 'align-left':
            gMeme.lines[gMeme.selectedLineIdx].align = 'left';
            break;
        case 'align-right':
            gMeme.lines[gMeme.selectedLineIdx].align = 'right';
            break;

    }
}

function setMemeId(id) {
    gMeme.selectedImgId = id;
}

function setMemeTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

// function setLineIdx(idx) {
//     gMeme.selectedLineIdx = idx;
// }


function createImages() {
    var gImgs = [];
    gImgs.push(
        _createImage(1, 'img/1.jpg', ['cute']),
        _createImage(2, 'img/2.jpg', ['cute']),
        _createImage(3, 'img/3.jpg', ['cat']),
        _createImage(4, 'img/4.jpg', ['funny']),
        _createImage(5, 'img/5.jpg', ['funny']),
        _createImage(6, 'img/6.jpg', ['funny']),
        _createImage(7, 'img/7.jpg', ['funny']),
        _createImage(8, 'img/8.jpg', ['funny']),
        _createImage(9, 'img/9.jpg', ['funny']),
        _createImage(10, 'img/10.jpg', ['funny']),
        _createImage(11, 'img/11.jpg', ['funny']),
        _createImage(12, 'img/12.jpg', ['happy']),
        _createImage(13, 'img/13.jpg', ['happy']),
        _createImage(14, 'img/14.jpg', ['happy']),
        _createImage(15, 'img/15.jpg', ['happy']),
        _createImage(16, 'img/16.jpg', ['happy']),
        _createImage(17, 'img/17.jpg', ['happy']),
        _createImage(18, 'img/18.jpg', ['happy']))
    console.log(gImgs)
    return gImgs;

}

function _createImage(id, url, keywords) {
    return {
        id,
        url,
        keywords
    };
}


function setFontColor(currColor) {
    gColor = currColor;
    gMeme.lines.forEach((line) => {
        line.color = currColor;
    })
}

function getFont() {
    return gFontFamily;
}

function setFontFamily(currFont) {
    gFontFamily = currFont;
}