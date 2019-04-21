const field = document.getElementById("field");
const pot = document.getElementById("pot");
const alert = document.getElementById('alert');


const hideThePot = (()=> {
  let potPosX = Math.round(Math.random()*60);
  let potPosY = Math.round(Math.random()*90);

  pot.style.top = potPosX +"%";
  pot.style.left = potPosY +"%";
})();
let fieldX;
let fieldY;
let potX;
let potY;

field.addEventListener('click',(ev)=> {
  fieldX = ev.clientX;
  fieldY = ev.clientY;

  if (potX === fieldX && potY === fieldY) {
    alert.innerText = 'Got it !';
    alert.style.background = 'green';
    pot.style.transition = 'opacity 2s linear';
    pot.style.opacity = '1';
  }
  else {
    alert.innerText = "missed it";
    alert.style.background = 'salmon';

    setTimeout(()=> {
    alert.innerText = "";
  },2000)
  }
})
pot.addEventListener('click',(ev)=> {
  potX = ev.clientX;
  potY = ev.clientY;
})
