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


// var gMeme = {
//     selectedImgId: 1,
//     selectedLineIdx: 0,
//     lines: [{
//             txt: 'Line Text 1',
//             size: 42,
//             align: 'center',
//             color: gColor,
//             top: 100,
//             left: 250
//         },
//         {
//             txt: 'Line Text 2',
//             size: 42,
//             align: 'center',
//             color: gColor,
//             top: 400,
//             left: 250
//         },

//     ]
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



// var memeText = meme.lines[idx].txt;
// var fontSize = meme.lines[idx].size;
// var txtAlign = meme.lines[idx].align;
// var txtColor = meme.lines[idx].color;
// var font = getFont();

// gCtx.font = `${fontSize}px ${font}`;

// function drawImg() {
//     const img = new Image();
//     img.src = getImgByUrl();
//     const lines = getLines();
//     img.onload = () => {

//         getMemeLines()
// lines.forEach(line => {
//         gCtx.beginPath();
//         drawText(gMeme.lines.txt, 225, 225)

// })
// let line = getSelectedLine();
// if(line && line.txt){
//     let txtWidth =gCtx.measureText(line.txt).width; 

// }
// drawText();
// getMemeLines()
//     }

// }



// function changeTxtLine() {
//     gMeme.lines[gMeme.selectedLineIdx].txt = txt;
//     drawMeme()
// }



// function getLines() {
//     return gMeme.lines;
// }


// function getNewLine() {
//     if (gMeme.lines.length && gMeme.selectedLineIdx !== -1) return gMeme.lines[gMeme.selectedLineIdx];
//     return null;
// }

// function addLine() {
//     gMeme.lines.push(createLine('this is a line'));
//     gMeme.selectedLineIdx = gMeme.lines.length - 1;
// }


// function createLine(txt = 'enter new line here', size = 42, align = 'center', color = gColor, top = "100", left = "250") {
//     return {
//         txt,
//         size,
//         align,
//         color,
//         top,
//         left
//     }
// }


// var gColor = 'white';
// var gFontFamily = 'impact';


// function setMemeId(id) {
//     gMeme.selectedImgId = id;
// }


// function getMemeLines() {
//     gMeme.lines.forEach((line, idx) => {
//         drawText(idx, line.left, line.top)
//     });
// }


// function onChooseImg(elMeme) {
// var memeId = +elMeme.dataset.id;
// setMeme(memeId)
// document.querySelector('.gallery').hidden = !document.querySelector('.gallery').hidden;
// document.querySelector('.line-edit').hidden = !document.querySelector('.line-edit').hidden;
// drawCanvas();

// }



// var numOfLines = gMeme.lines.length;
// var canvasHeight = gCanvas.height;
// var canvasWidth = gCanvas.width;
// var newFirstLine;
// if (numOfLines === 0) {
//     newFirstLine.Math.round(canvasHeight * 0.2);
// } else if (numOfLines === 1) {
//     newFirstLine.Math.round(canvasHeight * 0.8)
// } else {
//     newFirstLine.Math.round(canvasHeight / 2)

// var gMeme = getMeme();
// if (gMeme.lines.length === 1) return false;
// gMeme.lines.splice(gMeme.selectedLineIdx, 1)
// var newLine = gMeme.selectedLineIdx - 1
// if (newLine < 0) newLine = 0;
// return newLine;


// <!-- <i class="fab fa fa-plus"></i> -->
// <!-- <i class="fab fa fa-sort"></i> -->
// <!-- <section class="user-changes">
//     <h1>Playing with Shapes</h1>
//     <button class="btn-changes" onclick="draw('rect')">Rectangle</button>
//     <button class="btn-changes" onclick="draw('circle')">Circle</button>
//     <button class="btn-changes" onclick="setShape('line')">Line</button>
//     <button class="btn-changes" onclick="clearCanvas()">Clear</button>
//     <label for="changeBgColor" class="color">
//     <input class="btn-changes" type="color" onchange="onChangeBgColor(this.value)" name="changeBgColor" /></label>
//     <label for="changeStColor" class="color">
//     <input class="btn-changes" type="color" onchange="onChangeColor(this.value)" name="changeStColor" /></label>

//     <button class="btn-changes"><a href="#"  onclick="downloadCanvas(this)" download="">Download</a></button>
// </section>
// <!-- onmouseout="stopDraw()" onmouseup="stopDraw()" onmousedown="startDraw()" onmousemove="drawSomething(event)" -->



/* button {
    text-decoration: none;
    cursor: pointer;
    outline: none;
    border: 1px solid #c7c5c5;
    border-radius: 0;
    text-align: center;
    font-family: Lato-Regular;
    font-size: 1rem;
}

a {
    text-decoration: none;
    color: #000000;
} */


//  background-color: #ffeecb;
//     width: 60%;
//     height: 90vh;
//     margin-right: 40px; 


/* align-self: flex-start; */


/* margin-right: 30px; */

/* grid-template-columns: repeat(3, 300px);
grid-template-rows: 300px; */
/* grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 5vw);
grid-gap: 15px; */


/* grid-gap: 10px; */

/* height: 100%; */

/* 
.canvas-container .border {
    position: absolute;
} */


/* .user-changes {
    margin: 0 auto;
    width: 60%;
    text-align: center;
    font-family: Lato-Regular;
    font-size: 1rem;
} */


/* grid-template-columns: repeat(12, 1fr); */
/* grid-template-rows: repeat(1, 1fr); */
/* grid-auto-flow: dense; */
/* display: none; */
/* flex-direction: row;
justify-content: space-around; */
/* max-width: 500px; */
/* height: 500px; */