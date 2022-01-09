// grab the controller btns
const btns = document.querySelectorAll(".btn-wrapper>i");

btns.forEach((value) => {
    value.addEventListener("click", (e) => {
        let btnName = e.target.getAttribute("btnName");
        handleController(btnName);
    });
});
const allSec = document.querySelectorAll(".singlePagePart");
let index = 0;

function handleController(btnName) {
    if (btnName === "nxt") {
        if (index > allSec.length - 2) {
            index = 0;
        } else {
            index++;
        }
    } else if (btnName === "prev") {
        if (index === 0) {
            index = allSec.length - 1;
        } else {
            index--;
        }
        console.log(`after change ${index}`);
    }
    allSec.forEach((value) => value.classList.remove("show"));
    allSec[index].classList.add("show");
}
