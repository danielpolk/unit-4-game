// Global variables to be called upon.
var crystal = {
    blue:
    {
      name: "Blue",
      value: 0
    },
    pink:
    {
      name: "Pink",
      value: 0
    },
    purple:
    {
      name: "Purple",
      value: 0
    },
    green:
    {
      name: "Green",
      value: 0
    }
  };


var compScore=0;
var userScore=0;
var wins = 0;
var losses = 0;




// Function for getting random numbers.
var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;     
};

// Start Game...
var startGame = function() {
  
  userScore = 0;
 
  // Function which enables the compScore to obtain a random number.
  compScore = randomNumber(19,120);


  // Function for assigning random number to each crystal value.
  crystal.blue.value = randomNumber(1,12);
  crystal.pink.value = randomNumber(1,12);
  crystal.purple.value = randomNumber(1,12);
  crystal.green.value = randomNumber(1,12);

  
  // Show Scores
  $("#comp-score").text(compScore);
  $("#user-score").text(userScore);

};

// Check if User Won or Lost and Reset the Game
var checkScore = function() {

  if (userScore > compScore) {
    alert("You lost! Try again!");
    console.log("You Lost");
    
    losses++;

    $("#losses").text(losses);

    startGame();
  }

  else if (userScore === compScore) {
    alert("You won! Play again!");
    console.log("You Won!");

    wins++;

    $("#wins").text(wins);

    startGame();
  }

};


// On click of html crystal, add points from the JS crystal value to the userScore.
var addValues = function(clickedCrystal) {
  userScore += clickedCrystal.value;
    $("#user-score").text(userScore);
    checkScore();
    console.log("Your Score: " + userScore);
};


startGame();

$("#blue").click(function() {
  addValues(crystal.blue);
});

$("#pink").click(function() {
  addValues(crystal.pink);
});

$("#purple").click(function() {
  addValues(crystal.purple);
});

$("#green").click(function() {
  addValues(crystal.green);
});

