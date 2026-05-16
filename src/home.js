export default function loadHome() {
  const content = document.getElementById("content");

  const homeDiv = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Odin Restaurant";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "The best food in town made with fresh ingredients.";

  homeDiv.appendChild(heading);
  homeDiv.appendChild(paragraph);

  content.appendChild(homeDiv);
}