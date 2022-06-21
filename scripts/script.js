const starshipsUrl = "https://swapi.dev/api/starships/";
const vehiclesUrl = "https://swapi.dev/api/vehicles/";

// Arrays of products
let starshipsArray = [];
let vehiclesArray = [];

// build starship cards
axios
.get(starshipsUrl)
.then(response => {
    response.data.results.forEach(object =>
        starshipsArray.push(object));
    makeStarshipCards(starshipsArray);
})
.catch(error => {
    console.log(error);
});

// build vehicle cards
axios
.get(vehiclesUrl)
.then(response => {
    response.data.results.forEach(object =>
        vehiclesArray.push(object));
    makeVehicleCards(vehiclesArray)
})
.catch(error => {
    console.log(error);
});

// Display starship cards and hide vehicle cards when "starship" button clicked
const starshipButton = document.getElementById("btn-starships");
starshipButton.addEventListener('click',(event) => 
{
    event.preventDefault();
    const starshipsSection =  document.getElementById("starship-cards");
    const vehiclesSection =  document.getElementById("vehicle-cards");
    if (starshipsSection.classList.contains('cards--hidden')) {
        starshipsSection.classList.remove('cards--hidden');
        if (vehiclesSection.classList.contains('cards--hidden')===false){
            vehiclesSection.classList.add('cards--hidden');
        }
    };
});

// Display starship cards and hide vehicle cards when "starship" button clicked
const vehiclesButton = document.getElementById("btn-vehicles");
vehiclesButton.addEventListener('click', (event) => 
{ 
    event.preventDefault();
    const vehiclesSection =  document.getElementById("vehicle-cards");
    const starshipsSection =  document.getElementById("starship-cards");
    if (vehiclesSection.classList.contains('cards--hidden')) {
        vehiclesSection.classList.remove('cards--hidden');
        if (starshipsSection.classList.contains('cards--hidden')===false){
            starshipsSection.classList.add('cards--hidden');
        }
    };
})

function makeStarshipCards(array){
    const section =  document.getElementById("starship-cards");
    section.classList.add('cards--hidden');

    array.forEach((user)=>{        
    const card =  document.createElement("div");
    card.classList.add("card");
    section.appendChild(card);

    const cardInner = document.createElement("div");
    cardInner.classList.add("card__inner");
    card.appendChild(cardInner);

    const cardFront = document.createElement("div");
    cardFront.classList.add("card__front");
    cardInner.appendChild(cardFront);

    const cardImage = document.createElement("img");
    cardImage.classList.add("card__image");
    cardImage.setAttribute("src", "#");
    cardImage.setAttribute("alt", " ");
    cardFront.appendChild(cardImage);

    const cardName = document.createElement("h2");
    cardName.classList.add("card__name");
    cardName.innerText = user.name;
    cardFront.appendChild(cardName);

    const cardPrice = document.createElement("p");
    cardPrice.classList.add("card__price");
    cardPrice.innerText = user.cost_in_credits;
    cardFront.appendChild(cardPrice);

    const cardButton = document.createElement("a");
    cardButton.classList.add("card__button");
    cardButton.innerText="Bid Now";
    cardFront.appendChild(cardButton);

    const cardBack = document.createElement("div");
    cardBack.classList.add("card", "card__back");
    cardInner.appendChild(cardBack);

    const cardcategory = document.createElement("h3");
    cardcategory.classList.add("card__category");
    cardcategory.innerText = "Starship Class"; 
    cardBack.appendChild(cardcategory);

    const cardInfo = document.createElement("p");
    cardInfo.classList.add("card__info");
    cardInfo.innerText = user.model;
    cardBack.appendChild(cardInfo);

    const cardcategory2 = document.createElement("h3");
    cardcategory2.classList.add("card__category");
    cardcategory2.innerText = "Manufacturer"; 
    cardBack.appendChild(cardcategory2);

    const cardInfo2 = document.createElement("p");
    cardInfo2.classList.add("card__info");
    cardInfo2.innerText = user.manufacturer;
    cardBack.appendChild(cardInfo2);

    const cardcategory3 = document.createElement("h3");
    cardcategory3.classList.add("card__category");
    cardcategory3.innerText = "Max Atmosphering Speed"; 
    cardBack.appendChild(cardcategory3);

    const cardInfo3 = document.createElement("p");
    cardInfo3.classList.add("card__info");
    cardInfo3.innerText = user.max_atmosphering_speed;
    cardBack.appendChild(cardInfo3);

    const cardcategory4 = document.createElement("h3");
    cardcategory4.classList.add("card__category");
    cardcategory4.innerText = "HyperDrive Rating"; 
    cardBack.appendChild(cardcategory4);

    const cardInfo4 = document.createElement("p");
    cardInfo4.classList.add("card__info");
    cardInfo4.innerText = user.hyperdrive_rating;
    cardBack.appendChild(cardInfo4);

    const cardcategory5 = document.createElement("h3");
    cardcategory5.classList.add("card__category");
    cardcategory5.innerText = "Crew"; 
    cardBack.appendChild(cardcategory5);
    
    const cardInfo5 = document.createElement("p");
    cardInfo5.classList.add("card__info");
    cardInfo5.innerText=user.crew;
    cardBack.appendChild(cardInfo5);

    const cardButtonBack = document.createElement("a");
    cardButtonBack.classList.add("card__button");
    cardButtonBack.innerText="Bid Now";
    cardBack.appendChild(cardButtonBack);
    })
}

