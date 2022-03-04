const newLocal = ".navigation-wrap";

//active navbar //funcional
let nav = document.querySelector(newLocal);
window.onscroll = function () {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("scroll-on");
  }else{
    nav.classList.add("scroll-on");
  }
};

// nav hide boton desplegable no funcionar revisar codigo
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
  a.addEventListener("click", function(){
    navCollapse.classList.remove("show");
  })
});

// counter design //funcional

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration){
    let obj = document.getElementById(id),
    current = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / Range)),
    timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if(current == end){
        clearInterval(timer);
      }
    }, step);
  }
  counter("count1", 1000, 1287);
  counter("count2", 1000, 2867);
  counter("count3", 1000, 1440);
  counter("count4", 1000, 3200);
});