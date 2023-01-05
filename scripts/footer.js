const copyrightSpan = document.querySelector("#copyright");
const d = new Date();
const year = d.getFullYear();

copyrightSpan.textContent = `\u00A9 ${year} >=< Matthew Scoville`;

const modifiedSpan = document.querySelector("#modifiedDate");
const dateLastModified = document.lastModified;

const lastModifiedText = `Last Updated: ${dateLastModified}`;
modifiedSpan.textContent = lastModifiedText;    
