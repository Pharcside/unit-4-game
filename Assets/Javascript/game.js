// global variables
var specialNumber;
var totalScore = 0;
var clear;
var green;
var red;
var yellow;
var win =0;
var lose = 0;






$(document).ready(function () {

    // Function where computer picks random number.
    function newNumber() {
        // computers random pick
        specialNumber = Math.floor((Math.randon() * 120) + 19);

        clear = Math.floor(Math.random() * 12 + 1);
        green = Math.floor(Math.random() * 12 + 1);
        red = Math.floor(Math.random() * 12 + 1);
        yellow = Math.floor(Math.random() * 12 + 1);


    }


    // Function to start game, in the function reset score to 0 and set target score to 19 - 120
    function newGame(){
        newNumber();
        totalscore = 0;
        $("#specialNumber").text(specialNumber);
        $("#totalScore").text(totalScore);
        $("#gem1").attr("dataGemValue", clear);
        $("#gem2").attr("dataGemValue", green);
        $("#gem3").attr("dataGemValue", red);
        $("#gem4").attr("dataGemValue", yellow);


    }
 newGame();


 

    // Function for when you win the game
function youwin(){
    wins++
    $("#wins").text(win);
    totalScore = 0;

}
// Function for when you lose the game
function youLose(){
    lose++
    $("#lose").text(lose);
    totalScore = 0;
}


  //on click event so when gems are clicked scores and wins go up
    $("#myButton1").on("click", function () {
        var gemValue = $(this).attr(gemValue);
        
        gemValue =parseInt(gemValue);
        totalScore = totalScore + gemValue;
        $("#totalScore").text(totalScore);

        if (totalScore === specialNumber){
            youwin();
            
        }
        else if (totalScore < specialNumber){
            youLose();
        }
    }

,)})