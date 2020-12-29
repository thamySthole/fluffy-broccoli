let btn_divs = document.querySelectorAll('.ii'),
  result = document.querySelector('.res'),
  comp = document.querySelector('.compScore'),
  player = document.querySelector('.playerScore'),
  display = document.querySelectorAll('.answer'),
    log = console.log;

/*btn_divs[0].addEventListener("click", rock_funtion);*/


btn_divs[0].addEventListener("click", rock_funtion);
btn_divs[1].addEventListener("click", paper_funtion);
btn_divs[2].addEventListener("click", scissors_funtion);


btn_divs[0].value = "rock";
btn_divs[1].value = "paper";
btn_divs[2].value = "scissors";

  
  let compChoice = [
    btn_divs[0].value, 
    btn_divs[1].value,
    btn_divs[2].value
    ];
    
  let pScore = 0;
  let cScore = 0;
  
  //rock function
    
function rock_funtion(){
  let ran = Math.floor(Math.random()*compChoice.length)
  let r = btn_divs[0].value ;
  
 if(compChoice[ran] === r ){
    display[0].innerHTML = compChoice[ran];
    display[1].innerHTML = r;
    result.innerHTML = "draw";
    pScore +=1;
    cScore +=1;
    
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
    
 
    if(comp.innerHTML > 5 || player.innerHTML > 5)
    {
     if(comp.innerHTML === 5){
       alert("computer wins")
     }else if(player.innerHTML === 5){
       alert ("wow you won")
     }
      pScore = 0;
      cScore = 0;
      
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
    
    }
    
 }else if(compChoice[ran] === "paper" && r != "paper"){
    display[0].innerHTML = compChoice[ran];
    display[1].innerHTML = r;
    result.innerHTML = "lost"
    pScore +=0;
    cScore +=1;
    
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
        if(comp.innerHTML > 5 || player.innerHTML > 5)
    {
     if(comp.innerHTML === 5){
       alert("computer wins")
     }else if(player.innerHTML === 5){
       alert ("wow you won")
     }
      pScore = 0;
      cScore = 0;
      
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
    
    }
    
 }else if(compChoice[ran] === "scissors" && r != "scissors"){
    display[0].innerHTML = compChoice[ran];
    display[1].innerHTML = r;
    result.innerHTML = "won"
    pScore +=1;
    cScore +=0;
    
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
        if(comp.innerHTML > 5 || player.innerHTML > 5)
    {
     if(comp.innerHTML === 5){
       alert("computer wins")
     }else if(player.innerHTML === 5){
       alert ("wow you won")
     }
      pScore = 0;
      cScore = 0;
      
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
    
    }
    
}
 
 
}
function paper_funtion(){
  let ran = Math.floor(Math.random()*compChoice.length)
  let r = btn_divs[1].value;
  
 if(compChoice[ran] === r ){
    display[0].innerHTML = compChoice[ran];
    display[1].innerHTML = r;
    result.innerHTML = "draw";
    pScore +=1;
    cScore +=1;
    
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
        if(comp.innerHTML > 5 || player.innerHTML > 5)
    {
     if(comp.innerHTML === 5){
       alert("computer wins")
     }else if(player.innerHTML === 5){
       alert ("wow you won")
     }
      pScore = 0;
      cScore = 0;
      
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
    
    }
    
 }else if(compChoice[ran] === "scissors" && r == "paper"){
    display[0].innerHTML = compChoice[ran];
    display[1].innerHTML = r;
    result.innerHTML = "lost"
    pScore +=0;
    cScore +=1;
    
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
        if(comp.innerHTML > 5 || player.innerHTML > 5)
    {
     if(comp.innerHTML === 5){
       alert("computer wins")
     }else if(player.innerHTML === 5){
       alert ("wow you won")
     }
      pScore = 0;
      cScore = 0;
      
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
    
    }
    
 }else if(compChoice[ran] === "rock" && r == "paper"){
    display[0].innerHTML = compChoice[ran];
    display[1].innerHTML = r;
    result.innerHTML = "won"
    pScore +=1;
    cScore +=0;
    
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
        if(comp.innerHTML > 5 || player.innerHTML > 5)
    {
     if(comp.innerHTML === 5){
       alert("computer wins")
     }else if(player.innerHTML === 5){
       alert ("wow you won")
     }
      pScore = 0;
      cScore = 0;
      
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
    
    }
    
}
 
 
}

function scissors_funtion(){
  let ran = Math.floor(Math.random()*compChoice.length)
  let r = btn_divs[2].value;
  
 if(compChoice[ran] === r ){
    display[0].innerHTML = compChoice[ran];
    display[1].innerHTML = r;
    result.innerHTML = "draw";
    pScore +=1;
    cScore +=1;
    
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
        if(comp.innerHTML > 5 || player.innerHTML > 5)
    {
     if(comp.innerHTML === 5){
       alert("computer wins")
     }else if(player.innerHTML === 5){
       alert ("wow you won")
     }
      pScore = 0;
      cScore = 0;
      
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
    
    }
    
 }else if(compChoice[ran] === "rock" && r == "scissors"){
    display[0].innerHTML = compChoice[ran];
    display[1].innerHTML = r;
    result.innerHTML = "lost"
    pScore +=0;
    cScore +=1;
    
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
        if(comp.innerHTML > 5 || player.innerHTML > 5)
    {
     if(comp.innerHTML === 5){
       alert("computer wins")
     }else if(player.innerHTML === 5){
       alert ("wow you won")
     }
      pScore = 0;
      cScore = 0;
      
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
    
    }
    
    
 }else if(compChoice[ran] === "paper" && r === "scissors"){
    display[0].innerHTML = compChoice[ran];
    display[1].innerHTML = r;
    result.innerHTML = "won"
    pScore +=1;
    cScore +=0;
    
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
        if(comp.innerHTML > 5 || player.innerHTML > 5)
    {
     if(comp.innerHTML > 5){
       alert("computer wins")
     }else if(player.innerHTML === 5){
       alert ("wow you won")
     }
      pScore = 0;
      cScore = 0;
      
    comp.innerHTML = cScore;
    player.innerHTML = pScore;
    
    }
    
}
 
 
}