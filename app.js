const btnCheck = document.querySelector(".btnCheck");
let questItem = document.querySelectorAll(".questItem");
let counter = 0;
let check = document.querySelectorAll('.check');
let inpQ = document.querySelectorAll('.inpQ');
let result = document.querySelector('.result');
const restartPage = document.querySelector('.restartPage');

restartPage.addEventListener('click',()=>{
    location.reload();
    inpQ[i].classList.remove("falseQuest");
    inpQ[i].classList.remove("trueQuest");
});

btnCheck.addEventListener("click",()=>{
    for(let i = 0;i<questItem.length;i++){
        if(check[i].textContent===inpQ[i].value){
           counter++;
           inpQ[i].classList.add("truesQuest");
        }
        else{
            inpQ[i].classList.add("falseQuest");
        }
         
    }
   
    result.textContent = `верных ответов = ${counter}`;
    counter=0;
});