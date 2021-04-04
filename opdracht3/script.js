const h2 = document.querySelector('h2');
const name = document.querySelector('#name');
const imageTest = document.querySelector('#imgTest');
const randomBtn = document.querySelector('#randomBtn');
const intro = document.querySelector('main > section:first-of-type > article:first-of-type');
const informationSection = document.querySelector('#informationSection');
const ul = document.querySelector('ul');
const ingredientsList = document.querySelector('#ingredients');
//blauwe morge information Button
const showMoreInfo = document.querySelector('#styleABtn');
const instructions = document.querySelector('#instructions');
const closeInfo = document.querySelector('.closeBtn');
const drinkName = document.querySelector('#name');


window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerheight;
  // console.log(scrolled);
});

window.onload = function() {
  window.addEventListener('scroll', scrollEffect);

  function scrollEffect() {
    if (window.scrollY <= 400) {
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
request.responseType = 'json';
request.send();

//2e call


request.onload = function() {
  const allDrinks = request.response;
  console.log(allDrinks);
  console.log(allDrinks.drinks.length);

  function giveRandomDrink() {
    //laat de functie uitgevoerd worden dmv een key (spacebar atm)

    const randomItem = allDrinks.drinks[Math.floor(Math.random() * allDrinks.drinks.length)];
    name.innerHTML = randomItem.strDrink;
    imageTest.src = randomItem.strDrinkThumb;

    //De zoekveld zal gevuld worden met de naam van het drankje
    const moreInfo = requestMoreInfo + randomItem.strDrink;

    const moreButton = document.createElement('button');
    name.appendChild(moreButton);
    moreButton.setAttribute('id', 'styleABtn');

    moreButton.innerHTML = 'More information'
    //maak een 2e request voor specifieke infomatie
    let request2 = new XMLHttpRequest();
    request2.open('GET', moreInfo);

    request2.responseType = 'json';
    request2.send();

    request2.onload = function() {
      const specificDrink = request2.response;
      console.log(specificDrink);
      console.log(specificDrink.drinks[0].strGlass);

      const ingredients = [specificDrink.drinks[0].strIngredient1,
        specificDrink.drinks[0].strIngredient2,
        specificDrink.drinks[0].strIngredient3,
        specificDrink.drinks[0].strIngredient4,
        specificDrink.drinks[0].strIngredient5
      ];

      ingredientsList.innerHTML = ingredients;
      instructions.innerHTML = specificDrink.drinks[0].strInstructions;


      function specificDrinkInformation() {
        informationSection.classList.add('showInformationSection');
      }

      function closeSpecificDrinkInformation(){
        informationSection.classList.remove('showInformationSection');
      }
        moreButton.addEventListener('click', specificDrinkInformation);
        closeInfo.addEventListener('click', closeSpecificDrinkInformation);
    }

  }
  randomBtn.addEventListener('click', giveRandomDrink);
}
