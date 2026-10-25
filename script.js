// 1. Mobile menu: show or hide the links when the Menu button is pressed
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
// Close the menu after choosing a link
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', false);
}));

// 2. Skill dots: reads data-level="3" and fills 3 of 5 dots
document.querySelectorAll('.level').forEach(el => {
  const level = Number(el.dataset.level);
  for (let i = 1; i <= 5; i++) {
    const dot = document.createElement('i');
    if (i <= level) dot.className = 'on';
    el.appendChild(dot);
  }
});

// 3. Footer year updates itself
document.getElementById('year').textContent = new Date().getFullYear();
