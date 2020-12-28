let log = console.log;

//nav 
let navBtn = document.querySelector('.nav-btn');
let closePanel = document.querySelector('.close');
let panel = document.querySelector('#panel');
let aside = document.querySelector('aside');

navBtn.addEventListener('click', addClass);
closePanel.addEventListener('click', close_panel);

function addClass() {
  // body..
  aside.style.display ="block";
  panel.classList.add('aside');
}
function close_panel() {
  // body..
  aside.style.display ="none";
  panel.classList.remove('aside');
}

//main page for appending
let appendChilds = document.querySelector(".back-page")

//pages 

let home = document.querySelector(".H"),
    games = document.querySelector(".G"),
    apis = document.querySelector('.Api'),
    log_sign = document.querySelector(".A"),
    cont = document.querySelector(".C");
    
    
home.addEventListener("click", f);
games.addEventListener("click", f);
apis.addEventListener("click", f);
log_sign.addEventListener("click", f);
cont.addEventListener("click", f);

function f(){
    aside.style.display ="none";
  panel.classList.remove('aside');
}
 
 