// game has 4 crystals
// each crystal gets a random number between 1 and 12
// computer picks a random number between 90-120.
// when you click on a crystal, the cystals number is added until it reaches total score
// or goes above total score.
// if not equall game retarts and add to loss
// if equal game restarts and add to win
// with every restart new numbers are generated.

$(document).ready(function () {
    // hint button
    $("button").one('click', function () {
        $("#container").append("Click on each Gemstone first to determine their number value, after that its just simple addition!!");
    });

    // Variables
    var computerNumber = "";
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    // create 4 variables for 4 crystals that equal a random number between 1-12
    // add + 1 
    var crystal1 = Math.floor(Math.random() * 12) + 1;
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    var crystal4 = Math.floor(Math.random() * 12) + 1;

    // Generate computerNumber between 90-120; ad to computer number ID.
    function getNumber() {
        computerNumber = Math.floor(Math.random() * 31) + 90;
        $("#computerNumber").html(computerNumber);
        
    };
    // Restart Game, reset number values
    // update score and re-generate random numbers for crystals 1-12 on restart
    // clear alert
    function restartGame() {
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
        userScore = 0;
        getNumber();
        updateScore();
        $("#alert").html("")
    };

    // win = add win, update score, alert, start new game
    // set a timeout delay to pause while alert is display
    function youWin() {
        updateScore();
        wins++;
        $("#wins").html("Wins: " + wins);
        $("#alert").html("YOU WIN!!")
        setTimeout(restartGame, 2000);
       
    };

    // lose = add loss, update score, alert, restart game
    // set a timeout delay to pause while alert is display
    function youLose() {
        updateScore();
        losses++;
        $("#losses").html("Losses: " + losses);
        $("#alert").html("SORRY TRY AGAIN")
        setTimeout(restartGame, 2000);
        
    };
    
    // Update the players Number to user score ID on index.html
    function updateScore() {
        $("#userScore").html(userScore);
    };

    // Click function - Generate crystal1 value
    // add crystals value to userscore ID
    $("#crystal1").click(function () {
        userScore += crystal1;
        updateScore();

        // define win; push to #wins...define loss; push to #losses
        if (userScore === computerNumber) {
            youWin();
        }
        else if (userScore > computerNumber) {
         youLose();
        }
    });

    // Click function - Generate crystal2 value 
    $("#crystal2").click(function () {
        userScore += crystal2;
        updateScore();

        // define win; push to #wins define loss; push to #losses
        if (userScore === computerNumber) {
            youWin();
         }
        else if (userScore > computerNumber) {
            youLose();
        }
    });

    // Click function Generate crystal3 value between 1-12
    $("#crystal3").click(function () {
        userScore += crystal3;
        updateScore();

        // define win; push to #wins..define loss; push to #losses
         if (userScore === computerNumber) {
             youWin();
         }
         else if (userScore > computerNumber) {
             youLose();
         }
    });

    // Click function Generate crystal4 value between 1-12
    $("#crystal4").click(function () {
        userScore += crystal4;
        updateScore();

        //  define win; push to #wins...define loss; push to #losses
         if (userScore === computerNumber) {
             youWin();
         }
         else if (userScore > computerNumber) {
             youLose();
         }
    });
    restartGame();
});