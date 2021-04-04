# JSON
Learning working with JSON data

# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data


# Bartender
Is er voor de mensen die niet weten wat ze willen drinken. 
Door middel van het drukken op een knop krijg je een random drankje te zien, de ingredienten en hoe je het klaar maakt.
En voeg een link naar je demo toe.

## interface
Leg de interface uit.

In de demo heb je interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) toegepast. Hoe heb je dat gedaan?

04: Keep users in control

Gebruikers hebben bij mijn concept alle controle, Ik heb de optie gegeven om eventueel meer informatie te laten zien, dit wordt niet geforceerd. 
Naast dat kunnen ze het makkelijk sluiten voor de opvallende 'close' button en kunnnen ze zo weer door naar het volgende drankje.

08:Provide a natural next 

Ik laat pas een 'more information' button zien als de gebruiker daadwerkelijk op de knop drukt. Voordat er een drankje verschijnt, is er geen next step omdat die er niet is. Die wordt pas weergeven bij het laten zien van een drankje. 

09: Appearance follows behavior

Mijn applicatie werkt voornamelijk met buttons. Buttons heb ik de look & feel van buttons gegeven die gebruikers gewend zijn.  Ook het 'sluiten' button ziet er herkenbaar uit en werkt volgens zijn bekendheid. 

11: Strong visual hierachie works best

Ik begin met een duidelijke H1 header, die direct laat weten waarvoor de gebruiker de site bezoekt.  De minder belangrijke teksten, maar die wel een link hebben heb ik in de buurt geplaatst van de H1. Minder opvallend, omdat het minder belangrijk is. 

In de demo heb je meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) toegepast. Hoe heb je dat gedaan?
Ik heb de scroll event toegepast,

```javascript
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
```

Zodra de gebruiker 400 pixels  naar beneden gescrolled is laat ik een functie uitvoeren, in dit geval laat ik een section invliegen die extra content toevoegd aan de pagina.



IN de demo heb je een aantal states van de [UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/) toegepast. Hoe heb je dat gedaan?


## code
Eerst selecteren we een aantal elementen vanuit de DOM die we kunnen manipuleren
```javascript
const h2 = document.querySelector('h2');
const name = document.querySelector('#name');
const imageTest = document.querySelector('#imgTest');
const randomBtn = document.querySelector('#randomBtn')
const intro = document.querySelector('main > section:first-of-type > article:first-of-type');
```
Daarna heb ik een scroll event toegepast, dus ik moest even weten waar ik mijzelf bevond
```javascript
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerheight;
  // console.log(scrolled);
});
```
We laten de scroll Y positie zien en op basis daar van laat ik elementen invliegen.

Zodra de window is geladen laat ik een functie afspelen
```javascript
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
```
Deze functie laat intro invliegen vanaf de 400px, als < 400, dan is de opacity 0 en uit beeld

Nu moeten we een json call maken om data in te laden
```javascript
let requestURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
let requestMoreInfo = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
let request = new XMLHttpRequest();
request.open('GET', requestURL);

//geef terug als JSON
request.responseType ='json';
request.send();
```
Ik geef een request url mee, en ik open daarna een nieuwe XMLHttpRequest, daarna wordt de request opengehaald en met een GET functie haalt hij de data op van de requested url
Als response type geef ik aan json en als laatst verstuur ik de get request en komt de data binnen.


```javascript
request.onload = function() {
  const allDrinks =  request.response;
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

```
