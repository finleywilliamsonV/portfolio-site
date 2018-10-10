
const selectors = document.querySelectorAll('.selector-btn' );
console.log(selectors);

selectors.forEach((selector) => {
  selector.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('active')) {
      target.classList.remove('active');
    } else {
      target.classList.add('active');
    }
    console.log(e.target);
  });
});
