// Open Navbar
const openBtn = document.querySelector('#openBtn');
openBtn.addEventListener('click', function() {
const mediaQueries = window.matchMedia("(max-width: 992px)")

  if(mediaQueries.matches) {
    document.getElementById('myNav').style.width = '100%';
  }else {
    document.getElementById('myNav').style.width = '60%';
  }
});

// Close Navbar
const closeBtn = document.querySelector('#closeBtn');
closeBtn.addEventListener('click', closeNav);

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}
