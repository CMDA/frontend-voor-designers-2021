
var meerInformatie = document.querySelector('.meerInformatie');
var meerInfoBtn = document.querySelector('button');
var h1 = document.querySelector('h1');


function test(){
  console.log('Jahoor hij is geselecteerd');

    meerInformatie.classList.toggle('nieuwResults');

  if(meerInfoBtn.textContent === "Meer informatie") {
    meerInfoBtn.textContent = "Minder informatie";
  } else {
    meerInfoBtn.textContent = "Meer informatie";
  }

}


meerInfoBtn.addEventListener('click', test);
