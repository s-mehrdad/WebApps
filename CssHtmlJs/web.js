// --------------------------------------------------------------------------------
/// <summary>
/// CSS (modified from old works)
/// </summary>
/// <created>ʆϒʅ,13.05.2022</created>
/// <changed>ʆϒʅ,29.05.2022</changed>
// --------------------------------------------------------------------------------


function changeStyle() {
  document.getElementById("JavaScript").style.fontSize = "25px";
}


function scroll() {
  const navbarMenuOne = document.getElementById("menu-one");
  const stick = navbarMenuOne.offsetTop;

  if (window.scrollY >= stick) {

    navbarMenuOne.classList.add("stickTop")

  }
  if (window.scrollY < 200) {

    navbarMenuOne.classList.remove("stickTop")

  }
}