import foodImage from "./food.jpg";

export default function homepage() {
  // Create/Access DOM elements
  const contentID = document.querySelector("#content");
  const image = document.createElement("img");
  const headline = document.createElement("h1");
  const para = document.createElement("p");

  // Add HTML values
  image.src = foodImage;
  headline.textContent = "Welcome,";
  para.textContent = "Fusing Carribean cuisine with a Spanish twist... Coming soon.";

  // Add to content ID
  contentID.appendChild(image);
  contentID.appendChild(headline);
  contentID.appendChild(para);
};
