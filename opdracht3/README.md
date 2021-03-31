# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data


# Bartender
Is er voor de mensen die niet weten wat ze willen drinken. 
Door middel van het drukken op een knop krijg je een random drankje te zien, de ingredienten en hoe je het klaar maakt.
En voeg een link naar je demo toe.

## interface
Leg de interface uit.

In de demo heb je interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) toegepast. Hoe heb je dat gedaan?

In de demo heb je meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) toegepast. Hoe heb je dat gedaan?
04: Keep users in control
08:Provide a natural next step
09: Appearance follows behavior
11: Strong visual hierachie works best


IN de demo heb je een aantal states van de [UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/) toegepast. Hoe heb je dat gedaan?


## code
```javascript
const h2 = document.querySelector('h2');
const name = document.querySelector('#name');
const imageTest = document.querySelector('#imgTest');
const randomBtn = document.querySelector('#randomBtn')
const intro = document.querySelector('main > section:first-of-type > article:first-of-type');
```
