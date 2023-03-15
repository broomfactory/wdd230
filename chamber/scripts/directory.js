const url = "https://broomfactory.github.io/wdd230/chamber/data/data.json";
const btncards = document.getElementById("dirgrid");
const btnlist = document.getElementById("dirlist");
const display = document.querySelector("article");

async function getDirectory() {
    const response = await fetch(url);
    const directoryData = await response.json();
    //console.table(directoryData.directory);
    buildDirectory(directoryData.directory);
}

function formatPhone(digits) {
    let nums = digits.replace(/\D/g, "")
    return `(${nums.substring(0,3)}) ${nums.substring(3,6)}-${nums.substring(6,10)}`;
}

const buildDirectory = (members) => {
    const cards = document.querySelector('article'); // select the output container element
    
    members.forEach((member) => {
        
        let card = document.createElement('section');
        
        let h2 = document.createElement('h2');
        h2.textContent = member.businessname;
        card.appendChild(h2);
        
        let logo = document.createElement('img');
        logo.setAttribute('src',member.imageurl);
        logo.setAttribute('alt',`${member.businessname} logo`);
        logo.setAttribute('width','200');
        card.appendChild(logo);

        let address = document.createElement('p');
        address.textContent = `${member.address1.trim()} ${member.address2.trim()} ${member.city.trim()} ${member.state.trim()} ${member.zipcode.trim()}`;
        address.classList.add('address');
        card.appendChild(address);

        let phone = document.createElement('p');
        phone.textContent = formatPhone(member.phone);
        phone.classList.add('phone');
        card.appendChild(phone);
        
        let siteurl = document.createElement('p');
        siteurl.innerHTML = `<a href="${member.websiteurl}">${member.websiteurl}</a>`;
        siteurl.classList.toggle('wrap');
        siteurl.classList.add('url');
        card.appendChild(siteurl);
  


        cards.appendChild(card);


    })
} 

btncards.addEventListener("click", () => {
    display.classList.add("cards");
    display.classList.remove("list");
});


btnlist.addEventListener("click", () => {
    display.classList.remove("cards");
    display.classList.add("list");
})


getDirectory();

