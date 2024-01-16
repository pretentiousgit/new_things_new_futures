function turnCard(evt){

}

function cardActions() {
  const cards = [...document.querySelectorAll('.card')]; // convert NodeList to array
  const arc = document.querySelector('#arc');
  const terrain = document.querySelector('#terrain');
  const objt = document.querySelector('#objt');
  const mood = document.querySelector('#mood');

  cards.forEach(card => {
    // Detect when the animation ends
    card.addEventListener('click', (evt) => {
        console.log(evt.target.id);
        const clickedCard = evt.target
        const label = clickedCard.querySelector('.label');
        const contents = clickedCard.querySelector('.contents');

        console.log(clickedCard.classList)
        const classList = [...clickedCard.classList];
        if(classList.includes("flipped")){
          contents.classList.toggle("hidden");
          clickedCard.classList.toggle("flipped");
          setTimeout(() => {
            label.classList.toggle("hidden");
          }, 200);
        } else {
          label.classList.toggle("hidden");
          clickedCard.classList.toggle("flipped");
          setTimeout(() => {
            contents.classList.toggle("hidden");
          }, 200);
        }
    })
  })

}

// function showarc() {
//   document.getElementById("arccover").style.display = "none";
//   document.getElementById("arccard").style.display = "inline";
//   var arctodisplay = Math.floor(Math.random() * arcoptions.length);
//   var subtexttodisplay = Math.floor(Math.random() * subtextoptions.length);
//   document.getElementById("arc").innerHTML = arcoptions[arctodisplay];
//   document.getElementById("arcsubtext").innerHTML =
//     subtextoptions[subtexttodisplay];
// }

// function showterrain() {
//   document.getElementById("terraincover").style.display = "none";
//   document.getElementById("terraincard").style.display = "inline";
//   var terraintodisplay = Math.floor(Math.random() * terrainoptions.length);
//   document.getElementById("terrain").innerHTML =
//     terrainoptions[terraintodisplay];
// }

// function showobject() {
//   document.getElementById("objectcover").style.display = "none";
//   document.getElementById("objectcard").style.display = "inline";
//   var objecttodisplay = Math.floor(Math.random() * objectoptions.length);
//   document.getElementById("object").innerHTML = objectoptions[objecttodisplay];
// }

// function showmood() {
//   document.getElementById("moodcover").style.display = "none";
//   document.getElementById("moodcard").style.display = "inline";
//   var moodtodisplay = Math.floor(Math.random() * moodoptions.length);
//   document.getElementById("mood").innerHTML = moodoptions[moodtodisplay];
// }

// function fliparc() {
//   document.getElementById("arccard").style.display = "none";
//   document.getElementById("arccover").style.display = "inline";
// }

// function flipterrain() {
//   document.getElementById("terraincard").style.display = "none";
//   document.getElementById("terraincover").style.display = "inline";
// }

// function flipobject() {
//   document.getElementById("objectcard").style.display = "none";
//   document.getElementById("objectcover").style.display = "inline";
// }

// function flipmood() {
//   document.getElementById("moodcard").style.display = "none";
//   document.getElementById("moodcover").style.display = "inline";
// }

// function showoverlay() {
//   document.getElementById("overlay").style.display = "block";
// }

// function hideoverlay() {
//   document.getElementById("overlay").style.display = "none";
// }


document.addEventListener('DOMContentLoaded', async () => {cardActions()})