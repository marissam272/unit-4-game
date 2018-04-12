$(document).ready(function(){
    var computerRandom = Math.floor(Math.random()*120+19);
    
    $("#numberToGet").text(computerRandom);
    
    // var crystalValues = {};
    var crystalValues1 = Math.floor(Math.random()*12+1);
    var crystalValues2 = Math.floor(Math.random()*12+1);
    var crystalValues3 = Math.floor(Math.random()*12+1);
    var crystalValues4 = Math.floor(Math.random()*12+1);
    
    console.log(crystalValues1);
    console.log(crystalValues2);
    console.log(crystalValues3);
    console.log(crystalValues4);
    
    // var inputOne = crystalValues1;
    // var inputTwo = crystalValues2;
    // var inputThree = crystalValues3;
    // var inputFour = crystalValues4;
    
    var wins;
    var losses;
    var totalScore = 0;
    
    console.log(wins);
    
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);
    
    function reset() {
        random = Math.floor(Math.random()*120+19);
        $("#numberToGet").text(random);
        crystalValues1 = Math.floor(Math.random()*12+1);
        crystalValues2 = Math.floor(Math.random()*12+1);
        crystalValues3 = Math.floor(Math.random()*12+1);
        crystalValues4 = Math.floor(Math.random()*12+1);
        totalScore = 0;
        wins++;
        $("#score").text(totalScore);
    }
    
    function restartGame() {
        location.reload();
    }
    
    console.log(restartGame);
    
    // var calc = {
    //   plus: function(a,b) {
    //     return a + b;
    //   }
    // };
    
     $("#crystal1").on("click", function() {
        totalScore = totalScore + crystalValues1;
        $("#score").text(totalScore);
        checkWinOrLose();
        })
    
        $("#crystal2").on("click", function() {
        totalScore = totalScore + crystalValues2;
        $("#score").text(totalScore);
        checkWinOrLose();
        })
    
        $("#crystal3").on("click",function() {
        totalScore = totalScore + crystalValues3;
        $("#score").text(totalScore);
        checkWinOrLose();
        })
    
        $("#crystal4").on("click", function() {
        totalScore = totalScore + crystalValues4;
        $("#score").text(totalScore);
        checkWinOrLose();
        })
    
    
    function winner() {
        alert("You Won!!");
        wins++;
        $("#numberWins").text("Wins" + wins);
        reset();
    }
    
    console.log(winner);
    
    function loser() {
        alert("You Lose!");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }
    
    console.log(loser);
    function checkWinOrLose() {
        if (totalScore === computerRandom) {
            winner();
            reset();
            restartGame();
        }
    
        else if (totalScore > computerRandom) {
            loser();
            reset();
            restartGame();
        } 
    }
    
    });


    // $(document).ready(function(){

// var computerRandom = Math.floor(Math.random()*120)+19;

// $("#numberToGet").text(computerRandom);

// // var crystalValues = {};
// var crystalValues1 = Math.floor(Math.random()*12)+1;
// var crystalValues2 = Math.floor(Math.random()*12)+1;
// var crystalValues3 = Math.floor(Math.random()*12)+1;
// var crystalValues4 = Math.floor(Math.random()*12)+1;

// console.log(crystalValues1);

// var inputOne = crystalValues1;

// var inputTwo = crystalValues2;

// var inputThree = crystalValues3;

// var inputFour = crystalValues4;

// var wins = 0;
// var losses = 0;
// var totalScore = 0;
// var counter;

// $("#numberWins").text(wins);
// $("#numberLosses").text(losses);

// function reset() {
//     computerRandom = Math.floor(Math.random()*120)+19;
//     $("#numberToGet").text(random);
//     crystalValues1 = Math.floor(Math.random()*12)+1;
//     crystalValues2 = Math.floor(Math.random()*12)+1;
//     crystalValues3 = Math.floor(Math.random()*12)+1;
//     crystalValues4 = Math.floor(Math.random()*12)+1;
//     totalScore = 0;
//     $("#score").text(totalScore);
// }

// function winner() {
//     alert("You Won!!");
//     wins++;
//     $("#numberWins").text(wins);
//     reset();
// }

// function loser() {
//     alert("You Lose!!");
//     losses++;
//     $("#numberLosses").text(losses);
//     reset();
// }

// // function binding() {
// //     console.log("binding");
//     $("#crystal1").on("click", "button", function() {
//         totalScore = totalScore + inputOne;
//         $("#score").text(totalScore);
//     })

//     $("#crystal2").on("click", "button", function() {
//         totalScore = totalScore + inputTwo;
//         $("#score").text(totalScore);
//     })

//     $("#crystal3").on("click", "button", function() {
//         totalScore = totalScore + inputThree;
//         $("#score").text(totalScore);
//     })

