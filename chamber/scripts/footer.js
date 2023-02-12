const copyrightSpan = document.getElementById("copyrightyear");
copyrightSpan.textContent = `©${new Date().getFullYear()}`;

const modifiedSpan = document.getElementById("lastmodified");
modifiedSpan.textContent = `Last Updated: ${document.lastModified}`;
