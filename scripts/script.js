const starshipsUrl = "https://swapi.dev/api/starships/";
const vehiclesUrl = "https://swapi.dev/api/vehicles/";

let starshipsArray = [];

function makeCard(){
    starshipsArray.forEach((user)=>{
    const section =  document.querySelector(".cards");  
      
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

    const cardCatagory = document.createElement("h3");
    cardCatagory.classList.add("card__catagory");
    cardCatagory.innerText = "Starship Class"; 
    cardBack.appendChild(cardCatagory);

    const cardInfo = document.createElement("p");
    cardInfo.classList.add("card__info");
    cardInfo.innerText = user.model;
    cardBack.appendChild(cardInfo);

    const cardCatagory2 = document.createElement("h3");
    cardCatagory2.classList.add("card__catagory");
    cardCatagory2.innerText = "Manufacturer"; 
    cardBack.appendChild(cardCatagory2);

    const cardInfo2 = document.createElement("p");
    cardInfo2.classList.add("card__info");
    cardInfo2.innerText = user.manufacturer;
    cardBack.appendChild(cardInfo2);

    const cardCatagory3 = document.createElement("h3");
    cardCatagory3.classList.add("card__catagory");
    cardCatagory3.innerText = "Max Atmosphering Speed"; 
    cardBack.appendChild(cardCatagory3);

    const cardInfo3 = document.createElement("p");
    cardInfo3.classList.add("card__info");
    cardInfo3.innerText = user.max_atmosphering_speed;
    cardBack.appendChild(cardInfo3);

    const cardCatagory4 = document.createElement("h3");
    cardCatagory4.classList.add("card__catagory");
    cardCatagory4.innerText = "HyperDrive Rating"; 
    cardBack.appendChild(cardCatagory4);

    const cardInfo4 = document.createElement("p");
    cardInfo4.classList.add("card__info");
    cardInfo4.innerText = user.hyperdrive_rating;
    cardBack.appendChild(cardInfo4);

    const cardCatagory5 = document.createElement("h3");
    cardCatagory5.classList.add("card__catagory");
    cardCatagory5.innerText = "Crew"; 
    cardBack.appendChild(cardCatagory5);
    
    const cardInfo5 = document.createElement("p");
    cardInfo5.classList.add("card__info");
    cardInfo5.innerText=user.crew;
    cardBack.appendChild(cardInfo5);
    })
}

axios.get(starshipsUrl)
.then(response => {
    response.data.results.forEach(object =>
        starshipsArray.push(object));
    console.log(starshipsArray);

    makeCard();
});


let vehiclesArray = [];

function makeCardTwo(){
    vehiclesArray.forEach((user)=>{
    const section =  document.querySelector(".cards-two");  
      
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

    const cardCatagory = document.createElement("h3");
    cardCatagory.classList.add("card__catagory");
    cardCatagory.innerText = "Starship Class"; 
    cardBack.appendChild(cardCatagory);

    const cardInfo = document.createElement("p");
    cardInfo.classList.add("card__info");
    cardInfo.innerText = user.model;
    cardBack.appendChild(cardInfo);

    const cardCatagory2 = document.createElement("h3");
    cardCatagory2.classList.add("card__catagory");
    cardCatagory2.innerText = "Manufacturer"; 
    cardBack.appendChild(cardCatagory2);

    const cardInfo2 = document.createElement("p");
    cardInfo2.classList.add("card__info");
    cardInfo2.innerText = user.manufacturer;
    cardBack.appendChild(cardInfo2);

    const cardCatagory3 = document.createElement("h3");
    cardCatagory3.classList.add("card__catagory");
    cardCatagory3.innerText = "Max Atmosphering Speed"; 
    cardBack.appendChild(cardCatagory3);

    const cardInfo3 = document.createElement("p");
    cardInfo3.classList.add("card__info");
    cardInfo3.innerText = user.max_atmosphering_speed;
    cardBack.appendChild(cardInfo3);

    const cardCatagory4 = document.createElement("h3");
    cardCatagory4.classList.add("card__catagory");
    cardCatagory4.innerText = "HyperDrive Rating"; 
    cardBack.appendChild(cardCatagory4);

    const cardInfo4 = document.createElement("p");
    cardInfo4.classList.add("card__info");
    cardInfo4.innerText = user.hyperdrive_rating;
    cardBack.appendChild(cardInfo4);

    const cardCatagory5 = document.createElement("h3");
    cardCatagory5.classList.add("card__catagory");
    cardCatagory5.innerText = "Crew"; 
    cardBack.appendChild(cardCatagory5);
    
    const cardInfo5 = document.createElement("p");
    cardInfo5.classList.add("card__info");
    cardInfo5.innerText=user.crew;
    cardBack.appendChild(cardInfo5);
    })
}


axios.get(vehiclesUrl)
.then(response => {
    response.data.results.forEach(object =>
        vehiclesArray.push(object));
    console.log(vehiclesArray);

    makeCardTwo();
})