//     $("#crystal4").on("click", "button", function() {
//         totalScore = totalScore + inputFour;
//         $("#score").text(totalScore);
//     })


//     // function checkWinOrLose() {
//     // console.log("checkWinOrLose");
//     if (totalScore === computerRandom) {
//         winner();
//         reset();
//     }

//     else if (totalScore > computerRandom) {
//         loser();
//         reset();
//     } 


// });

    // $(".crystals").on("click", "button", function() {
    // counter = totalScore + crystalValues1 + crystalValues2 + crystalValues3 + crystalValues4;
    // $("#score").html(totalScore);
    // })



// var calc = {
//   plus: function(a,b) {
//     return a + b;
//   }
// };

// function getCrystalHandler(crystalValues) {
//     // var operator = getCrystalHandler;
//    return function() {
//     totalScore = totalScore + crystalValues[crystalKey];
//     $("#score").text(totalScore);
    // totalScore = calc[operator](parseInt(crystalValues[1]), parseInt(crystalValues[2]),parseInt(crystalValues[3]), parseInt(crystalValues[4]));
    //     $("#score").text(totalScore);
    
    // totalScore + crystalValues;
    // $("#score").text(totalScore);

    // $("#crystal1").on("click", "button", function() {
    // totalScore = totalScore + inputOne;
    // $("#score").text(totalScore);
    // })

    // $("#crystal2").on("click", "button", function() {
    // totalScore = totalScore + inputTwo;
    // $("#score").text(totalScore);
    // })

    // $("#crystal3").on("click", "button", function() {
    // totalScore = totalScore + inputThree;
    // $("#score").text(totalScore);
    // })

    // $("#crystal4").on("click", "button", function() {
    // totalScore = totalScore + inputFour;
    // $("#score").text(totalScore);
    // })


// $("#crystal1").on("click", getCrystalHandler());
// $("#crystal2").on("click", getCrystalHandler());
// $("#crystal3").on("click", getCrystalHandler());
// $("#crystal4").on("click", getCrystalHandler());

// var totalCrystals = {
//     plus: function(a,b) {
//         return a + b;
//     }
// }

// var minNumber = 19;
// var maxNumber = 120

// var computerRandomNumber = randomNumberFromRange(minNumber, maxNumber);

// function randomNumberFromRange(min,max) {
//     return Math.floor(Math.random()*(max-min+1)+min);
//     }

// var minCrystalNumberOne = 1;
// var maxCrystalNumberOne = 12;

// var crystalRandomNumberOne = randomNumberFromRange(minCrystalNumberOne, maxCrystalNumberOne);

// var minCrystalNumberTwo = 1;
// var maxCrystalNumberTwo = 12;

// var crystalRandomNumberTwo = randomNumberFromRange(minCrystalNumberTwo, maxCrystalNumberTwo);

// var minCrystalNumberThree = 1;
// var maxCrystalNumberThree = 12;

// var crystalRandomNumberThree = randomNumberFromRange(minCrystalNumberThree, maxCrystalNumberThree);

// var minCrystalNumberFour = 1;
// var maxCrystalNumberFour = 12;

// var crystalRandomNumberFour = randomNumberFromRange(minCrystalNumberFour, maxCrystalNumberFour);

// $(".crystals").on("click", function randomNumberFromRange(min,max) {
//     return Math.floor(Math.random()*(max-min+1)+min);
//     })

// var inputOne = crystalRandomNumberOne;

// var inputTwo = crystalRandomNumberTwo;

// var inputThree = crystalRandomNumberThree;

// var inputFour = crystalRandomNumberFour;

// function reset() {
// $("#score").text("");
// totalScore = "";
// computerRandomNumber();
// crystalRandomNumberOne();
// crystalRandomNumberTwo();
// crystalRandomNumberThree();
// crystalRandomNumberFour();
// }

// $(".crystals").on("click", "button", function() {
//     totalScore = totalScore + inputOne;
//     console.log("New userTotal " + userTotal);
//     $("#score").text(totalScore);

//     if (totalScore === computerRandomNumber) {
//         wins();
//     }

//     else if (totalScore > computerRandomNumber) {
//         losses();
//     } 
// })




// if (selectedOperator) {
//          selectedEquals = true;
         
//          // result = eval(firstNum + operator + secondNum);
//          result = calc[operator](parseInt(firstNum), parseInt(secondNum));
//          $("#result").text(result);
//        }

    // how to get the crystal random numbers to add together in box?

//set the value to be stored
// $("#current-total").data("crystalRandomNumberOne");

//get the stored value
// var currentValueOne = $("#current-total").data("crystalRandomNumberOne");

// console.log(currentValueOne);

//you can also change the value
// $("div").data("valuename", 101);

//get the new stored value
// var value = $("div").data("valuename");
//outputs "101"
// alert(value);


// });