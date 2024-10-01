export const menu = (container) => {
  
  const heading = document.createElement('h1')
  heading.textContent = 'This is our menu'
  const menuList = document.createElement('ul')
  const items = [
    'macwings',
    'spicy mac wings',
    'mild wings'
  ]
  items.forEach((item) => {
    const element = document.createElement('li')
    element.textContent = item 
    menuList.appendChild(element)
  }
)
container.appendChild(heading)
container.appendChild(menuList)
}