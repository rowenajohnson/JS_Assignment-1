// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var Words = [
  [
    "The turkey",
    "mom",
    "dad",
    "the dog",
    "my teacher",
    "the elephant",
    "the cat"
  ],
  ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"],
  ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"],
  ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"],
  [
    "on the moon",
    "on the chair",
    "in my spaghetti",
    "in my soup",
    "on the grass",
    "in my shoes"
  ]
];

// Buttons on the left side
var speakSubjectsLeftButton = document.querySelector("button.subjects.left");
var speakVerbsLeftButton = document.querySelector("button.verbs.left");
var speakAdjectivesLeftButton = document.querySelector(
  "button.adjectives.left"
);
var speakObjectsLeftButton = document.querySelector("button.objects.left");
var speakPlacesLeftButton = document.querySelector("button.places.left");
// Buttons on the right side
var speakSubjectsButton = document.querySelector("button.subjects.right");
var speakVerbsButton = document.querySelector("button.verbs.right");
var speakAdjectivesButton = document.querySelector("button.adjectives.right");
var speakObjectsButton = document.querySelector("button.objects.right");
var speakPlacesButton = document.querySelector("button.places.right");
var speakSurprisesButton = document.querySelector("button.surprises");
var speakPlaybackButton = document.querySelector("button.playback");

var speakerImg = document.querySelector("img.speaker");
var theSentence = Array(5);

/* Functions
-------------------------------------------------- */
function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  synth.cancel();

  var utterThis = new SpeechSynthesisUtterance(string);
  utterThis.onstart = function(event) {
    speakerImg.style.display = "unset";
  };
  utterThis.rate = 0.7;
  // Actually speak the tex
  synth.speak(utterThis);

  utterThis.onend = function(event) {
    speakerImg.style.display = "none";
  };
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak

speakSubjectsLeftButton.addEventListener("click", function() {
  speakNow(Words[0].join(","));
});

speakVerbsLeftButton.addEventListener("click", function() {
  speakNow(Words[1].join(","));
});

speakAdjectivesLeftButton.addEventListener("click", function() {
  speakNow(Words[2].join(","));
});

speakObjectsLeftButton.addEventListener("click", function() {
  speakNow(Words[3].join(","));
});

speakPlacesLeftButton.addEventListener("click", function() {
  speakNow(Words[4].join(","));
});

speakSubjectsButton.addEventListener("click", function() {
  theSentence[0] = randomValueFromArray(Words[0]);
  speakNow(theSentence[0]);
});

speakVerbsButton.addEventListener("click", function() {
  theSentence[1] = randomValueFromArray(Words[1]);
  speakNow(theSentence[1]);
});

speakAdjectivesButton.addEventListener("click", function() {
  theSentence[2] = randomValueFromArray(Words[2]);
  speakNow(theSentence[2]);
});

speakObjectsButton.addEventListener("click", function() {
  theSentence[3] = randomValueFromArray(Words[3]);
  speakNow(theSentence[3]);
});

speakPlacesButton.addEventListener("click", function() {
  theSentence[4] = randomValueFromArray(Words[4]);
  speakNow(theSentence[4]);
});

speakSurprisesButton.addEventListener("click", function() {
  for (var i = 0; i < Words.length; i++) {
    theSentence[i] = randomValueFromArray(Words[i]);
  }
  speakNow(theSentence.join(" "));
});
speakPlaybackButton.addEventListener("click", function() {
  speakNow(theSentence.join(" "));
});

/* Lab 3 JavaScript*/
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
