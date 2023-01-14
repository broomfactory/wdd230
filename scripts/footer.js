const copyrightSpan = document.querySelector("#copyright");
copyrightSpan.textContent = `${new Date().getFullYear()}`;

const modifiedSpan = document.querySelector("#modifiedDate");
modifiedSpan.textContent = `Last Updated: ${documnet.lastModified}`;
