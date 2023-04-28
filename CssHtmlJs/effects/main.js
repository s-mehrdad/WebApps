
// --------------------------------------------------------------------------------
/// <summary>
/// main.js
/// WebApps effects
/// created by Mehrdad Soleimanimajd on 15.04.2023
/// </summary>
/// <created>ʆϒʅ, 15.04.2023</created>
/// <changed>ʆϒʅ, 28.04.2023</changed>
// --------------------------------------------------------------------------------

let debugTest = true;

let stateVarArray = [0];

let stateVar = 0;
let stateSum = 0;
let stateCardsElements = [];
let stateAsideElements = [];

let goneD = false;
let goneU = false;

function scrolled() {

    // if (debugTest) {
    //     console.log(scrollX);
    //     console.log(scrollY);
    // }

    let qScrolled = false;

    let elementOneC = document.getElementById("OneC");
    let elementTwoC = document.getElementById("TwoC");
    let elementThreeC = document.getElementById("ThreeC");

    let elementOneA = document.getElementById("OneA");
    let elementTwoA = document.getElementById("TwoA");
    let elementThreeA = document.getElementById("ThreeA");

    let cardsElement = document.getElementById("cardsOne");
    let asideElement = document.getElementById("asideOne");
    let contentElement = document.getElementById("contentOne");

    // let textCElement = document.querySelector(".textC");

    let cardsElements = document.querySelectorAll(".headerCcards");
    let asideElements = document.querySelectorAll(".headerCaside");

    if ((stateAsideElements.length == 0) && (stateCardsElements.length == 0)) {
        for (const element of cardsElements) {
            stateAsideElements.push(true);
            stateCardsElements.push(true);
        }

    }

    let stateRate = 0;

    if (stateVar > scrollY) {
        goneU = true;
        stateRate = stateVar - scrollY;
    } else {
        goneU = false;
    }
    if (stateVar < scrollY) {
        goneD = true;
        stateRate = scrollY - stateVar;
    } else {
        goneD = false;
    }

    stateSum += stateRate;

    if (stateSum > 3) {
        stateSum = 0;
    }
    // for (let index = 0; index < 2; index++) {
    //     console.log(index);
    // console.assert(index==0,true,console.log("AA"));
    // }

    //TODO: reconstruct to arrays and states
    //TODO: elaborated scrolling
    // how many? too big? not sort
    // for all index

    if (debugTest) {
        // console.log(stateVar);
        // console.log(stateVarArray);
        // console.log(goneD);
        // console.log(goneU);
        // console.log(cardsElements);
        // console.log(stateSum);
        // console.log(stateVarArray.length);
        console.log(stateCardsElements);
        console.log(stateAsideElements);
    }

    if ((stateSum * stateVarArray.length >= 100) && (stateSum * stateVarArray.length < 400)) {

        for (let index = 0; index < stateCardsElements.length; index++) {

            console.log(index);
            console.log("loop");
            if (goneD == true) {
                if (stateCardsElements[index] == true) {

                    if (debugTest = true) {
                        console.log(stateSum * stateVarArray.length);
                        console.log(cardsElements.length);
                        console.assert(cardsElements, true, console.log(cardsElements));
                        console.log(index);
                    }

                    let top = (20 * (i + 1));
                    cardsElements[index].classList.add("shrinkCcards")
                    // cardsElements[index].style.top = top.toString() + "px";
                    // cardsElements[index].style.position = "fixed";

                    //TODO ???
                    console.log("???");
                    stateCardsElements[index] = false;
                    console.log(stateCardsElements[index]);

                    console.assert(cardsElement.firstChild, true, console.log(cardsElement.children));
                    // cardsElement.children.add(cardsElements(index));
                    cardsElement.appendChild(cardsElements(index));
                    // let p =document.createElement("p");
                    // cardsElement.append(p);

                    break;

                } else if (goneU = true) {

                    if (stateCardsElements[index] == true) {

                        cardsElements[index].classList.remove("shrinkCcards")
                        cardsElements[index].style.top = "unset";
                        cardsElements[index].style.position = "sticky";

                        //TODO ...?
                        console.log("...?");
                        cardsElements(index - 1).before(cardsElements(index));

                        console.log("...");
                        stateCardsElements[index] = false;
                        console.log(stateCardsElements[index]);

                        // stateCardsElements[index] = true;
                    }

                }
            }
        }
    }

    // if ((stateSum * stateVarArray.length >= 401) && (stateSum * stateVarArray.length < 700)) {
    //     for (let index = 0; index < stateAsideElements.length; index++) {
    //         if (goneD == true) {
    //             if (true) {

    //                 asideElements[index].classList.add("shrinkCaside")

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

    //         elementOneA.classList.add("shrinkCaside")
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

    //         elementTwoA.classList.add("shrinkCaside")
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

    //         elementThreeA.classList.add("shrinkCaside")
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
    //         elementOneA.classList.remove("shrinkCaside")
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
    //         elementTwoA.classList.remove("shrinkCaside")
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
    //         elementThreeA.classList.remove("shrinkCaside")
    //     }
    // }
    stateVar = scrollY;
    stateVarArray.push(scrollY);
}
