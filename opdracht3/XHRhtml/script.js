/*
  variabelen:
*/
// var dataURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/PE/data.html';
// var dataURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/PE/data2.html';
var section = document.querySelector('section'); //section om de html in te laden
var form = document.querySelector("form"); //formulier met file selectie

/*
  Loaddata functie
  Functie om de data te laden en op de pagina te tonen
  arg: het data file dat geladen meot worden
*/
function loaddata(dataURL){
  //feedback;
  section.textContent = "loading data file"; //loading feedback tonen in section
  form.elements["submit"].textContent = "loading ..."; //loading feedback op de submit button

  //ajax:
  var request = new XMLHttpRequest();
  request.onload = function() {
    var data = request.response.querySelector("body");
    section.textContent = "";
    section.appendChild(data);
    form.elements["submit"].textContent = "Laad file"; //text op de submit button terugzetten
  } //end request.onload
  request.open('GET', dataURL);
  request.responseType = 'document'; //set 'responseType=document', omdat html wordt geladen
  request.send();
} //end function loaddata


/*
  Submit functie
  Wordt uitgevoerd als op de submit button wordt geklikt
*/
form.addEventListener("submit", function(event) {
  var link = form.elements['link'].value; //geselecteerde value uit het form fixen
  loaddata(link); //

  event.preventDefault(); //dus niet het formulier echt versturen met de submit button
}, false); //end form.addEventListener submit
