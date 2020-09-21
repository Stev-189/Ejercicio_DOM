const $menuNav= document.getElementById("menuPalanca"),
      $hamburger=document.querySelector(".hamburger"),
      $reloj_container=document.getElementById("reloj_container"),
      $button_view_reloj=document.getElementById("button-view-reloj"),
      $button_sound_inicia=document.getElementById("button-sound-inicia"),
      palancaMenu=_=>$menuNav.classList.toggle("palanca"),
      hamburgerAnimated=_=>$hamburger.classList.toggle("is-active"),
      mueveReloj=_=>{if(continuar)document.form_reloj.reloj.value=new Date().toLocaleTimeString(),setTimeout("mueveReloj()",1000)},
      play=_=>{if(continuar_play){new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3').play(),setTimeout("play()",1000)}}

let continuar,
    continuar_play

document.addEventListener("click",(e)=>{
  if(e.target.matches(".botonPalanca")||e.target.matches(".hamburger")||e.target.matches(".hamburger-inner")||e.target.matches(".hamburger-box")){
    palancaMenu(e)
    hamburgerAnimated(e)
    e.stopPropagation()
  }
  if(e.target.matches("#button-view-reloj")){
    continuar=true
    mueveReloj()
    $reloj_container.style.setProperty("display","flex")
    $button_view_reloj.setAttribute("disabled","true")
    e.stopPropagation()
  }
  if(e.target.matches("#button-view-stop")){
    continuar=false
    $reloj_container.style.setProperty("display","none")
    $button_view_reloj.removeAttribute("disabled")
    e.stopPropagation()
  }
  if(e.target.matches("#button-sound-inicia")){
    continuar_play=true
    play()
    $button_sound_inicia.setAttribute("disabled","true")
    e.stopPropagation()
  }
  if(e.target.matches("#button-sound-stop")){
    continuar_play=false
    $button_sound_inicia.removeAttribute("disabled")
    e.stopPropagation()
  }
})
/////////////////////////////////////////////////////////////////////////////////// Evento Teclado
const $controladorPelota =document.getElementById("controladorPelota"),
      $Mapa =document.getElementById("mapa"),
      $pelota=document.getElementById("pelota")

$controladorPelota.addEventListener("keydown",(e)=>{
  let topPelotaNow=parseFloat(window.getComputedStyle($pelota).top.replace('px','')),
      leftPelotaNow=parseFloat(window.getComputedStyle($pelota).left.replace('px','')),
      heightMapa=parseFloat(window.getComputedStyle($Mapa).height.replace('px','')),
      widthMapa=parseFloat(window.getComputedStyle($Mapa).width.replace('px','')),
      peloHeigth=parseFloat(window.getComputedStyle($pelota).height.replace('px','')),
      peloWidth=parseFloat(window.getComputedStyle($pelota).width.replace('px',''))
  if(e.key==="ArrowUp"&&topPelotaNow>1)topPelotaNow--;
  if(e.key==="ArrowDown"&&topPelotaNow<(heightMapa-peloHeigth-1))topPelotaNow++;
  $pelota.style.top=topPelotaNow+"px"
  if(e.key==="ArrowLeft"&&leftPelotaNow>1)leftPelotaNow--;
  if(e.key==="ArrowRight"&&leftPelotaNow<(widthMapa-peloWidth-1))leftPelotaNow++;
  $pelota.style.left=leftPelotaNow+"px"
  $controladorPelota.value = "";
})
$controladorPelota.addEventListener("keyup",(e)=>{
  $controladorPelota.value = "";
})
/////////////////////////////////////////////////////////////////////////////////// Evento Teclado