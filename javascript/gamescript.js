// console.log("file is working")
// console.log(Math.random()*20)
// console.log(Math.trunc(16.866438924483994))

let secretNumber = Math.trunc(Math.random() * 20) +1;
console.log(secretNumber)
let score=20;
let highScore=0;

document.querySelector('.check').addEventListener('click',function(){
    console.log("check button was clicked");
      // getting the user value from input field
    const guess=Number(document.querySelector('.guess').value)
    console.log("value of guess is",guess);
    
    // when user has enter any number
    if(!guess){
        console.log("no number")
        document.querySelector('.message').textContent = "❌No Number Input!"
    }
    else if(guess === secretNumber){/*when user enter secret number */
        console.log("You Won!!")
        document.querySelector('.message').textContent = "✔Correct Number"
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor="green"
        // update the highscore
        if(score > highScore){
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
    }
    else if(guess !== secretNumber){
        if(guess > secretNumber){
            if(score > 1){
                document.querySelector('.message').textContent = "📈Choose High"
                score--;
                document.querySelector('.score').textContent = score
            }else{
                document.querySelector('.message').textContent = "You Lost the Game"
                document.querySelector('.score').textContent = 0
            }
        }
        else if(guess < secretNumber){
            if(score > 1){
                document.querySelector('.message').textContent = "📉Choose Low"
                score--;
                document.querySelector('.score').textContent = score
            }else{
                document.querySelector('.message').textContent = "You Lost the Game"
                document.querySelector('.score').textContent = 0
            }
        }
    }
});
// play again 
// reset the score
// generate new random number
// change background
// replace the number with ?
// set the input to ""

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    document.querySelector('.score').textContent = score
    let secretNumber = Math.trunc(Math.random() * 20) +1; 
    document.querySelector('body').style.backgroundColor="#222"
    document.querySelector('.guess').value=""; 
    document.querySelector('.number').textContent ="?"
})