let userScore=0;
let compScore=0;

const choices=document.querySelectorAll('.choice');
const msg= document.querySelector('#msg');
const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector('#comp-score');

let genCompChoice=()=>{
    const options=['rock','paper','scissors'];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];

    
    //rock paper ,secissor

};
const drawGame=(userChoice,CompChoice)=>{
    msg.innerText=`Ohh shit! Game Draw!.Your Choice was ${userChoice} and Computer choice was ${CompChoice}`;
    msg.style.backgroundColor = 'green';


};
const showWinner=(userWin,userChoice,CompChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`Congartulations! you Win.Your Choice was ${userChoice} and Computer choice was ${CompChoice}`;
        msg.style.backgroundColor = '#28a745';


    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
       msg.innerText=`Sorry You lost!,Play Again!.Your Choice was ${userChoice} and Computer choice was ${CompChoice}`;
       msg.style.backgroundColor = 'red';



    }
};
const playGame=(userChoice)=>{
     // Genration of the computer choices--->using modular way of the programing
     const CompChoice=genCompChoice();
    
     if(userChoice===CompChoice){
        //Draw Game
        drawGame(userChoice,CompChoice);
     }
     else{
        let userWin=true;
        if(userChoice==='rock'){
            // we ahve only two options left ...1)scissors and 2)paper

            userWin=CompChoice==='paper'?false:true;

        }
        else if(userChoice==='paper'){
            // we have  left rock and scissors
            userWin=CompChoice==='scissors'?false:true;


        }
        else{
            //choices are rock and paper
            userWin=CompChoice==='rock'?false:true;

        }
        showWinner(userWin,userChoice,CompChoice);

    }

    

};

choices.forEach((choice)=>{
    
    choice.addEventListener('click',()=>{
           // accesing the id of all the choices
           const userChoice=choice.getAttribute('id');

         playGame(userChoice);


       });
});