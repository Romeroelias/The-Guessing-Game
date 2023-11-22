let answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function (){
    let guess = document.getElementById("guessField").value;

    guesses +=1;

    if (guess == answer){
        document.getElementById("Note").innerHTML = `Congratulations! You guessed the number. It took you ${guesses} guesses.`
    }

    else if(guess > answer){
        document.getElementById("Note").innerHTML = "Note: The number you guessed is too high."
    }

    else{
        document.getElementById("Note").innerHTML = "Note: The number you guessed is too low."
    }
}