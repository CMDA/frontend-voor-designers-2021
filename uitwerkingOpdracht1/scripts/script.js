
var meerInformatie = document.querySelector('.meerInformatie');
var meerInfoBtn = document.querySelector('button');





function test(){
  console.log('Jahoor hij is geselecteerd');

    meerInformatie.classList.toggle('nieuwResults');

  if(meerInfoBtn.innerHTML === "Meer informatie") {
    meerInfoBtn.innerHTML = "Minder weergeven";
  } else {
    meerInfoBtn.innerHTML = "Meer informatie";
  }

}


meerInfoBtn.addEventListener('click', test);
