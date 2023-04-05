const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const btn = document.querySelector("#placeorder");
let FruitData;

const orderForm = document.querySelector("#orderform");

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    FruitData = data;
    loadFruits(data);
}
 
const loadFruits = (data) => {
    const fruit1 = document.querySelector('#fruit1');
    const fruit2 = document.querySelector('#fruit2');
    const fruit3 = document.querySelector('#fruit3');
      
    data.forEach((fruit) => {
      let fruitName = fruit.name;
      fruitOption1 = document.createElement('option');
      fruitOption1.setAttribute("value",fruitName);
      fruitOption1.textContent = fruitName;
      fruitOption2 = document.createElement('option');
      fruitOption2.setAttribute("value",fruitName);
      fruitOption2.textContent = fruitName;
      fruitOption3 = document.createElement('option');
      fruitOption3.setAttribute("value",fruitName);
      fruitOption3.textContent = fruitName;
      fruit1.appendChild(fruitOption1);
      fruit2.appendChild(fruitOption2);
      fruit3.appendChild(fruitOption3);
    });
} 

function incrementSmoothieCount() {
    let smoothies = Number(window.localStorage.getItem("smoothie-count"));
    localStorage.setItem("smoothie-count",smoothies + 1);    
}

getFruitData();

orderForm.addEventListener("submit",
    (e) => {
        e.preventDefault();
        
        const divOutput = document.querySelector("#order");
        const inputFirstName = document.querySelector("#firstname");
        const inputEmail = document.querySelector("#email");
        const inputPhone = document.querySelector("#phone");
        const fruit1 = document.querySelector("#fruit1");
        const fruit2 = document.querySelector("#fruit2");
        const fruit3 = document.querySelector("#fruit3");
        const instructions = document.querySelector("#instructions");

        divOutput.innerHTML = "";

        const row = document.createElement("div");
        const now = new Date();
        row.innerHTML = `<h2>Smoothie Order Received</h2><p>${now.toString()}</p>`;
        divOutput.appendChild(row);

        const rowContact = document.createElement("div");
        const pFirstName = document.createElement("p");
        const h2Contact = document.createElement("h2");
        h2Contact.textContent = "Customer";
        rowContact.appendChild(h2Contact); 
        pFirstName.innerHTML = `Name: ${inputFirstName.value}`;
        rowContact.appendChild(pFirstName);

        const pPhone = document.createElement("p");
        pPhone.innerHTML = `Phone: ${inputPhone.value}`;
        rowContact.appendChild(pPhone);

        const pEmail = document.createElement("p");
        pEmail.innerHTML = `Email: ${inputEmail.value}`;
        rowContact.appendChild(pEmail);
        divOutput.appendChild(rowContact);

        const rowSmoothie = document.createElement("div");
        const h2Order = document.createElement("h2");
        h2Order.textContent = "Smoothie Mix";
        rowSmoothie.appendChild(h2Order);
        divOutput.appendChild(rowSmoothie);

        const rowFruit1 = document.createElement("div");
        rowFruit1.innerHTML = `<p>--> ${fruit1.value}</p>`;
        const rowFruit2 = document.createElement("div");
        rowFruit2.innerHTML = `<p>--> ${fruit2.value}</p>`;
        const rowFruit3 = document.createElement("div");
        rowFruit3.innerHTML = `<p>--> ${fruit3.value}</p>`;
        const specialInstructions = document.createElement("div");
        specialInstructions.innerHTML = `<p>${instructions.value}</p>`;
        divOutput.appendChild(rowFruit1);
        divOutput.appendChild(rowFruit2);
        divOutput.appendChild(rowFruit3);
        divOutput.appendChild(specialInstructions);

        let carbs = 0;
        let protein = 0;
        let fat = 0;
        let sugar = 0;
        let calories = 0;

        const fruits = new Array(fruit1.value, fruit2.value, fruit3.value);

        FruitData.forEach((fruit) => {
            if (fruits.includes(fruit.name)) {
                carbs += Number(fruit.nutritions.carbohydrates);
                protein += Number(fruit.nutritions.protein);
                fat += Number(fruit.nutritions.fat);
                sugar += Number(fruit.nutritions.sugar);
                calories += Number(fruit.nutritions.calories);                
            }
        });

        const rowNutrition = document.createElement("div");
        rowNutrition.innerHTML = `<h2>Nutrition Info</h2><p>Carbohydrates: ${carbs.toFixed(1)}</p><p>Protein: ${protein.toFixed(1)}</p><p>Fat: ${fat.toFixed(1)}</p><p>Sugar: ${sugar.toFixed(1)}</p><p>Calories: ${calories.toFixed(0)}</p>`;
        divOutput.appendChild(rowNutrition);

        incrementSmoothieCount();
    }



);

