export default function loadContact() {
  const content = document.getElementById("content");

  const contactDiv = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "Phone: 555-555-5555";

  const email = document.createElement("p");
  email.textContent = "Email: restaurant@email.com";

  contactDiv.appendChild(heading);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(email);

  content.appendChild(contactDiv);
}