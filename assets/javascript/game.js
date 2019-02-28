$(document).ready(function () {

    //variables 
    var counter = "";
    var targetNumber = "";
    var wins = 0;
    var losses = 0;
    var num = "";
    var numbers = "";
    var images = ["assets/images/c0.png", "assets/images/c1.png", "assets/images/c2.png", "assets/images/c3.png"];
    var crystalPower = [];
    var crystalClass = ["crystal1", "crystal2", "crystal3", "crystal4"];

    //generates random numbers for each crystal 
    function crystalFactory() {
        for (var a = 0; a < 4; a++) {
            numbers = Math.floor((Math.random() * 12) + 1);
            crystalPower.push(numbers)
        }
        for (var i = 0; i < crystalClass.length; i++) {
            var imageCrystal = $("<img>");
            imageCrystal
                .addClass("crystal-image")
                .addClass(crystalClass[i])
                .attr("src", images[i])
                .attr("data-crystalvalue", crystalPower[i]);
            $("#crystals").append(imageCrystal);
            console.log(crystalClass[i]);
        }
        console.log(wins);
        console.log(losses);
        console.log(crystalPower);

    } crystalFactory();

    //start the game
    function gameStart() {
        num = Math.floor((Math.random() * 120) + 1);
        if (num < 19) {
            targetNumber = 19;
        } else {
            targetNumber = num;
        }
        counter = 0;
        $("#total-score").text(counter);
        console.log(targetNumber);
        $("#number-to-guess").text(targetNumber);

    } gameStart();

    //banner and woodsign
    var banner = $("<img>");
    banner
        .addClass("banner")
        .attr("src", "assets/images/banner.png")
    $("#banner").append(banner)
    var woodensign = $("<img>");
    woodensign
        .addClass("woodsign")
        .attr("src", "assets/images/woodensign.png")
    $("#wood").append(woodensign);

    function resetGame() {
        crystalPower = [];
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#crystals").empty();
        // crystalNumberFactory();
        crystalFactory();
        gameStart();
    

    //onclick function to things with a class crystal-image         
    $(".crystal-image").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        console.log(counter);

        //score keeping 
        $("#total-score").text(counter);

        if (counter === targetNumber) {
            wins++;
            resetGame()
            // $("#wins").text(wins);
            // $("#crystals").empty();
            // crystalPower = [];
            // crystalFactory();
            // gameStart();

        } else if (counter >= targetNumber) {
            losses++;;
            resetGame()
            // $("#losses").text();
            // $("#crystals").empty();
            // crystalPower = [];
            // crystalFactory();
            // gameStart();
        }
    });   

    } resetGame()
    
    
});
