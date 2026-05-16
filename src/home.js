export default function loadHome() {
  const content = document.getElementById("content");

  const page = document.createElement("div");
  page.classList.add("page");

  const heading = document.createElement("h1");
  heading.textContent = "Odin Restaurant";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Experience incredible food made fresh every day.";

  page.appendChild(heading);
  page.appendChild(paragraph);

  content.appendChild(page);
}