const url = "https://broomfactory.github.io/wdd230/chamber/data/data.json";

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
    const cards = document.querySelector('div.cards'); // select the output container element
    
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
        card.appendChild(address);

        let phone = document.createElement('p');
        phone.textContent = formatPhone(member.phone);
        card.appendChild(phone);
        
        let siteurl = document.createElement('p');
        siteurl.innerHTML = `<a href="${member.websiteurl}">${member.websiteurl}</a>`;
        siteurl.classList.toggle('wrap');
        card.appendChild(siteurl);
  


        cards.appendChild(card);


    })
} 


getDirectory();