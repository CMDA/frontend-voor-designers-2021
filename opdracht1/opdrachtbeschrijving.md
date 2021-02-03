# Frontend voor Designers - opdracht 1: Een Micro-interactie uitwerken en testen

Ontwerp een user interface voor een gegeven use case. Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een browser.

## Use cases
- In een verzameling films wil ik een aantal leuke films kunnen bewaren om ze later te bekijken.
- In een lijst studentenhuizen wil ik details kunnen bekijken om te bepalen of de kamer geschikt is om te huren.
- In een verzameling muzieknummers wil ik de volgorde kunnen veranderen om een playlist te maken voor een feest.
- Als ik foto's zoek wil ik ze kunnen filteren op kleur om verassende zoekresultaten te krijgen die ik kan gebruiken voor mijn Visual Research.
- Je mag ook een eigen idee uitwerken. Kom dan eerst even overleggen.

## Werkwijze
Kies een van de Use Cases, schets eerst een ontwerp voor de interactie. Codeer in HTML, CSS en JavaScript en test verschillende versies van je ontwerp in een browser.

## Planning
1. Les 1: Briefing opdracht 1 en beginnen met schetsen en coderen
2. Les 2: Eerste versie testen
2. Les 3: Oplevering en beoordeling


## Criteria
1. De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
2. De [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) nr 04 & 11 zijn goed toegepast.
3. Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github. Leg de code uit.

## Resources

### Wat doe je ook alweer in JavaScript?
- Dit is een goede resource om een microinteractie te maken met Javascript: [Hey designers, if you only know one thing about JavaScript, this is what I would recommend](https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/)
1. Gebruik de [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) om een element in je html te selecteren
2. Koppel een [evenListener](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) aan het element om een mouse-event te detecteren
3. Gebruik het [Classlist object](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) om een css class aan een element toe te voegen of weg te halen.



### Volgende stap

- Dit is een goede uitleg van [Drag & Drop](https://developer.mozilla.org/en-US/docs/Web/API/Document/drag_event). Handig voor Use case 3.
- Met [QuerySelectAll ](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) kun je niet een maar meerdere elementen selecteren. Handig voor de 4e use case.


Voor wat complexere micro-interacties waar verschillende states elkaar moeten opvolgen kun je aan het eind van een transition of animation weer iets laten gebeuren. Gebruik hiervoor in Javascript de:


- eventlistener: [transitionend](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event)
- eventlistener: [animationend](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event)
