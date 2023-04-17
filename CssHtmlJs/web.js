
// --------------------------------------------------------------------------------
/// <summary>
/// web.js
/// JavaScript (modified from old works)
/// created by Mehrdad Soleimanimajd on 13.05.2022
/// </summary>
/// <created>ʆϒʅ, 13.05.2022</created>
/// <changed>ʆϒʅ, 15.04.2023</changed>
// --------------------------------------------------------------------------------


function changeStyle() {
  console.assert(document.getElementById("JavaScript"), true, document.getElementById("JavaScript").style.backgroundColor = "#f0820d");
  console.assert(document.getElementById("JavaScriptTwo"), false, document.getElementById("JavaScript").style.backgroundColor = "#31a7f9");
  // console.assert(document.getElementById("JavaScript"), false, document.getElementsById("JavaScript").style.color = "#f4770d");
  document.getElementById("JavaScript").style.fontSize = "25px";
  console.assert(document.getElementsByName("body"), true, console.log(true));
  console.assert(1 << 2 == 0, true, console.log("one"));
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
  // setTimeout(worker(), 1000);

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
  if (typeof (Worker) != undefined) {
    if (a == undefined) {
      // a = new Worker("web_worker.js");
      // blob = new Blob(["(" + worker_js.toString() + ")()"]);
      blob = new Blob(["(" + worker.toString() + ")()"]);
      a = new Worker(URL.createObjectURL(blob, { type: "text/JavaScript" }));
    }
  } else {

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
