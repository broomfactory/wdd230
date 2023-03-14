const url = "https://broomfactory.github.io/wdd230/chamber/directory.json";

async function getDirectory() {
    const response = await fetch(url);
    const directoryData = await response.json();
    //console.table(directoryData.directory);
    buildDirectory(directoryData.directory);
}

function formatPhone(digits) {
    let nums = digits.replace(/\D/g, "")
    return `(${nums.substring(0,2)})${nums.substring(3,5)}-${nums.substring(6,9)}`;
}

const buildDirectory = (members) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    members.forEach((member) => {
      
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let siteurl = document.createElement('p');
        

        h2.textContent = member.businessname;
        logo.setAttribute('src',member.imageurl);
        logo.setAttribute('alt',`${member.businessname} logo`);
        logo.setAttribute('width','200');

        address.textContent = `${member.address1.trim()} ${member.address2.trim()} ${member.city.trim()} ${member.state.trim()} ${member.zipcode.trim()}`;
      
        siteurl.innerHTML = `<a href="${member.websiteurl}">${member.websiteurl}</a>`;

        card.appendChild(h2);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(siteurl);

        cards.appendChild(card);


    })
} 


getDirectory();