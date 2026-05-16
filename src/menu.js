export default function loadMenu() {
  const content = document.getElementById("content");

  const page = document.createElement("div");
  page.classList.add("page");

  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  const burger = document.createElement("div");
  burger.classList.add("menu-item");
  burger.textContent = "Classic Burger — $10";

  const pizza = document.createElement("div");
  pizza.classList.add("menu-item");
  pizza.textContent = "Wood Fired Pizza — $15";

  const pasta = document.createElement("div");
  pasta.classList.add("menu-item");
  pasta.textContent = "Creamy Alfredo Pasta — $13";

  page.appendChild(heading);
  page.appendChild(burger);
  page.appendChild(pizza);
  page.appendChild(pasta);

  content.appendChild(page);
}