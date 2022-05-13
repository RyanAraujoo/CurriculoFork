//document.querySelector(".hamburguer").addEventListener("click", () => {document.querySelectorAll(".container").classList.toggle("show-menu")} 
//)
const optionsMenu = document.querySelector(".sidebar")
const btnMenu = document.getElementById("menu")
btnMenu.addEventListener("click", () => {
        //console.log("cliquei no menu")
        if (optionsMenu.style.opacity == 0) {
          optionsMenu.style.opacity = 3
         
     } else {
         optionsMenu.style.opacity = 0
          
  } 
})

  // Essa função pega o elemento side-bar e se tiver a classe show-menu ele tira
    // se não ele põem.