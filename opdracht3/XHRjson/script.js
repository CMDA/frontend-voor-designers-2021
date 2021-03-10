var url = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/";
var urlmovies = url+"movies.json";



//////////////////////////////////////////////
var sectionmovies = document.querySelector('#movies');
console.log("section",sectionmovies);

//setup JSON lader met XMLHttpRequest
var request = new XMLHttpRequest();
console.log("loadimagesmetXHR", request);
request.open('get', urlmovies);
request.responseType = 'json';
request.send();

request.addEventListener("load", function(){
  //er is data
  console.log("request is geladen: ",request.response);
  //nu kun je iets doen
  renderHTML(request.response);
});

function renderHTML(data){
  console.log("renderHTML")
  //section.textContent = JSON.stringify(data);
  //loop door alle nodes van de JSON
  for (var item of data) {
    var article = document.createElement('article');
    //film titel
    var title = document.createElement('h2');
    title.textContent = item.title;
    //film plot
    var plot = document.createElement('p');
    plot.textContent = item.simple_plot;
    //film poster
    var cover = document.createElement('img');
    cover.src = item.cover;
    //koppel de html elementen aan het <article>
    article.appendChild(title);
    article.appendChild(plot);
    article.appendChild(cover);
    //koppel de <article> aan de section op de pagina
    sectionmovies.appendChild(article);
  };
}





//////////////////////////////////////////////
var buttonlaadfilm = document.querySelector('button[name="laadfilm"]');
var sectionfilm = document.querySelector('#film');
console.log("button",buttonlaadfilm);
console.log("section",sectionfilm);

buttonlaadfilm.onclick = function(){
  event.preventDefault();

  var welkefilm = document.querySelector('input[name = "toggle"]:checked').value;
  console.log("buttonlaadfilm",welkefilm);

  //setup JSON lader met XMLHttpRequest
  var request = new XMLHttpRequest();
  request.open('get', url+welkefilm+".json");
  request.responseType = 'json';
  request.send();

  request.addEventListener("load", function(){
    var filmdata = request.response;
    //er is data:
    console.log(filmdata)
    //film titel
    var title = document.createElement('h2');
    title.textContent = filmdata.title;
    //film plot
    var plot = document.createElement('p');
    plot.textContent = filmdata.simple_plot;
    //film trailer
    var video = document.createElement('video');
    video.src = filmdata.trailer;
    video.controls = "true";
    video.width = "360";
    video.poster = filmdata.cover;

    //koppel de html elementen aan de <section>
    //eerst de section leeghalen
    while (sectionfilm.firstChild) {
      sectionfilm.removeChild(sectionfilm.firstChild);
    }
    sectionfilm.appendChild(title);
    sectionfilm.appendChild(plot);
    sectionfilm.appendChild(video);
  });
};
