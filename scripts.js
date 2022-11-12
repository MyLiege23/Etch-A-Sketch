let drawingPad = document.querySelector(".drawing-pad");
let padSize = 16;
//drawingPad.setAttribute('style', `grid-template-columns: repeat(${padSize}}, 1fr)`)
//line 3 doesn't seem to do what I want it to do.

for (i = 0; i < padSize; i++) {
  let tileRow = document.createElement("div");
  tileRow.classList.add("tile-row");
  drawingPad.appendChild(tileRow);
  console.log("abc");
  for (j = 0; j < padSize; j++) {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    console.log("def");
    tileRow.appendChild(tile);
  }
}