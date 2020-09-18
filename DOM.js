const $menuNav= document.getElementById("menuPalanca"),
      $hamburger=document.querySelector(".hamburger"),
      palancaMenu=()=>$menuNav.classList.toggle("palanca"),
      hamburgerAnimated=()=>$hamburger.classList.toggle("is-active")

document.addEventListener("click",(e)=>{
  if(e.target.matches(".botonPalanca")||e.target.matches(".hamburger")||e.target.matches(".hamburger-inner")||e.target.matches(".hamburger-box")){
    palancaMenu(e)
    hamburgerAnimated(e)
    e.stopPropagation()
  }
})
