export const aboutPage = (container) => {
  const header = document.createElement('h2')
  header.textContent = 'About us'
  container.appendChild(header)
  const description = document.createElement('p')
  description.textContent = 'We make delicious wings!'
  container.appendChild(description)
}