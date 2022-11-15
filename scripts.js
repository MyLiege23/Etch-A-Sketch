//input variables
let color = "black";
let padSize = 100;

const drawingPad = document.querySelector(".drawing-pad");
drawingPad.style.gridTemplateColumns = `repeat(${padSize}, 1fr)`;

for (r = 0; r < padSize; r++) {
  for (c = 0; c < padSize; c++) {
    let tile = document.createElement("div");
    tile.classList.add(`tile${r}${c}`);
    tile.classList.add('tile');
    drawingPad.appendChild(tile);
  }
}

let tiles = Array.from(document.querySelectorAll(".tile"));
tiles.forEach((tile) => {
  tile.addEventListener("pointerover", () => {
    colorTile(tile);
  });
});

const colorTile = (tile) => {
  tile.setAttribute('style', 'background-color: black;');
};
