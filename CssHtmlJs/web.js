// --------------------------------------------------------------------------------
/// <summary>
/// CSS (modified from old works)
/// </summary>
/// <created>ʆϒʅ,13.05.2022</created>
/// <changed>ʆϒʅ,31.05.2022</changed>
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


let a;
let number;
function worker() {
  if (number == undefined) {
    var number = 0;
  }
  number++;
  postMessage(number);
  setTimeout(worker.bind(null, number), 1000);

  /*  this.onmessage = function (event) {
      if (event.data == 2) {
        number++;
        console.log(event.data)
        postMessage(number);
      }
      setTimeout(worker(), 500);
    };*/
}
function engine() {
  if (a == undefined) {
    /*a = new Worker("web_worker.js");*/
    blob = new Blob(["(" + worker.toString() + ")()"]);
    a = new Worker(URL.createObjectURL(blob, { type: "text/JavaScript" }));
  }
  if (number == undefined) {
    var number = 0;
  }
  a.onmessage = function (event) {
    console.log(event.data)
    document.getElementById("test").innerHTML = number;
    number++;
    if (number == 4) {
      document.getElementById("test").innerHTML = "Happy new year! :)";
      /*a.postMessage(number);*/
      a.terminate();
      a = undefined;
    }
  };
}
