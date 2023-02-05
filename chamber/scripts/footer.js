const copyrightSpan = document.getElementById("copyrightyear");
copyrightSpan.textContent = `©${new Date().getFullYear()}`;

const modifiedSpan = document.getElementById("lastmodified");
modifiedSpan.textContent = `Last Updated: ${document.lastModified}`;

/* Display top banner on Monday and Tuesday */

const day = new Date().getDay();
if (day === 1 || day === 2 ) {
    document.getElementById("topbanner").classList.add("show");
}