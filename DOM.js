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

const $reloj=document.getElementById("reloj"),
      $button_view_reloj=document.getElementById("button-view-reloj"),
      $button_view_stop=document.getElementById("button-view-stop"),
      $button_sound_inicia=document.getElementById("button-sound-inicia"),
      $button_sound_stop=document.getElementById("button-sound-stop"),
      $reloj_creator=document.createTextNode(`${new Date().toLocaleTimeString()}`)

      setInterval(() => {
        $reloj.appendChild($reloj_creator)
      }, 1000);
      
