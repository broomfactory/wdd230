function toggleMenu() {
    document.getElementById("hamburger").classList.toggle("open");
    document.getElementById("navmenu").classList.toggle("open");
}

document.getElementById("hamburger").onclick = toggleMenu;

const copyrightSpan = document.getElementById("copyrightyear");
copyrightSpan.textContent = `©${new Date().getFullYear()}`;

const modifiedSpan = document.getElementById("lastmodified");
modifiedSpan.textContent = `Last Updated: ${document.lastModified}`;