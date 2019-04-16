const field = document.getElementById("field");
const pot = document.getElementById("pot");

const hideThePot = (()=> {
  let potPosX = Math.round(Math.random()*80)+"%";
  let potPosY = Math.round(Math.random()*95)+"%";

  pot.style.top = potPosX;
  pot.style.left = potPosY;
  console.error(potPosX);
  console.error(potPosY);
})();
let fieldX;
let fieldY;
let potX;
let potY;
field.addEventListener('click',(ev)=> {
  let alert = document.getElementById('alert');
console.log(alert);
  fieldX = ev.clientX;
  fieldY = ev.clientY;
  console.log(fieldX);
  if (potX === fieldX && potY === fieldY) {
    alert.innerText = 'Gotcha';
    pot.style.transition = 'opacity 3s linear';
    pot.style.opacity = '1';
  }
  else {
    alert.innerText = "missed it";
  }
})
pot.addEventListener('click',(ev)=> {
  potX = ev.clientX;
  potY = ev.clientY;
  console.log(potX);

})
