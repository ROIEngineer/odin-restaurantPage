export default function loadContact() {
  const content = document.getElementById("content");

  const page = document.createElement("div");
  page.classList.add("page");

  const heading = document.createElement("h1");
  heading.textContent = "Contact";

  const phone = document.createElement("p");
  phone.textContent = "Phone: (555) 555-5555";

  const email = document.createElement("p");
  email.textContent = "Email: hello@odinrestaurant.com";

  const address = document.createElement("p");
  address.textContent = "123 Odin Street, Valhalla";

  page.appendChild(heading);
  page.appendChild(phone);
  page.appendChild(email);
  page.appendChild(address);

  content.appendChild(page);
}