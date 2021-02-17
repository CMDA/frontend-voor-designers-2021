
var meerInformatie = document.querySelector('.meerInformatie');
var meerInfoBtn = document.querySelector('button');
var h1 = document.querySelector('h1');
var card = document.querySelector('.card');



function test(){
  console.log('Jahoor hij is geselecteerd');

  card.classList.toggle('rotateCard');




  if(meerInfoBtn.textContent === "Meer informatie") {
    meerInfoBtn.textContent = "Minder informatie";
  } else {
    meerInfoBtn.textContent = "Meer informatie";
  }



}


meerInfoBtn.addEventListener('click', test);
