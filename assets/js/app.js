function acionarMenuHamburguer() {
  let menu = document.getElementById('menu_hamburguer')
  let box = document.getElementById('box');
  if (menu.style.display === "block") {
    menu.style.display = "none";
    box.style.borderRadius = "0px 0px 25px 25px";
  } else {
    menu.style.display = "block";
    box.style.borderRadius = "0px 0px 0px 0px";
  }
}

function mudarBordaMenu(){
  let menu = document.getElementById('menu_hamburguer')
  let box = document.getElementById('box');
  if(window.innerWidth > 768){
    box.style.borderRadius = "0px 0px 25px 25px";
    menu.style.display = "none";
  }
}