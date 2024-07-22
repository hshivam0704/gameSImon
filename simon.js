let gamSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["yellow","red","purple","green"]                //*1

let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
      if(started==false){
            console.log("game started");
            started=true;
            levelUp();
      }
});


 function btnFlash(btn){
      btn.classList.add("flash");                    //adding class flash to make bg white
      setTimeout(function(){
            btn.classList.remove("flash");           //after one sec remove class to change color back
      },400);
      }

      function userFlash(btn){
            btn.classList.add("userFlash");           //adding class flash to make bg white
            setTimeout(function(){
                  btn.classList.remove("userFlash");  //after one sec remove class to change color back
            },400);
            }
 
function levelUp(){
      userSeq=[];
      level++;

  h2.innerText=`level ${level}`;
  let randIdx=Math.floor(Math.random()*3);             //chhose random button i.e index of btns 0-3
  let randColor= btns[randIdx];                        //choose any color from btns array *1
  let randBtn= document.querySelector(`.${randColor}`);  //select class either yello/red/purple/red
  gamSeq.push(randColor);
  console.log(gamSeq);
  btnFlash(randBtn);
}

 function checkAns(idx){
      if(userSeq[idx]===gamSeq[idx]){
            if(userSeq.length==gamSeq.length){
                  setTimeout(levelUp(),1000);
            }
      }
      else{
           // h2.innerText="game Over! press any key to restart";
           h2.innerHTML=`game Over! your score was <b>${level}</b> <br>press any key to restart.`;
           document.querySelector("body").style.backgroundColor="red";
           setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

           })

            reset();
      }
 }
function btnPress(){
      console.log(this);
      let btn= this;
      userFlash(btn);

      userColor=btn.getAttribute("id");
      userSeq.push(userColor);
      checkAns(userSeq.length-1);
}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
      btn.addEventListener("click",btnPress);
}

function reset(){
      started=false;
      gamSeq=[];
      userSeq=[];
      level=0;
}