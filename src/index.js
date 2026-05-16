import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

console.log("JavaScript is running!");

function clearContent() {
  const content = document.getElementById("content");
  content.textContent = "";
}

// Initial page load
loadHome();

// Buttons
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

// Event listeners
homeBtn.addEventListener("click", () => {
  clearContent();
  loadHome();
});

menuBtn.addEventListener("click", () => {
  clearContent();
  loadMenu();
});

contactBtn.addEventListener("click", () => {
  clearContent();
  loadContact();
});