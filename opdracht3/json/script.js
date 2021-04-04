const h2 = document.querySelector('h2');
const name = document.querySelector('#name');
const imageTest = document.querySelector('#imgTest');
const randomBtn = document.querySelector('#randomBtn')
const intro = document.querySelector('main > section:first-of-type > article:first-of-type');
const test = document.querySelector('#test');
const meerInfo = document.querySelector('#meerInfoBtn');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerheight;
  // console.log(scrolled);
});

window.onload = function(){
  window.addEventListener('scroll', scrollEffect);

  function scrollEffect(){
    if(window.scrollY <= 400){
      intro.style.opacity = '0'
      intro.style.transform = 'translateX(-100vw)'
    } else {
      intro.style.opacity = '1';
      intro.style.transition = '1.5s ease-in-out';
      intro.style.transform = 'translateX(0vw)'
    }
  }
}

let requestURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
let requestMoreInfo = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
let request = new XMLHttpRequest();
request.open('GET', requestURL);

//geef terug als JSON
request.responseType ='json';
request.send();

//2e call


request.onload = function() {
  const allDrinks =  request.response;
  console.log(allDrinks);
  console.log(allDrinks.drinks.length);

  document.body.onkeyup = async function giveRandomDrink(e){
  //laat de functie uitgevoerd worden dmv een key (spacebar atm)
  if(e.keyCode === 32) {

    const randomItem = allDrinks.drinks[Math.floor(Math.random() * allDrinks.drinks.length)];
    name.innerHTML = randomItem.strDrink;
    imageTest.src = randomItem.strDrinkThumb;


    //De zoekveld zal gevuld worden met de naam van het drankje
    const moreInfo = requestMoreInfo + randomItem.strDrink;

    let request2 =  new XMLHttpRequest();
    request2.open('GET', moreInfo);

    request2.responseType = 'json';
    request2.send();

    request2.onload = function(){
      const specificDrink =  request2.response;
      console.log(specificDrink);
      console.log(specificDrink.drinks[0].strGlass);

      function showInfo(){
        meerInfoBtn.classList.add('meerInstructies');
      }



      randomBtn.addEventListener('click', showInfo);
        }
      }
      randomBtn.addEventListener('click', giveRandomDrink);
    }
  }
