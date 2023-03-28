
// --------------------------------------------------------------------------------
/// <summary>
/// web_worker.js
/// JavaScript worker tread
/// created by Mehrdad Soleimanimajd on 13.05.2022
/// </summary>
/// <created>ʆϒʅ, 31.05.2022</created>
/// <changed>ʆϒʅ, 28.03.2023</changed>
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
