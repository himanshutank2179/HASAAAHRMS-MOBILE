toggle = document.getElementById(".toggle");
nav = document.getElementById(".nav");
toggle_open_text = 'Menu';
toggle_close_text = 'Close';

toggle.addEventListener('click', function() {
  nav.classList.toggle('open');

  if (nav.classList.contains('open')) {
    toggle.innerHTML = toggle_close_text;
  } else {
    toggle.innerHTML = toggle_open_text;
  }
}, false);

setTimeout(function(){
  nav.classList.toggle('open');
}, 800);
