const addButton = document.querySelector("main button");
const listChapter = document.getElementById("list");
const inputChapter = document.getElementById("favchap");

addButton.addEventListener("click", function() {

    const chapterText = inputChapter.value;

    if (chapterText != "") {
        
        li = document.createElement("li");
        li.innerText = chapterText;

        del = document.createElement("button");
        del.addEventListener("click", function() { this.parentNode.remove(); });
        del.innerText = "❌";
        del.classList.add("delete");

        li.appendChild(del);

        listChapter.appendChild(li);

        inputChapter.value = "";
        inputChapter.focus();

    }
});

inputChapter.focus();
inputChapter.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.querySelector("main button").click();
    }
})
