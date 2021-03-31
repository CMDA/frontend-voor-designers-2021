# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data


# Bartender
Is er voor de mensen die niet weten wat ze willen drinken. 
Door middel van het drukken op een knop krijg je een random drankje te zien, de ingredienten en hoe je het klaar maakt.
En voeg een link naar je demo toe.

## interface
Leg de interface uit.

In de demo heb je interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) toegepast. Hoe heb je dat gedaan?

04: Keep users in control

08:Provide a natural next step

09: Appearance follows behavior

11: Strong visual hierachie works best

In de demo heb je meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) toegepast. Hoe heb je dat gedaan?




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

  // test.innerHTML = drinks.drinks[2].strDrink;
  // imageTest.src = drinks.drinks[2].strDrinkThumb;
document.body.onkeyup = async function giveRandomDrink(e){
  //laat de functie uitgevoerd worden dmv een key (spacebar atm)
  if(e.keyCode === 32) {

    const randomItem = allDrinks.drinks[Math.floor(Math.random() * allDrinks.drinks.length)];
    name.innerHTML = randomItem.strDrink;
    imageTest.src = randomItem.strDrinkThumb;


    //De zoekveld zal gevuld worden met de naam van het drankje
    const moreInfo = requestMoreInfo + randomItem.strDrink;

      //we halen meer informatie over het drankje binnen door een 2e call te maken obv naam
      let a = await fetch(moreInfo)
        .then(res => res.json())
        .then(data => console.log(data))

        //returns een promise...
      }
      randomBtn.addEventListener('click', giveRandomDrink);
    }
  }
```

Weer een onload function, eerst gooien we de response in een variable, deze log ik graag om te zien wat ik terug krijg, in dit geval alle 100 drankjes en de cijfer 100 omdat dat de length is. Daarna maak ik een andere functie in de functie, die werkt op keyEvents, 32 is in dit geval de spatiebar. 
Om een random item te pakken uit de array moeten we een Math.floor-Math.random functie uitvoeren en dat gaat op basis van de 100 drankjes die in de array zitten.
De drankjes hebben 2 waardes, de strDrink(naam) en strDrinkThumb(thumbnail). Die plaats ik in 2 elementen die eerder zijn opgenoemd. 

Om meer informatie over het drankje te krijgen moet ik een url maken die de naam. Ik heb eerder al ```javascript let requestMoreInfo = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";```
gemaakt en daar achter moet ik de naam van het drankje plaatsen, als je daar heen gaat krijg je meer specifieke data over het drankje. 
Daarna wil ik met een fetch methode de data binnenhalen. Ik krijg die binnen als een array met inderdaad meer informatie maar ik kan het niet bereiken.
