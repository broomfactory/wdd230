function toggleMenu() {
    document.getElementById("hamburger").classList.toggle("open");
    document.getElementById("navmenu").classList.toggle("open");
}

document.getElementById("hamburger").onclick = toggleMenu;

const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

document.getElementById("currentdate").innerHTML = `<em>${fulldate}</em>`;
