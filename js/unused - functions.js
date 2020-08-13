'use strict';
notes...




// function renderMeme(imgId) {
//     const img = new Image();
//     img.src = getImageById(imgId);
//     const line = getLineById();
//     img.onload = () => {
//         gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
//         if (line) {
//             drawText(line.txt, line.x, line.y, line.strColor, line.color,
//                 line.fontSize, line.fontFamily, line.align)

//         }
//     }
//     return img;
// }




// function drawSomething(ev) {
//        const { offsetX, offsetY } = ev;
//        var elCanvas = document.querySelector('canvas');
//        if(findLineByPos(offsetX,offsetY)){
//            elCanvas.classList.add('text');
//        } else{
//         elCanvas.classList.remove('text');
//        }
//     if (gIsMouseDown && (offsetX > gLastShape.x + gLastShape.width || offsetX < gLastShape.x - gLastShape.width ||
//             offsetY > gLastShape.y + gLastShape.height || offsetY < gLastShape.y - gLastShape.height)) {
//         console.log(offsetX, offsetY)

//         drawRect(offsetX, offsetY, 50, 50);
//         drawCircle(offsetX, offsetY);

//  }
// }

// function renderImage(elImg) {
//     setImage(elImg.dataset.id);
//     document.querySelector('.gallery').hidden = true;
//     document.querySelector('.edit-area').hidden = false;
//     renderMeme()
// }


// function toggleDrag(falg) {
//     gIsDragOn = falg
// }

// function renderImages() {
//     var images = getImages();
//     var strHtmls = images.map(function(image) {
//         return `
//         <div class="image-item" onclick="drawImg(${image.id})">
//         <a class="portfolio-link" data-toggle="modal">
//           <img class="img-fluid" src="${image.url}" alt=""/>
//         </a>
//           </div>
//           `
//     })
//     document.querySelector('.gallery').innerHTML = strHtmls.join('')
// }


// var keyHistory = "";

// function addletter(letter) {
//     drawText()
//     keyHistory += letter;
//     // gCtx.clearRect(0, 0, 300, 300);
//     gCtx.fillText(keyHistory, 100, 100);
//     gCtx.strokeText(keyHistory, 100, 100);
//     // gCtx.measureText(keyHistory, 100, 100)
// }

// function keyUpHandler(event) {
//     var letters = "abcdefghijklmnopqrstuvwxyz";
//     var key = event.keyCode;
//     if (key > 64 && key < 91) {
//         var letter = letters.substring(key - 63, key - 65);
//         addletter(letter);
//     }
// }





// gCtx.fillStyle = 'lightgray';
// gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
// window.addEventListener("keyup", keyUpHandler, true);
// renderMeme()
// createImages()
// renderImages()


// function drawText() {
//     var meme = getMeme();
//     meme.lines.forEach((line) => {
//         var currText = line.txt;
//         var fontSize = line.size;
//         var txtAlign = line.align;
//         var txtColor = line.color;
//         var userPos = line.pos;
//         gCtx.lineWidth = '2';
//         gCtx.strokeStyle = 'black';
//         gCtx.fillStyle = txtColor;
//         var font = getFont();
//         gCtx.font = `${fontSize}px ${font}`;
//         var xPos = gCanvas.width / 2;
//         gCtx.textAlign = txtAlign;
//         gCtx.fillText(currText, xPos, userPos)
//         gCtx.strokeText(currText, xPos, userPos)
//         setUserPos(xPos, userPos)
//     })

// }



// function renderImage(elImg) {
//     setImage(elImg.dataset.id);
//     document.querySelector('.gallery').hidden = true;
//     document.querySelector('.edit-area').hidden = false;
//     renderMeme()
// }


// function renderMeme(imgId) {
//     const img = new Image();
//     img.src = getImageById(imgId);
//     const line = getLineById();
//     img.onload = () => {
//         gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
//         if (line) {
//             drawText(line.txt, line.x, line.y, line.strColor, line.color,
//                 line.fontSize, line.fontFamily, line.align)

//         }
//     }
//     return img;
// }




// function toggleDrag(falg) {
//     gIsDragOn = falg
// }


// var keyHistory = "";

// function addletter(letter) {
//     drawText()
//     keyHistory += letter;
//     // gCtx.clearRect(0, 0, 300, 300);
//     gCtx.fillText(keyHistory, 100, 100);
//     gCtx.strokeText(keyHistory, 100, 100);
//     // gCtx.measureText(keyHistory, 100, 100)
// }

// function keyUpHandler(event) {
//     var letters = "abcdefghijklmnopqrstuvwxyz";
//     var key = event.keyCode;
//     if (key > 64 && key < 91) {
//         var letter = letters.substring(key - 63, key - 65);
//         addletter(letter);
//     }
// }




// var gImgs = [
//     { id: 1, url: 'img/1.jpg', keywords: 'orange' },
//     { id: 2, url: 'img/2.jpg', keywords: 'cute' },
//     { id: 3, url: 'img/3.jpg', keywords: 'girl' },
//     { id: 4, url: 'img/4.jpg', keywords: 'food' }

// ];


// function setKeyWords(keywords) {
//     keywords.foreach((keyword) => {
//         gKeyWords.push({ word: keyword, search: 0 })
//     })
// }
// function addLine() {
//     gMeme.selectedLineIdx = gMeme.lines.length;
//     var userPos;
//     if (gMeme.selectedLineIdx === 0) userPos = USER_POS;
//     else if (gMeme.selectedLineIdx === 1) userPos = gCanvas.height - USER_POS;
//     else userPos = USER_POS * gMeme.selectedLineIdx;
//     var line = {
//             id: gMeme.lines.length,
//             txt: '',
//             size: 42,
//             align: 'center',
//             color: gColor,
//             pos: pos,
//             x: 0,
//             y: 0,
//         }
//         // line.startY = line.pos + line.size / 2;
//         // line.endY = line.pos + line.size / 2;
//     if (gMeme.lines.length === 0) {
//         gMeme.lines[0] = line;
//     }
//     console.log(line.x);
//     console.log(line.y);
//     gMeme.lines.push(line);
// }


// Add : switch between lines
/// function setLinePos()
// function setUserPos(x, y) {
//     gMeme.lines[gMeme.selectedLineIdx].x = x;
//     gMeme.lines[gMeme.selectedLineIdx].y = y;
// var gMeme = createMeme(1);


// function createMeme(imgId) {
//     return {
//         selectedImgId: imgId,
//         selectedLineIdx: 0,
//         lines: [{
//             id: 0,
//             txt: '',
//             size: 42,
//             align: 'center',
//             color: gColor,
//             pos: USER_POS,
//             x: 0,
//             y: 0,
//         }]
//     }
//     // gMeme = meme;
//     // addLine('text', 150, 50)
// }
// }

// function setMemeFontSize(val) {
//     gMeme.lines[gMeme.selectedLineIdx].size += (val);
// }

// function setMemePos(val) {
//     gMeme.lines[gMeme.selectedLineIdx].pos += (val);
// }


// function getLineById() {
//     if (gMeme.lines.length) return gMeme.lines[gMeme.selectedLineIdx]
//     return null;
// }


// function getMeme(imgId) {
//     createMeme(imgId);
// }