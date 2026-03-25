/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/ 

//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["images/beeftips.jpg", "images/brisket.jpg", "images/ribeye.jpg", "images/steak.jpg" ];
let meat_prices = [13.99, 18.50, 15.99, 17.99];
let meat_titles = ["Beeftips", "Brisket", "Ribeye", "Steak"];

let seafood_images = ["images/clams.jpg", "images/lobster.png", "images/scallops.jpg", "images/tuna.jpg", "images/shrimp.jpg"];
let seafood_prices = [12.99, 19.50, 10.00, 15.20, 16.50];
let seafood_titles = ["Clams", "Lobster", "Scallops", "Tuna", "Shrimp"];

let dessert_images = ["images/flan.jpg", "images/passionberry.jpeg", "images/oreocup.jpg"];
let dessert_prices = [12.99, 10.00, 13.99];
let dessert_titles = ["Flan", "PassionBerry", "OreoCup"];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;

  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */
  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
for(let i = 0; i < meat_images.length; i ++){
  build +=`<div class=card>
  <h3> ${meat_titles[i]}</h3>
  <img src="${meat_images[i]}">
  <h4> $${meat_prices[i]} <h4>
  </div>`
}
m.innerHTML=build;
  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.
  let build1 = ``;
for(let i = 0; i < seafood_images.length; i ++){
  build1 +=`<div class=card>
  <h3> ${seafood_titles[i]}</h3>
  <img src="${seafood_images[i]}">
  <h4> $${seafood_prices[i]} <h4>
  </div>`
}
s.innerHTML=build1;
  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.
  let build2 = ``;
for(let i = 0; i < dessert_images.length; i ++){
  build2 +=`<div class=card>
  <h3> ${dessert_titles[i]}</h3>
  <img src="${dessert_images[i]}">
  <h4> $${dessert_prices[i]} <h4>
  </div>`
}
d.innerHTML=build2;
}
