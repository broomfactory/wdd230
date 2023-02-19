const lastvisitdisplay = document.querySelector("#lastvisit");

let lastvisit = Number(window.localStorage.getItem("discover-last-visit"));

if (lastvisit !== 0) {
    let dayssince = (Date.now() - lastvisit) / 86400000;

    if (dayssince.toFixed(0) === "0") {
        lastvisitdisplay.textContent = "Your last visit to this page was earlier today.";
    } else {
        lastvisitdisplay.textContent = `You last visited this page ${dayssince.toFixed(0)} days ago. Welcome back!`;
    }
} else {
    lastvisitdisplay.textContent = "This is your first visit to this page. Welcome!";
}

localStorage.setItem("discover-last-visit",Date.now());