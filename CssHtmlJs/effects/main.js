
// --------------------------------------------------------------------------------
/// <summary>
/// *.*
/// project
/// created by Mehrdad Soleimanimajd on 15.04.2023
/// </summary>
/// <created>ʆϒʅ, 15.04.2023</created>
/// <changed>ʆϒʅ, 22.04.2023</changed>
// --------------------------------------------------------------------------------

let stateVar = 1;

let goneD = false;
let goneU = false;

function scrolled() {

    console.log(stateVar);
    console.log(goneD);
    console.log(goneU);
    console.log(scrollX);
    console.log(scrollY);

    let elementOneN = document.getElementById("OneN");
    let elementTwoN = document.getElementById("TwoN");
    let elementThreeN = document.getElementById("ThreeN");

    let elementOneA = document.getElementById("OneA");
    let elementTwoA = document.getElementById("TwoA");
    let elementThreeA = document.getElementById("ThreeA");

    let navElement = document.getElementById("navOne");
    let asideElement = document.getElementById("asideOne");
    let contentElement = document.getElementById("contentOne");

    // let textCElement = document.querySelector(".textC");

    let navElements = document.querySelectorAll(".headerCnav");
    let asideElements = document.querySelectorAll(".headerCaside");
    console.log(navElements);

    if (stateVar > scrollY) {
        goneU = true;
    } else {
        goneU = false;
    }
    if (stateVar < scrollY) {
        goneD = true;
    } else {
        goneD = false;
    }

    if (goneD == true) {
        //TODO: reconstruct to arrays and states

        if (scrollY >= 100 && scrollY <= 200) {
            navElement.appendChild(navElements.item(0));
            asideElement.appendChild(elementOneA);
            // asideElement.appendChild(elementOne);
            // elementOne.classList.add("holdC")
            elementOneN.classList.add("shrinkCnav")
            elementOneN.style.top="20px";
            elementOneN.style.position="fixed";

            elementOneA.classList.add("shrinkCaside")
        }
        if (scrollY >= 200 && scrollY <= 300) {
            navElement.appendChild(elementTwoN);
            asideElement.appendChild(elementTwoA);
            // asideElement.appendChild(elementTwo);
            // elementOne.classList.add("holdC")
            elementTwoN.classList.add("shrinkCnav")
            elementTwoN.style.top="40px";
            elementTwoN.style.position="fixed";

            elementTwoA.classList.add("shrinkCaside")
        }
        if (scrollY >= 300 /* && scrollY <= 400 */) {
            navElement.appendChild(elementThreeN);
            asideElement.appendChild(elementThreeA);
            // asideElement.appendChild(elementThree);
            // elementOne.classList.add("holdC")
            elementThreeN.classList.add("shrinkCnav")
            elementThreeN.style.top="60px";
            elementThreeN.style.position="fixed";

            elementThreeA.classList.add("shrinkCaside")
        }
    }
    if (goneU == true) {

        if (scrollY <= 100 && scrollY >= -10) {
            // navElement.removeChild(elementOne);
            // contentElement.appendChild(elementOne);
            // contentElement.insertAdjacentElement(contentElement.firstChild, elementOne);
            elementTwoN.before(elementOneA);
            elementOneA.before(elementOneN);
            // elementOne.classList.remove("holdC")
            elementOneN.style.top="unset";
            elementOneN.style.position="relative";
            elementOneN.classList.remove("shrinkCnav")
            elementOneA.classList.remove("shrinkCaside")
        }
        if (scrollY <= 200 && scrollY >= 100) {
            // navElement.removeChild(elementTwo);
            // contentElement.appendChild(elementTwo);
            // contentElement.insertAdjacentElement(contentElement.firstChild, elementTwo);
            elementThreeN.before(elementTwoA);
            elementTwoA.before(elementTwoN);
            // elementOne.classList.remove("holdC")
            elementTwoN.style.top="unset";
            elementTwoN.style.position="relative";
            elementTwoN.classList.remove("shrinkCnav")
            elementTwoA.classList.remove("shrinkCaside")
        }
        if (scrollY <= 300 && scrollY >= 200) {
            // navElement.removeChild(elementThree);
            contentElement.appendChild(elementThreeA);
            elementThreeA.before(elementThreeN);
            // contentElement.insertAdjacentElement(contentElement.firstChild, elementThree);
            // elementFour.before(elementThree);
            // elementOne.classList.remove("holdC")

            elementThreeN.style.top="unset";
            elementThreeN.style.position="relative";
            elementThreeN.classList.remove("shrinkCnav")
            elementThreeA.classList.remove("shrinkCaside")
        }
    }
    stateVar = scrollY;
}
