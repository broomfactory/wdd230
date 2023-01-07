const copyrightSpan = document.querySelector("#copyright");
const d = new Date();
const year = d.getFullYear();

copyrightSpan.textContent = `${year}`;

const modifiedSpan = document.querySelector("#modifiedDate");
const dateLastModified = document.lastModified;

const lastModifiedText = `Last Updated: ${dateLastModified}`;
modifiedSpan.textContent = lastModifiedText;    
