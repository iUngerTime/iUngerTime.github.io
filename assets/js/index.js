document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', (e) => {
      document.body.classList.toggle('nav--opened');
      e.preventDefault();
    });
    window.addEventListener('resize', () => {
      if (isHidden(navToggle)) {
        document.body.classList.remove('nav--opened');
      }
    });
  }
});

function isHidden(el) {
  return (el.offsetParent === null);
}
