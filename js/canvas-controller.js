'use strict';
var gCanvas;
var gCtx;
renderImages();


function renderImages() {
    var images = getImages();
    var strHtmls = images.map(function(image) {
        return `
        <div class="image-item" >
          <img class="img-fluid" onclick="onChooseImg(this)" data-id=${image.id} src=${image.url} alt=""/>
          </div>
          `
    })
    document.querySelector('.gallery').innerHTML = strHtmls.join('')
}

function onChooseImg(elMeme) {
    var memeId = +elMeme.dataset.id;
    setMemeId(memeId)
        // document.querySelector('.gallery').hidden = !document.querySelector('.gallery').hidden;
        // document.querySelector('.line-edit').hidden = !document.querySelector('.line-edit').hidden;
    drawMeme();

}

function onWrite(ev) {
    setMemeTxt(ev.value);
    drawMeme();
}

function onToggleGallery() {
    gMeme = createMeme(1, 40, USER_POS, 70, 30)
}

function canvasClicked(ev) {
    ev.preventDefault();
    var offsetX = ev.offsetX;
    console.log('firstDraw: offsetX', offsetX)
    var offsetY = ev.offsetY;
    console.log('firstDraw: offsetY', offsetY)
}

// function onAddText() {
//     var elTxtInput = document.querySelector('line-edit');
//     if (!elTxtInput.value) return;
//     elTxtInput.value = '';
//     addLine();
// }