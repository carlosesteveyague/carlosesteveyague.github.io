async function loadData(file, elementId) {
  try {
    const response = await fetch(file);
    const text = await response.text();
    const lines = text.trim().split("\n");
    const list = document.getElementById(elementId);
    list.innerHTML = "";

    lines.forEach(line => {
      const li = document.createElement("li");
      li.innerHTML = line;
      list.appendChild(li);
    });
  } catch (error) {
    console.error(`Error loading ${file}:`, error);
  }
}

loadData("data/career.txt", "career-list");
loadData("data/papers.txt", "papers-list");
loadData("data/media.txt", "media-list");
loadData("data/teaching.txt", "teaching-list");

(() => {
  const stickyBar = document.querySelector('.sticky-bar');
  if (!stickyBar) return;

  const thresholdShow = 60; // más alto para activar
  const thresholdHide = 20; // más bajo para desactivar

  const checkScroll = () => {
    if (window.scrollY > thresholdShow) stickyBar.classList.add('visible');
    else if (window.scrollY < thresholdHide) stickyBar.classList.remove('visible');
  };

  window.addEventListener('scroll', checkScroll, { passive: true });
  document.addEventListener('DOMContentLoaded', checkScroll);
})();

