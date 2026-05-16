export default function loadMenu() {
  const content = document.getElementById("content");

  const menuDiv = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  const item1 = document.createElement("p");
  item1.textContent = "Burger - $10";

  const item2 = document.createElement("p");
  item2.textContent = "Pizza - $15";

  menuDiv.appendChild(heading);
  menuDiv.appendChild(item1);
  menuDiv.appendChild(item2);

  content.appendChild(menuDiv);
}