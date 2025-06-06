const fruits = [];

function addFruit() {
    const input = document.getElementById("fruitInput");
    const fruitName = input.value.trim();

    if (fruitName !== "") {
        fruits.push(fruitName);

        const list = document.getElementById("fruitList");
        const newItem = document.createElement("li");
        newItem.textContent = fruitName;
        list.appendChild(newItem);

        input.value = "";
    }
}
