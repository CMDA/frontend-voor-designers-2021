console.log("huh?",this);
//var uri = "https://api.data.amsterdam.nl/panorama/recente_opnames/2018/?format=json";
//var uri = "https://open.data.amsterdam.nl/Attracties.json";
//var uri = "https://open.data.amsterdam.nl/Activiteiten.json";
//var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var uri = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

var title = document.querySelector('h1');
var section = document.querySelector('section');
var button = document.querySelector("button");
var loaderElement = document.querySelector(".loader");
console.log("loader",loaderElement);

////https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
function showData(jsonObj) {
  var data = jsonObj;
  console.log("JsonObj data",data);
  console.log("squadName",data['squadName'])

  //data uit de json halen
  //var squadName = document.createElement('h2');
  title.textContent = data['squadName'];
  //var homeTown = document.createElement('p');
  title.textContent += " - " + data['homeTown'];
  title.textContent += " - " + data['secretBase'];
  //header.appendChild(squadName);
  //header.appendChild(homeTown);

  var members = jsonObj['members'];
  console.log("members",members);

  for (var i = 0; i < members.length; i++) {
    var superhero = document.createElement('article');

    var name = document.createElement('h2');
    name.textContent = members[i].name;

    var secretIdentity = document.createElement('p');
    secretIdentity.textContent = "secret name: " + members[i].secretIdentity;

    var age = document.createElement('span');
    age.textContent = "leeftijd: " + members[i].age;

    var powers = document.createElement('ul');
    var superpowers = members[i].powers;
    for(var j =0; j<superpowers.length; j++){
      console.log("superpowers",superpowers[j])
      var kracht = document.createElement('li');
      kracht.textContent = superpowers[j];
      powers.appendChild(kracht);
    }

    superhero.appendChild(name);
    superhero.appendChild(secretIdentity);
    superhero.appendChild(age);
    superhero.appendChild(powers);

    section.appendChild(superhero);
  }
} //end: function showdata

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
function loadimagesmetXHR(){
  var request = new XMLHttpRequest();
  request.open('get', uri);
  request.responseType = 'json';
  //request.responseType = 'text'; // now we're getting a string!
  request.send();

  request.addEventListener("load", function(){
    console.log("request is geladen: ",request.response);
    //als de data geladen is, mag de loader weg:
    loaderElement.classList.add('hide');
    //functie aanroepen om van de data html te maken
    showData(request.response);
  });
//  request.onload = function() {
//      console.log("request.onload: ",request.response);
//    }
  request.timeout = 10000; // time in milliseconds
  request.ontimeout = function(e) {
    // XMLHttpRequest timed out. Do something here.
    console.log("ontimeout: " +request.timeout+", het laden duurt te lang !",e);
  };
  request.onerror = function() {
      console.log('Fetch Error', request.status);
  };
} //end: function loadimagesmetXHR();


//loader feedback eerst onzichtbaar maken
loaderElement.classList.add('hide');
//actie
button.onclick = function(){
  loaderElement.classList.remove('hide'); //loader wordt zichtbaar
  this.classList.add('hide'); //button mag weg
  section.innerHTML = ""; //main leeghalen. just in case
  loadimagesmetXHR();
}; //end: button.onclick





/*
function loadRestApiFetch(){ //Rest Api call met Fetchs
  console.log("function loadRestApiFetch");

  loaderElement.classList.add('show');
  fetch(uri).then(function(response) {
      console.log(response.headers.get('Content-Type'));
      console.log(response.headers.get('Date'));

      console.log(response.status);
      console.log(response.statusText);
      console.log(response.type);
      console.log(response.url);

      return response.json();
    }).then(function(myJson) {
      console.log('Request successful', myJson);
      //eerst de loader weg halen !
      loaderElement.classList.remove('show');
      //dan de html renderen
      //document.querySelector("p").innerHTML="joehoe";
      //console.log(myJson);
    }).catch(function(error) {
      console.log('Request failed', error)
    });
}
//loadRestApiFetch();

*/
