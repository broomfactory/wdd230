const dataurl = "https://broomfactory.github.io/wdd230/chamber/data/data.json";


async function getDirectory() {
    const response = await fetch(dataurl);
    const directoryData = await response.json();
    //console.table(directoryData.directory);
    const silverandgold = directoryData.directory.filter(bus => Number(bus.membershiplevel) <= 1);

    buildDirectory(silverandgold);
}

function formatPhone(digits) {
    let nums = digits.replace(/\D/g, "")
    return `(${nums.substring(0,3)}) ${nums.substring(3,6)}-${nums.substring(6,10)}`;
}

const buildDirectory = (members) => {
    const spotlight = document.querySelector("#spotlight");

    const randarray = members.sort(() => 0.5 - Math.random());
    spotlights = randarray.slice(0,3);

    spotlights.forEach((member) => {
        
        let div = document.createElement('div');
        
        let h2 = document.createElement('h2');
        h2.textContent = member.businessname;
        div.appendChild(h2);
        
        let logo = document.createElement('img');
        logo.setAttribute('src',member.imageurl);
        logo.setAttribute('alt',`${member.businessname} logo`);
        logo.setAttribute('width','200');
        div.appendChild(logo);

        let address = document.createElement('p');
        address.textContent = `${member.address1.trim()} ${member.address2.trim()} ${member.city.trim()} ${member.state.trim()} ${member.zipcode.trim()}`;
        address.classList.add('address');
        div.appendChild(address);

        let phone = document.createElement('p');
        phone.textContent = formatPhone(member.phone);
        phone.classList.add('phone');
        div.appendChild(phone);
        
        let siteurl = document.createElement('p');
        siteurl.innerHTML = `<a href="${member.websiteurl}">${member.websiteurl}</a>`;
        siteurl.classList.toggle('wrap');
        siteurl.classList.add('url');
        div.appendChild(siteurl);
  


        spotlight.appendChild(div);


    })
} 

getDirectory();

