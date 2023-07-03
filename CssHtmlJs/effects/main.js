// ===========================================================================
/// <summary>
/// main.js
/// WebApps effects
/// created by Mehrdad Soleimanimajd on 15.04.2023
/// </summary>
/// <created>ʆϒʅ, 15.04.2023</created>
/// <changed>ʆϒʅ, 03.07.2023</changed>
// ===========================================================================

let debugOrTest = true;

let stateScroll = 0;

let goneD = false;
let goneU = false;
let stateSumGoneD = 0;
let stateSumGoneU = 0;

let stateRateArray = [0];
let stateRateSum = 0;
let stateRateAverage = 0;

let allElements = [];
let stateCardsElements = [];
let stateAsidesElements = [];

let stateAllContentElements = [];

function scrolled() {
  if (debugOrTest == true) {
    // console.log(scrollX);
    // console.log(scrollY);
  }

  // let elementOneC = document.getElementById("OneC");
  // let elementTwoC = document.getElementById("TwoC");
  // let elementThreeC = document.getElementById("ThreeC");

  // let elementOneA = document.getElementById("OneA");
  // let elementTwoA = document.getElementById("TwoA");
  // let elementThreeA = document.getElementById("ThreeA");

  let cardsElement = document.getElementById("cardsOne");
  let asideElement = document.getElementById("asideOne");

  let contentElement = document.getElementById("contentOne");

  let textCElement = document.querySelector(".textC");

  let cardsElements = document.querySelectorAll(".headerCcards");
  let asideElements = document.querySelectorAll(".headerCasides");

  let allContentElements = document.querySelectorAll(".cardsAsides");

  if (debugOrTest) {
    // console.log(cardsElements);
    // console.log(asideElements);
    // console.log(allContentElements);
  }

  if (stateAsidesElements.length == 0 && stateCardsElements.length == 0) {
    for (const element of cardsElements) {
      stateAsidesElements.push(true);
      stateCardsElements.push(true);
    }
  }

  if (stateAllContentElements.length == 0) {
    allContentElements.forEach((element) => {
      stateAllContentElements.push(true);
    });
  }

  if (allElements.length == 0) {
    cardsElements.forEach((item) => {
      allElements.push(item);
    });
    asideElements.forEach((item) => {
      allElements.push(item);
    });
  }

  if (debugOrTest == true) {
    // console.log(allElements);
    // console.log(allElements.length);
  }

  let stateRate = 0;

  if (stateScroll < scrollY) {
    goneD = true;
    goneU = false;
    stateRate = scrollY - stateScroll;

    // stateSumGoneD += stateRate;
    // stateSumGoneU = -100;
    // console.log("stateSumGoneUreset");
  } else {
    goneU = true;
    goneD = false;
    stateRate = stateScroll - scrollY;

    // stateSumGoneU += stateRate;
    // stateSumGoneD = -100;
    // console.log("stateSumGoneDreset");
  }
  // stateSum = -5;
  // console.log("goneUreset");
  // stateSum = -5;
  // console.log("goneDreset");

  stateScroll = scrollY;
  stateRateArray.unshift(stateRate);

  stateRateAverage = (stateRate + stateRateArray[0]) / stateRateArray.length;

  // if (stateSumGoneU > 5) {
  //     stateSumGoneU = 0;
  // }
  // if (stateSumGoneD > 5) {
  //     stateSumGoneD = 0;
  // }

  if (stateRateArray.length > 11) {
    stateRateArray.pop();
  }

  ////[x]: reconstruct to arrays and states
  ////[x]: elaborated scrolling
  // how many? too big? not sort
  // for all index

  if (debugOrTest == true) {
    // console.log(stateVar);
    // console.log(stateVarArray);
    // console.log(stateVarArray.length);
    // console.log(cardsElements);
    // console.log(asideElements);
    // console.log(stateSum);
    // console.log(stateCardsElements);
    // console.log(stateAsidesElements);
  }

  // let stateSum = 0;
  // if ((goneD == true) && (stateSumGoneD >= 0)) {
  //     stateSum = stateSumGoneD;
  // } else {
  //     stateSumGoneD = -5;
  // }
  // if (goneU == true && (stateSumGoneU >= 0)) {
  //     stateSum = stateSumGoneU;
  // } else {
  //     stateSumGoneU = -5;
  // }
  // console.log(stateSum);

  let currentSpeed = 0;
  if (stateRateAverage >= 0 && stateRateAverage <= 2) {
    currentSpeed = 1;
  } else if (stateRateAverage >= 3 && stateRateAverage <= 5) {
    currentSpeed = 2;
  } else if (stateRateAverage >= 6 && stateRateAverage <= 8) {
    currentSpeed = 3;
  }

  if (debugOrTest == true) {
    // console.log(currentSpeed);
    // console.log(stateRate);
    // console.log(stateRateAverage);
    // console.log(currentSpeed*stateRate);

    for (let index = 0; index < allContentElements.length; index++) {
      // console.log(allContentElements[index].getClientRects().item(0).top);
    }
    console.log(allContentElements);
    console.log(stateAllContentElements);
  }

  for (let index = 0; index < allContentElements.length; index++) {
    if (
      allContentElements[index].getClientRects().item(0).top <=
      40 + index * 20
    ) {
      let gapElement = document.createElement("div");
      gapElement.classList = "selectGapElement";
      // let gapElements = [];
      if (debugOrTest) {
        // console.log(gapElement);
        // console.log(gapElements.length);
      }
      if (allContentElements[index].className == "headerCcards cardsAsides") {
        if (allContentElements[index] != undefined) {
          let top = 10 * (index + 1);
          // gapElements.push(gapElement);
          gapElement.style.width =
            allContentElements[index].getClientRects()[0].width.toString() +
            "px";
          console.log(allContentElements[index].getClientRects()[0].width);
          console.log(allContentElements[index].getClientRects()[0].height);
          gapElement.style.height =
            allContentElements[index].getClientRects()[0].height.toString() +
            "px";
          gapElement.style.display = "block";
          if (debugOrTest) {
            // gapElement.style.backgroundColor="black";
          }
          allContentElements[index].before(gapElement);
          cardsElement.appendChild(allContentElements[index]);
          allContentElements[index].classList.add("shrinkCcards");
          allContentElements[index].style.top = top.toString() + "px";
        }

        stateAllContentElements[index] = false;
      } else if (
        allContentElements[index].className == "headerCasides cardsAsides"
      ) {
        if (allContentElements[index] != undefined) {
          allContentElements[index].classList.add("shrinkCasides");
          // gapElements.push(gapElement);
          gapElement.style.width =
            allContentElements[index].getClientRects()[0].width.toString() +
            "px";
          gapElement.style.height =
            allContentElements[index].getClientRects()[0].height.toString() +
            "px";
          gapElement.style.display = "block";
          if (debugOrTest) {
            // gapElement.style.backgroundColor="black";
          }
          allContentElements[index].before(gapElement);
          asideElement.appendChild(allContentElements[index]);
          let spanElement = document.createElement("span");
          asideElement.appendChild(spanElement);
        }

        stateAllContentElements[index] = false;
      }
    }
    // if (index == allContentElements.length - 1 && stateAllContentElements[index] == false) {
    //     let gapElements = document.querySelectorAll(".selectGapElement");
    //     console.log(gapElements);
    //     // gapElements.forEach((item) => { item.style.display = "none"; });
    //     gapElements.forEach((item) => { item.remove(); });
    // }
  }

  // BUG: debug scrolling
  // BUG: scrolled now debug
  //TODO: refresh cards effect
  // if ((currentSpeed * stateRate >= 10) && (currentSpeed * stateRate < 40)) {

  //     if (debugOrTest == true) {
  //         console.log(stateCardsElements);
  //     }
  //     for (let index = 0; index < stateCardsElements.length; index++) {

  //         if (goneD == true) {
  //             if (debugOrTest == true) {
  //                 // console.log("goneD");
  //             }
  //             if ((stateCardsElements[index] == true) && (stateAsidesElements[index] == true)) {

  //                 cardsElements = document.querySelectorAll(".headerCcards");
  //                 asideElements = document.querySelectorAll(".headerCasides");
  //                 if (debugOrTest == true) {
  //                     // console.log(cardsElements);
  //                     // console.log(asideElements);
  //                 }

  //                 if (debugOrTest == true) {
  //                     // console.log(stateSum * stateVarArray.length);
  //                     // console.log(cardsElements.length);
  //                     // console.assert(cardsElements, true, console.log(cardsElements));
  //                     // console.log(index);
  //                 }

  //                 // cardsElement.children.add(cardsElements[index]);
  //                 cardsElement.appendChild(cardsElements[index]);
  //                 if (asideElements[index] != undefined) {
  //                     asideElement.appendChild(asideElements[index]);
  //                     let spanElement = document.createElement("span");
  //                     asideElement.appendChild(spanElement);
  //                 }

  //                 let top = (20 * (index + 1));
  //                 cardsElements[index].classList.add("shrinkCcards")
  //                 cardsElements[index].style.top = top.toString() + "px";
  //                 // cardsElements[index].style.position = "fixed";

  //                 asideElements[index].classList.add("shrinkCasides")
  //                 // asideElements[index].style.top = top.toString() + "px";

  //                 stateCardsElements[index] = false;

  //                 stateAsidesElements[index] = false;

  //                 if (debugOrTest == true) {
  //                     // console.assert(cardsElement.firstChild, true, console.log(cardsElement.children));
  //                     // console.log(stateCardsElements[index]);
  //                     // console.log(stateAsidesElements[index]);
  //                 }

  //                 stateSum = -50;
  //                 break;
  //             }
  //         }
  //     }

  //     for (let index = stateCardsElements.length - 1; index >= 0; index--) {

  //         if (goneU == true) {
  //             if (debugOrTest == true) {
  //                 // console.log("goneU");
  //             }

  //             if ((stateCardsElements[index] == false) && (stateAsidesElements[index] == false)) {

  //                 cardsElements = document.querySelectorAll(".headerCcards");
  //                 asideElements = document.querySelectorAll(".headerCasides");

  //                 //BUG: debug! :|
  //                 if (debugOrTest == true) {
  //                     // console.log(cardsElements);
  //                     // console.log(asideElements);
  //                 }

  //                 cardsElements[index].classList.remove("shrinkCcards")
  //                 cardsElements[index].style.top = "unset";
  //                 // cardsElements[index].style.position = "sticky";

  //                 asideElements[index].classList.remove("shrinkCasides")
  //                 asideElements[index].style.top = "unset";

  //                 contentElement.appendChild(cardsElements[index]);

  //                 contentElement.appendChild(asideElements[index]);

  //                 stateCardsElements[index] = true;

  //                 stateAsidesElements[index] = true;

  //                 if (debugOrTest == true) {
  //                     // console.assert(cardsElement.firstChild, true, console.log(cardsElement.children));
  //                     // console.log(stateCardsElements[index]);
  //                     // console.log(stateAsidesElements[index]);
  //                 }

  //                 stateSum = -50;
  //                 break;
  //             }

  //         }
  //     }
  // }

  // if ((stateSum * stateVarArray.length >= 401) && (stateSum * stateVarArray.length < 700)) {
  //     for (let index = 0; index < stateAsidesElements.length; index++) {
  //         if (goneD == true) {
  //             if (true) {

  //                 asideElements[index].classList.add("shrinkCasides")

  //                 // asideElement.append(asideElements(i));
  //                 if (index == stateCardsElements.length) {
  //                     asideElement.style.height = "fit-content";
  //                 } else {
  //                     asideElement.style.height = "100vh";
  //                 }
  //             }
  //         } else if (goneU = true) {
  //             if (false) {

  //             }

  //         }
  //     }

  // if (goneD == true) {

  //     if (stateSum >= 50 && stateSum <= 90) {
  //         cardsElement.appendChild(cardsElements.item(0));
  //         asideElement.appendChild(elementOneA);
  //         asideElement.style.height = "100vh";
  //         // asideElement.appendChild(elementOne);
  //         // elementOne.classList.add("holdC")
  //         elementOneC.classList.add("shrinkCcards")
  //         elementOneC.style.top = "20px";
  //         elementOneC.style.position = "fixed";

  //         elementOneA.classList.add("shrinkCasides")
  //     }
  //     if (stateSum >= 91 && stateSum <= 180) {
  //         cardsElements[0].after(cardsElements[1])
  //         asideElements[0].after(asideElements[1])
  //         asideElement.style.height = "100vh";
  //         // elementOneC.after(elementTwoC);
  //         // elementOneA.after(elementTwoA);
  //         // cardsElement.appendChild(elementTwoC);
  //         // asideElement.appendChild(elementTwoA);
  //         // asideElement.appendChild(elementTwo);
  //         // elementOne.classList.add("holdC")
  //         elementTwoC.classList.add("shrinkCcards")
  //         elementTwoC.style.top = "40px";
  //         elementTwoC.style.position = "fixed";

  //         elementTwoA.classList.add("shrinkCasides")
  //     }
  //     if (stateSum >= 190 && stateSum <= 270) {
  //         cardsElements[1].after(cardsElements[2])
  //         asideElements[1].after(asideElements[2])
  //         // cardsElement.appendChild(elementThreeC);
  //         // asideElement.appendChild(elementThreeA);
  //         asideElement.style.height = "fit-content";
  //         // asideElement.appendChild(elementThree);
  //         // elementOne.classList.add("holdC")
  //         elementThreeC.classList.add("shrinkCcards")
  //         elementThreeC.style.top = "60px";
  //         elementThreeC.style.position = "fixed";

  //         elementThreeA.classList.add("shrinkCasides")
  //     }
  // }
  // if (goneU == true) {

  //     if (scrollY <= 90 && scrollY >= 10) {
  //         // cardsElement.removeChild(elementOne);
  //         // contentElement.appendChild(elementOne);
  //         // contentElement.insertAdjacentElement(contentElement.firstChild, elementOne);
  //         elementTwoC.before(elementOneA);
  //         elementOneA.before(elementOneC);
  //         asideElement.style.height = "unset";
  //         // elementOne.classList.remove("holdC")
  //         elementOneC.style.top = "unset";
  //         elementOneC.style.position = "relative";
  //         elementOneC.classList.remove("shrinkCcards")
  //         elementOneA.classList.remove("shrinkCasides")
  //     }
  //     if (scrollY <= 190 && scrollY >= 91) {
  //         // cardsElement.removeChild(elementTwo);
  //         // contentElement.appendChild(elementTwo);
  //         // contentElement.insertAdjacentElement(contentElement.firstChild, elementTwo);
  //         elementThreeC.before(elementTwoA);
  //         elementTwoA.before(elementTwoC);
  //         // elementOne.classList.remove("holdC")
  //         elementTwoC.style.top = "unset";
  //         elementTwoC.style.position = "relative";
  //         elementTwoC.classList.remove("shrinkCcards")
  //         elementTwoA.classList.remove("shrinkCasides")
  //     }
  //     if (stateSum <= 270 && stateSum >= 191) {
  //         // cardsElement.removeChild(elementThree);
  //         contentElement.appendChild(elementThreeA);
  //         elementThreeA.before(elementThreeC);
  //         // contentElement.insertAdjacentElement(contentElement.firstChild, elementThree);
  //         // elementFour.before(elementThree);
  //         // elementOne.classList.remove("holdC")

  //         elementThreeC.style.top = "unset";
  //         elementThreeC.style.position = "relative";
  //         elementThreeC.classList.remove("shrinkCcards")
  //         elementThreeA.classList.remove("shrinkCasides")
  //     }
  // }
}