function makeVehicleCards(array){
    const section = document.getElementById("vehicle-cards");
    section.classList.add('cards--hidden');  

    array.forEach((user)=>{    
    const card =  document.createElement("div");
    card.classList.add("card");
    section.appendChild(card);

    const cardInner = document.createElement("div");
    cardInner.classList.add("card__inner");
    card.appendChild(cardInner);

    const cardFront = document.createElement("div");
    cardFront.classList.add("card__front");
    cardInner.appendChild(cardFront);

    const cardImage = document.createElement("img");
    cardImage.classList.add("card__image");
    cardImage.setAttribute("src", "#");
    cardImage.setAttribute("alt", " ");
    cardFront.appendChild(cardImage);

    const cardName = document.createElement("h2");
    cardName.classList.add("card__name");
    cardName.innerText = user.name;
    cardFront.appendChild(cardName);

    const cardPrice = document.createElement("p");
    cardPrice.classList.add("card__price");
    cardPrice.innerText = user.cost_in_credits;
    cardFront.appendChild(cardPrice);

    const cardButton = document.createElement("a");
    cardButton.classList.add("card__button");
    cardButton.innerText="Bid Now";
    cardFront.appendChild(cardButton);

    const cardBack = document.createElement("div");
    cardBack.classList.add("card", "card__back");
    cardInner.appendChild(cardBack);

    const cardcategory = document.createElement("h3");
    cardcategory.classList.add("card__category");
    cardcategory.innerText = "Starship Class"; 
    cardBack.appendChild(cardcategory);

    const cardInfo = document.createElement("p");
    cardInfo.classList.add("card__info");
    cardInfo.innerText = user.model;
    cardBack.appendChild(cardInfo);

    const cardcategory2 = document.createElement("h3");
    cardcategory2.classList.add("card__category");
    cardcategory2.innerText = "Manufacturer"; 
    cardBack.appendChild(cardcategory2);

    const cardInfo2 = document.createElement("p");
    cardInfo2.classList.add("card__info");
    cardInfo2.innerText = user.manufacturer;
    cardBack.appendChild(cardInfo2);

    const cardcategory3 = document.createElement("h3");
    cardcategory3.classList.add("card__category");
    cardcategory3.innerText = "Max Atmosphering Speed"; 
    cardBack.appendChild(cardcategory3);

    const cardInfo3 = document.createElement("p");
    cardInfo3.classList.add("card__info");
    cardInfo3.innerText = user.max_atmosphering_speed;
    cardBack.appendChild(cardInfo3);

    const cardcategory4 = document.createElement("h3");
    cardcategory4.classList.add("card__category");
    cardcategory4.innerText = "HyperDrive Rating"; 
    cardBack.appendChild(cardcategory4);

    const cardInfo4 = document.createElement("p");
    cardInfo4.classList.add("card__info");
    cardInfo4.innerText = user.hyperdrive_rating;
    cardBack.appendChild(cardInfo4);

    const cardcategory5 = document.createElement("h3");
    cardcategory5.classList.add("card__category");
    cardcategory5.innerText = "Crew"; 
    cardBack.appendChild(cardcategory5);
    
    const cardInfo5 = document.createElement("p");
    cardInfo5.classList.add("card__info");
    cardInfo5.innerText=user.crew;
    cardBack.appendChild(cardInfo5);

    const cardButtonBack = document.createElement("a");
    cardButtonBack.classList.add("card__button");
    cardButtonBack.innerText="Bid Now";
    cardBack.appendChild(cardButtonBack);
    })
}

