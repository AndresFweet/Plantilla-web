  let ubicacion_principal = window.pageYOffset;

  window.addEventListener("scroll",function(){
    let desplazamiento_actual = window.pageYOffset;
    if (ubicacion_principal >= desplazamiento_actual) {
      document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
      document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacion_principal = desplazamiento_actual;
  });

  //Menu Responsive
  let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
  let semaforo = true;

  document.querySelectorAll(".hamburguer")[0].addEventListener("click",function(){
    if (semaforo) {
      document.querySelectorAll(".hamburguer")[0].style.color = "#1fde82";
      semaforo = false;
    }else{
      document.querySelectorAll(".hamburguer")[0].style.color = "#FFF";
      semaforo = true;
    }
    enlacesHeader.classList.toggle("menudos");
  });
