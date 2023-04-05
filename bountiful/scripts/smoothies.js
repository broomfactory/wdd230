function getSmoothieCount() {
    return Number(window.localStorage.getItem("smoothie-count"));
}

function displaySmoothieCount() {
    const freshCaption = document.querySelector(".freshcaption");
    let smoothiecount = getSmoothieCount();
    if (smoothiecount > 0) {
        freshCaption.innerHTML = `<p>You have created ${smoothiecount} specialty drinks!</p>`;
    }
}

displaySmoothieCount();

