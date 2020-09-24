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
      peloWidth=parseFloat(window.getComputedStyle($pelota).width.replace('px','')),
      sancada=10
  if(e.key==="ArrowUp"&&topPelotaNow>sancada)topPelotaNow-=sancada;
  if(e.key==="ArrowDown"&&topPelotaNow<(heightMapa-peloHeigth-(sancada*2)))topPelotaNow+=sancada;
  $pelota.style.top=topPelotaNow+"px"
  if(e.key==="ArrowLeft"&&leftPelotaNow>sancada)leftPelotaNow-=sancada;
  if(e.key==="ArrowRight"&&leftPelotaNow<(widthMapa-peloWidth-(sancada*2)))leftPelotaNow+=sancada;
  $pelota.style.left=leftPelotaNow+"px"
  $controladorPelota.value = "";
})
$controladorPelota.addEventListener("keyup",(e)=>{
  $controladorPelota.value = "";
})

document.addEventListener("keydown",(e)=>{
  if(e.key==='a'&&e.altKey) alert(`Haz precionado ALt+${e.key}`)
  if(e.key==='p'&&e.altKey) prompt(`Haz precionado ALt+${e.key}`)
  if(e.key==='c'&&e.altKey) confirm(`Haz precionado ALt+${e.key}`)
})
/////////////////////////////////////////////////////////////////////////////////// SUma resta fecha
const countDown=(fecha=undefined)=>{
  
  let hoyMenosFecha= new Date().getTime()-fecha.getTime(),//es para convertir las fechas a milisegundos
      absR=Math.abs(hoyMenosFecha),
      arrayDiv=[31536000000, 2592000000, 86400000, 3600000, 60000, 1000],
      arrayF=[],
      arrayR=[]
  arrayF.push(Math.floor(absR/1000))
  arrayDiv.forEach(e=>{
      arrayF.push(Math.floor(absR/e));
      let rValue=(absR%e);
      arrayR.push(rValue);
      absR=rValue;
    })
  arrayF.push(Math.floor(arrayR[1]/604800000))//agregar las semanas
  arrayF.unshift(hoyMenosFecha)//si es - faltan años si es + pasaron
  return (arrayF)
  //return [bruto, enSegundos, años, meses, dias, horas, minutos, segundos, semanas]
}

const $countDownContainer = document.getElementById("relojCountDown"),
      $inputFechaCountDown=document.getElementById("fechaCountDown"),
      $btnPlayCountDown=document.getElementById("countDownPlay")
      fStopCD=_=>{
        clearInterval(controlCountDown);
        $countDownContainer.innerHTML=null
        $btnPlayCountDown.disabled=false;
        $inputFechaCountDown.disabled=false;
      },
      printHTML=(e=>{if(Math.sign(e[0])===-1){
        return `<h3>Faltan: ${e[2]}A/${e[3]}M/${e[8]}S/${e[4]}D ${e[5]}h:${e[6]}m:${e[7]}s</h3>`}
        else {return `<h3>Han pasado: ${e[2]}A/${e[3]}M/${e[8]}S/${e[4]}D ${e[5]}h:${e[6]}m:${e[7]}s</h3>`}})
        
let controlCountDown;

document.addEventListener("click", (e)=>{
  if(e.target.matches("#countDownPlay")){
    let $fecha=new Date($inputFechaCountDown.value)
    if($fecha===undefined||$fecha===NaN||$fecha.toDateString()==='Invalid Date'){ 
        alert(`No ingresaste la fecha`)
    } else {
        controlCountDown= setInterval(() => {
          eCD=countDown($fecha)
          $countDownContainer.innerHTML=printHTML(eCD)
          if(eCD[1]===0) alert(`Termino`), fStopCD(); 
        }, 1000);
        e.target.disabled= true;
        $inputFechaCountDown.disabled=true;
    }
  }
  if(e.target.matches("#countDownStop")){
    fStopCD()
  }
})
/////////////////////////////////////////////////////////////////////////////////// Top Scroll
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
document.addEventListener("click",(e)=>{
  if(e.target.matches(".to-top")||e.target.matches(".fa-chevron-up")){
    $menuNav.classList.add("palanca")//esconde menu
    $hamburger.classList.remove("is-active")//muestra hanburgesa menu
  }
})
/////////////////////////////////////////////////////////////////////////////////// Dark Mode
let lsDarkMode=localStorage.getItem('dark-mode')
const $dark_mode = document.getElementById("dark-mode-container"),
      darkModeActive=_=>{
        $dark_mode.innerHTML=`<button id="dark-mode-active" class="dark-mode-btn">🌔</button>`
        document.documentElement.style.setProperty('--first-color','#323330')
        document.documentElement.style.setProperty('--second-color','240,219,79')
        document.documentElement.style.setProperty('--b-B-Color','#616061')
        localStorage.setItem('dark-mode',true)
      },
      darkModeDesActive=_=>{
        $dark_mode.innerHTML=`<button id="dark-mode" class="dark-mode-btn">🌒</button>`
        document.documentElement.style.setProperty('--first-color','#f0db4f')
        document.documentElement.style.setProperty('--second-color','50,51,48')
        document.documentElement.style.setProperty('--b-B-Color','white')
        localStorage.removeItem('dark-mode')
      },
      inLocalStorageDarkMode=_=>{
        if(lsDarkMode) darkModeActive()
      }
window.onload=inLocalStorageDarkMode()
document.addEventListener("click",(e)=>{
  if(e.target.matches("#dark-mode")){
    darkModeActive()
  }
  if(e.target.matches("#dark-mode-active")){
    darkModeDesActive()
  }
})
/////////////////////////////////////////////////////////////////////////////////// responsible responsing designe
const $contendorYM=document.getElementById('containerYM'),
      $html360=`<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Ver video</a>
                <a href="https://goo.gl/maps/eGvKspUq2EjCKYrk6">Ver Mapa</a>`,
      $htmlOther=`<iframe width="580" height="326" src="https://www.youtube-nocookie.com/embed/9NcPvmk4vfo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.264447109022!2d-73.40895145990422!3d-50.943108142288374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbda51b0183dbaf07%3A0xbd9f2657451ace58!2sParque%20Nacional%20Torres%20del%20Paine!5e0!3m2!1ses!2scl!4v1600957662309!5m2!1ses!2scl" width="580" height="326" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
function rRDjs(){
  let widthSize=window.matchMedia("(max-width: 600px)")
  console.log(widthSize.matches)
  if(widthSize.matches){
    $contendorYM.innerHTML=$html360
  } else{
    $contendorYM.innerHTML=$htmlOther
  }
}
document.addEventListener("DOMContentLoaded",rRDjs);