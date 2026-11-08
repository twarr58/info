(() => {
  const root = document.getElementById('project-index');
  for (const button of root.querySelectorAll('button[aria-controls]')) {
    const detail = document.getElementById(button.getAttribute('aria-controls'));
    button.addEventListener('click', () => {
      detail.hidden = !detail.hidden;
      button.setAttribute('aria-expanded', String(!detail.hidden));
      button.querySelector('span').textContent = detail.hidden ? '+' : '−';
    });
  }
  const image = root.querySelector('footer img');
  const showImage = () => {
    if (!image.naturalWidth) return;
    image.hidden = false;
    image.previousElementSibling.hidden = true;
  };
  image.addEventListener('load', showImage);
  if (image.complete) showImage();
})();
