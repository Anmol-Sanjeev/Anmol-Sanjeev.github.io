const fruits = [];

const showFruitApp = () => {
  let fruitList = fruits.map(fruit => `<li>${fruit}</li>`).join("");

  const html = `
    <h1>Fruit List</h1>
    <div class="input-row">
      <input type="text" id="fruitInput" placeholder="Enter a fruit name" />
      <button onclick="addFruit()">Add</button>
    </div>
    <ul>${fruitList}</ul>
  `;

  document.getElementById("root").innerHTML = html;
};

const addFruit = () => {
  const input = document.getElementById("fruitInput");
  const fruit = input.value.trim();

  if (fruit !== "") {
    fruits.push(fruit);
    showFruitApp(); // Re-render the UI with updated list
  }
};

showFruitApp(); // Initial render
