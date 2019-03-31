$(document).ready(function() {

    //Set initial variables.
    var computerNumText = document.getElementById("computer-num")
    var userTotalText = document.getElementById("user-total")   
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var wins = 0;
    var losses = 0;
    var yourTotal = 0;
    var random = 0;

    $("#wins-text").html("<h4>Wins: </h4>" + wins);
    $("#losses-text").html("<h4>Losses: </h4>" + losses);
    $("#user-total").html("<h3>Your total score is: </h3>" + yourTotal);  
    
    //Generate computer's random number.
    function computerRandom() {
        random = Math.floor((Math.random() * 100) + 20);
        $("#computer-num").html("<h1>Target: <h1>" + random);
        //$("#computer-num").addClass(random);
        console.log(random);
        return random;
    }
      
    computerNumText = computerRandom();
    
    console.log("Computer Target Number: " + computerNumText);

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    //Assign crystals a random number.
    function crysRandom() {
        var crystal1 = ((getRandomInt(3) * 3) + 1);  //max score 7
        var crystal2 = ((getRandomInt(3) * 5) + 1);  //max score 11
        var crystal3 = ((getRandomInt(3) * 10) + 2); //max score 22
        var crystal4 = ((getRandomInt(3) * 10) + 2); //max score 22
        $('#button-1').data( "num", crystal1);
        $('#button-2').data( "num", crystal2);
        $('#button-3').data( "num", crystal3);
        $('#button-4').data( "num", crystal4);
        
        //Log out random crystal values in Console.
        console.log("Crystal 1: " + crystal1);
        console.log("Crystal 2: " + crystal2);
        console.log("Crystal 3: " + crystal3);
        console.log("Crystal 4: " + crystal4);
        }
        crysRandom();
    
      
    
    //Crystal Onclick Function.
    $(".crystal-icon").click(function(event){
        console.log("Start Total: " + yourTotal);
        // Prints key that user selects.
        var crystalClick = $(this).data("num");
        console.log("Crystal Value: " + crystalClick);
        yourTotal = yourTotal + crystalClick;
        $("#yourScore").text(yourTotal);   
        console.log("User Total: " + yourTotal);

        if(yourTotal > random ) {
          console.log("User Lost!");
          //Game Reset
          yourTotal = 0;
          computerNumText = computerRandom();
          crysRandom();
          //Add User Lost to losses
          losses++;
        }
        if(yourTotal === random ) {
            console.log("User Won!");
            //Game Reset
            yourTotal = 0;
            computerNumText = computerRandom();
            crysRandom();
            //Add User won to wins
            wins++;
        } 

        $("#wins-text").html("<h4>Wins: </h4>" + wins);
        $("#losses-text").html("<h4>Losses: </h4>" + losses);
        $("#user-total").html("<h3>Your total score is: </h3>" + yourTotal);  

        return;
      }); 
    
   
    })