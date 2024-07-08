let innerHeight;
let visualViewportHeight;

const innerHeightEl = document.getElementById("inner-height");
const visualHeightEl = document.getElementById("visual-height");

function updateHeightValue() {
  innerHeightEl.innerText = `innerHeight: ${window.innerHeight}`;
  visualHeightEl.innerText = `visualHeight: ${window.visualViewport.height}`;
}

updateHeightValue();

window.visualViewport.addEventListener("resize", (e) => {
  updateHeightValue();
});
