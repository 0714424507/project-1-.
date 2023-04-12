function fetchAllBeers() {
  fetch("https://api.punkapi.com/v2/beers")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      mapBeerList(data);
    });
}

function mapBeerList(beers) {
  beers.forEach((element) => {
    const markup = `<li onclick="beerDetails(${element.id})">${element.name}</li>`;
    document.getElementById("beers").insertAdjacentHTML("beforeend", markup);
  });
}

function beerDetails (id){
  console.log("clicked", id)
  let url= "https://api.punkapi.com/v2/beers/" + id;
  console.log(url);
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
    let beerDetails=`<div class="card" style="width: 35rem;">
    <img src="${data[0].image_url}", class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Name: ${data[0].name}</h5>
      <h5 class="card-title">Tagline: ${data[0].tagline}</h5>
      <h5 class="card-title">First Brewed: ${data[0].first_brewed}</h5>
      <h5 class="card-title">Food Pairing:${data[0].food_pairing}</h5>
      <h5 class="card-title">Ingridients:${data[0].ingredients.malt[0].name},${data[0].ingredients.malt[1].name}</h5>
      <h5 class="card-title">Alcohol content:${data[0].abv}</h5>
      <p class="card-text">Description:${data[0].description}</p>
    
    </div>`
    document.getElementById("beerDetails").innerHTML = beerDetails;
   
  });

}
function searchResults(){
  
}
