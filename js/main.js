const openBtn = document.querySelector('#openBtn');
openBtn.addEventListener('click', openNav);

const closeBtn = document.querySelector('#closeBtn');
closeBtn.addEventListener('click', closeNav);

function openNav() {
  document.getElementById('myNav').style.width = '60%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}
