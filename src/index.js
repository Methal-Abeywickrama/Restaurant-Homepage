import "./styles.css";
import { homePage } from "./pages/home.js";
import { aboutPage } from "./pages/about.js";
import { menu } from "./pages/menu.js";

const container = document.getElementById('content')
console.log('hello ordinint')
homePage(container)
const homeButton = document.getElementById('Home')
const menuButton = document.getElementById('Menu')
const aboutButton = document.getElementById('About')

homeButton.addEventListener('click', () => {
  container.replaceChildren()
  homePage(container)
})
menuButton.addEventListener('click', () => {
  container.replaceChildren()
  menu(container)
})
aboutButton.addEventListener('click', () => {
  container.replaceChildren()
  aboutPage(container)
})


// homePage(container)
// menu(container)


