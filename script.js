function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// A hack - data is defined in dataOptions.js
// It is then written to the global scope by loading it before script.js in the <head> of the document
// This is not great for legibility but JSON imports are tricky in browsers just now!
// const dataOptions = data;
const dataOptions = cards;

function cardToggle(display, hide, card) {
  hide.classList.toggle("hidden");
  // play animation
  card.classList.toggle("flipped");
  setTimeout(() => {
    // show label rotating in
    display.classList.toggle("hidden");
  }, 200);
}

function showContents(card) {
  const id = card.id;
  const label = card.querySelector(".label");
  const contents = card.querySelector(".contents");

  // Select a title and timeline for action
  // or else get random text to fill the card
  const cardContent = (id === 'timeline' )
  ? timelineContents() :
    otherContent(id);

  //Show us what got selected
  console.log(cardContent);
  
  // Set the content of the flipped card
  contents.innerHTML = cardContent;

  // hide the label
  label.classList.toggle("hidden");
  
  // play twirl animation
  card.classList.toggle("flipped");
  
  setTimeout(() => {
    // show contents rotating in
    contents.classList.toggle("hidden");
  }, 200);

}

function hideContents(card) {
  // const id = card.id;
  const label = card.querySelector(".label");
  const contents = card.querySelector(".contents");

  // hide contents
  contents.classList.toggle("hidden");
  // play twirl animation
  card.classList.toggle("flipped");
  
  setTimeout(() => {
    // show contents rotating in
    label.classList.toggle("hidden");
  }, 200);
}

// Pick cards to flip
function turnCard(evt) {
  console.log(evt.target);
  const clickedCard = evt.target.closest('.card');

  const classList = [...clickedCard.classList];

  // Flip the card
  (classList.includes("flipped"))
    ? hideContents(clickedCard)
    : showContents(clickedCard);
}

function timelineContents() {
  const title = getRandomIntInclusive(0, dataOptions.timeline.title.length - 1);
  const timeline = getRandomIntInclusive(0, dataOptions.timeline.timeline.length - 1);
  return `<span>timeline</span><p>${dataOptions.timeline.title[title]}: ${dataOptions.timeline.timeline[timeline]}</p>`;
}

function otherContent(str) {
  console.log(str);
  console.log(dataOptions[str]);
  console.log(dataOptions);
  try {
    const text = getRandomIntInclusive(0, dataOptions[str].length - 1);
    return `<span>${str}</span><p>${dataOptions[str][text]}</p>`;
  } catch {
    console.log('ERROR:', str);
    return `<h1>Error</h1><p>No data for ${str}</p>`;
  }
}

function generateCard(key, data){
  // Create the elements
  const card = document.createElement('div');
  card.classList.add('card');
  card.id = key;
  card.setAttribute('role', 'button');

  const label = document.createElement('div');
  label.classList.add('label');  
  label.textContent = key;
  
  const contents = document.createElement('div');
  contents.classList.add('contents', 'hidden');
  contents.textContent = '\u00a0'; // non-breaking space

  // Structure the elements  
  card.appendChild(label);
  card.appendChild(contents);

  return card;
};

function cardActions() {
  const board = document.querySelector('.gameboard');
  const keys = Object.keys(cards);
  keys.forEach(key => {
    console.log(key);
    const card = generateCard(key, cards[key])
    board.append(card);
  })

  const cardSelector = [...document.querySelectorAll(".card")];
  cardSelector.forEach((card) => {
    card.addEventListener("click", (evt) => turnCard(evt));
  });
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

document.addEventListener("DOMContentLoaded", async () => {
  cardActions();
});
