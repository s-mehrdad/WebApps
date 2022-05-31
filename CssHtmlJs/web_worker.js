// --------------------------------------------------------------------------------
/// <summary>
/// CSS (modified from old works)
/// </summary>
/// <created>ʆϒʅ,31.05.2022</created>
/// <changed>ʆϒʅ,31.05.2022</changed>
// --------------------------------------------------------------------------------


/*var number = 0;*/

function worker_js() {
  if (number == undefined) {
    var number = 0;
  }
  number++;
  postMessage(number);
  setTimeout(worker_js(), 1000);
}

/*worker_js();*/
