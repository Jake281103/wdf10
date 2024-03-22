// UI

const minnum = document.querySelector(".minnumber"),
      maxnum = document.querySelector(".maxnumber"),
      getinput = document.querySelector("#guessnumber"),
      getbtn = document.querySelector("#btn"),
      message1 = document.querySelector(".message1"),
      message2 = document.querySelector(".message2"),
      getgameform = document.getElementById("gameform");


const min = 1,
      max = 10,
      winningnum = 5;

let gameleft = 3;

minnum.textContent = min;
maxnum.innerText = max;



getbtn.addEventListener('click',function(e){
    // console.log("hay I am working");
    // console.log(getinput.value);
    // console.log(typeof getinput.value);

    // let guess = Number(getinput.value);
    // let guess = +getinput.value;
    let guess = parseInt(getinput.value);

    // console.log(guess);
    // console.log(typeof guess);

    if(guess < min || guess > max || isNaN(guess)){
        console.log(`Please enter a number between ${min} to ${max}`);
        message2.textContent = `Please enter a number between ${min} to ${max}`;
    }

    if(guess == winningnum){
        // Game Won
        // console.log("You Win");

        // disabled getinput
        getinput.disabled = true;

        // getinput border color to green
        getinput.style.borderColor = "green";

        // message1
        message1.textContent = `${winningnum} is correct!! You Won`;
        message1.style.color = "green";

        // play again ?
        getbtn.value = "Play Again";
    }else{
        
        // gameleft--;
        gameleft -=1;

        // console.log(gameleft);

        if(gameleft == 0){
            // Game Lost
            // console.log("You lose");
    
            // disabled getinput
            getinput.disabled = true;
    
            // getinput border color to green
            getinput.style.borderColor = "red";
    
            // message1
            message1.textContent = `Game Over. You Lost, The correct number is ${winningnum}`;
            message1.style.color = "red";
    
            // play again ?
            getbtn.value = "Play Again";
        }else{
            // Continue Game

            // getinput border color is red
            getinput.style.borderColor = "red";

            //message1
            message1.textContent = `${guess} is not correct!, ${gameleft} guess left.`;
            message1.style.color = "blue";

            // clear getinput old value
            getinput.value = "";
            
            // auto focus getinput
            getinput.focus();

        }

        
    }

    e.preventDefault();

});


function setmessage1(msg,color){

    message1.textContent = `${winningnum} is correct!! You Won`;
    message1.style.color = "green";

}


function gameover(won,msg){

    let color;

    won === true ? color = "green" : color = "red";

    // if(won){
    //     color = "green";
    // }else{
    //     color = "red";
    // }
    
    // disabled getinput
    getinput.disabled = true;
    
    // getinput border color to green
    getinput.style.borderColor = "color";

    //message1
    setmessage1(msg,color);
        
    // play again ?
    getbtn.value = "Play Again";

}


