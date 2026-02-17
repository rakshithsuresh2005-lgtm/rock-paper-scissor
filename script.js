const boxes = document.querySelectorAll(".box img");
const msg = document.querySelector(".announcement h1");
const items = ["rock", "paper", "scissor"];
let userWinner = true;



function randcomp(){
    let randChoise = Math.floor(Math.random()*3);
    return items[randChoise];
}

function messagePrint(userWinner, userChoise, compChoise){
    if (userWinner === true){
        msg.innerText = `you choose ${userChoise} and comp choose ${compChoise}, so you won `;
        msg.style.color = "green";
    }
    else {
        msg.innerText = `you choose ${userChoise} and comp choose ${compChoise}, so you lost `;
        msg.style.color = "red";
    }
}

function draw(userChoise, compChoise){
    msg.innerText = `you choose ${userChoise} and comp choose ${compChoise}, so it's draw `;
    msg.style.color = "grey";
    return;

}

function findwinner(userChoise){
    let compChoise = randcomp();

    if (userChoise === compChoise){
        draw(userChoise, compChoise);
        return;

    }
    else {
        if (userChoise === "rock"){
           userWinner = compChoise === "paper"?false:true;  
        }
        else if (userChoise === "paper"){
            userWinner = compChoise === "rock"?true:false; 

        }
        else{
            userWinner = compChoise === "rock"?false:true; 
        }
        
    }
    messagePrint(userWinner, userChoise, compChoise);



}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        let userChoise = box.getAttribute("id");
        findwinner(userChoise);


    })
});


