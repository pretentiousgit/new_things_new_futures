var arcoptions = ["Collapse", "Discipline", "Grow", "Transform"];
var subtextoptions = [
  "A few years",
  "A decade",
  "A generation",
  "Two generations",
  "A century",
  "A millennium"
];
var terrainoptions = [
  "Agriculture",
  "The Brain",
  "Childhood",
  "Citizenship",
  "Class",
  "Climate",
  "Cloning",
  "Communications",
  "Court",
  "Disease",
  "The Economy",
  "Drones",
  "The Economy",
  "Entertainment",
  "Environment",
  "Equality",
  "Family",
  "Fashion",
  "Flight",
  "Forests",
  "Genetics",
  "Gender",
  "Governance",
  "Health",
  "Hobbies",
  "Home",
  "Identity",
  "Insects",
  "Intellectual Property",
  "Journalism",
  "Justice",
  "Learning",
  "Memory",
  "Mining",
  "The Moon",
  "Music",
  "Oceans",
  "Oil",
  "Old Age",
  "Pets",
  "Power",
  "Religion",
  "Robots",
  "Sex",
  "Shopping",
  "Space",
  "Sports",
  "Theatre",
  "Travel",
  "War",
  "Water",
  "Wealth",
  "Women",
  "Work",
  "Zombies",
  "The Zoo"
];
var objectoptions = [
  "Advertisement",
  "Artwork",
  "Beverage",
  "Book",
  "Bottle",
  "Box",
  "Brochure",
  "Building",
  "Candy",
  "Clothing",
  "Corporation",
  "Device",
  "Document",
  "Event",
  "Festival",
  "Flag",
  "Game",
  "Gift",
  "Headline",
  "Implant",
  "Instrument",
  "Jewellery",
  "Kit",
  "Law",
  "Logo",
  "Lotion",
  "Machine",
  "Magazine cover",
  "Map",
  "Mask",
  "Monument",
  "Passport",
  "Pill",
  "Plant",
  "Postcard",
  "Poster",
  "Product",
  "Prosthetic",
  "Public service announcement",
  "Relic",
  "Ritual",
  "Show",
  "Slogan",
  "Snack",
  "Song",
  "Souvenir",
  "Statue",
  "Sticker",
  "Symbol",
  "T-Shirt",
  "Tattoo",
  "Tool",
  "Toy",
  "Vehicle",
  "Video",
  "Weapon"
];
var moodoptions = [
  "Admiration",
  "Alienation",
  "Amusement",
  "Anger",
  "Anxiety",
  "Awkwardness",
  "Calm",
  "Charm",
  "Cheer",
  "Contentment",
  "Curiosity",
  "Decadence",
  "Delight",
  "Dignity",
  "Disgust",
  "Dread",
  "Embarrassment",
  "Excitement",
  "Exhilaration",
  "Fascination",
  "Fervor",
  "Frustration",
  "Gratitude",
  "Happiness",
  "Hilarity",
  "Hope",
  "Longing",
  "Malaise",
  "Melancholy",
  "Melodrama",
  "Nostalgia",
  "Optimism",
  "Outrage",
  "Pathos",
  "Pleasure",
  "Pride",
  "Rationality",
  "Relief",
  "Resentment",
  "Respect",
  "Sadness",
  "Satisfaction",
  "Serenity",
  "Shame",
  "Shock",
  "Sorrow",
  "Surprise",
  "Unease",
  "Warmth",
  "Weirdness",
  "Wellbeing",
  "Wonder",
  "Worry",
  "Zen"
];

function showarc() {
  document.getElementById("arccover").style.display = "none";
  document.getElementById("arccard").style.display = "inline";
  var arctodisplay = Math.floor(Math.random() * arcoptions.length);
  var subtexttodisplay = Math.floor(Math.random() * subtextoptions.length);
  document.getElementById("arc").innerHTML = arcoptions[arctodisplay];
  document.getElementById("arcsubtext").innerHTML =
    subtextoptions[subtexttodisplay];
}

function showterrain() {
  document.getElementById("terraincover").style.display = "none";
  document.getElementById("terraincard").style.display = "inline";
  var terraintodisplay = Math.floor(Math.random() * terrainoptions.length);
  document.getElementById("terrain").innerHTML =
    terrainoptions[terraintodisplay];
}

function showobject() {
  document.getElementById("objectcover").style.display = "none";
  document.getElementById("objectcard").style.display = "inline";
  var objecttodisplay = Math.floor(Math.random() * objectoptions.length);
  document.getElementById("object").innerHTML = objectoptions[objecttodisplay];
}

function showmood() {
  document.getElementById("moodcover").style.display = "none";
  document.getElementById("moodcard").style.display = "inline";
  var moodtodisplay = Math.floor(Math.random() * moodoptions.length);
  document.getElementById("mood").innerHTML = moodoptions[moodtodisplay];
}

function fliparc() {
  document.getElementById("arccard").style.display = "none";
  document.getElementById("arccover").style.display = "inline";
}

function flipterrain() {
  document.getElementById("terraincard").style.display = "none";
  document.getElementById("terraincover").style.display = "inline";
}

function flipobject() {
  document.getElementById("objectcard").style.display = "none";
  document.getElementById("objectcover").style.display = "inline";
}

function flipmood() {
  document.getElementById("moodcard").style.display = "none";
  document.getElementById("moodcover").style.display = "inline";
}

function showoverlay() {
  document.getElementById("overlay").style.display = "block";
}

function hideoverlay() {
  document.getElementById("overlay").style.display = "none";
}
