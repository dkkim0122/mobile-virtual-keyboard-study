let innerHeight;
let visualViewportHeight;

const headerEl = document.getElementById("header");
const contentEl = document.getElementById("content");
const footerEl = document.getElementById("footer");

const innerHeightEl = document.getElementById("inner-height");
const visualHeightEl = document.getElementById("visual-height");

function updateHeightValue() {
  innerHeightEl.innerText = `innerHeight: ${window.innerHeight}`;
  visualHeightEl.innerText = `visualHeight: ${window.visualViewport.height}`;
}

function onResize() {
  updateHeightValue();

  if (!headerEl || !contentEl || !footerEl) return;

  const visualViewportHeight = window.visualViewport.height;
  const headerHeight = headerEl.clientHeight;
  const footerHeight = footerEl.clientHeight;

  const newContentHeight = visualViewportHeight - headerHeight - footerHeight;
  const newFooterBottom = window.innerHeight - visualViewportHeight;
  contentEl.style.height = `${newContentHeight}px`;
  footerEl.style.bottom = `${newFooterBottom}px`;
}

updateHeightValue();
window.visualViewport.addEventListener("resize", onResize);
