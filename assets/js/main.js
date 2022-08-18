const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  links = document.querySelector(".nav-link");

/*Menu Responsive Mobile*/
function menuMobile() {
  var x = document.getElementById("nav-menu");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
function linkMenuMobile() {
  var x = document.getElementById("nav-menu");
  if (x.className === "responsive") {
    x.className = "none";
  } else {
    x.className = "nav";
  }
}
