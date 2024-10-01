import wingsImage from '../images/image.png'

export const homePage = (container) => {
  const heading = document.createElement('h1')
  heading.textContent = 'Sexy Spicy Wings'
  const img = document.createElement('img')
  img.src = wingsImage
  const description = document.createElement('p')
  description.textContent = 'Our Spicy Chicken Wings are perfectly seasoned and coated in a mouthwatering blend of fiery spices that deliver the perfect kick with every bite. Crispy on the outside, juicy on the inside, these wings are ideal for those who love a bold, flavorful heat that lingers long after the last wing is gone!'
  container.appendChild(heading)
  container.appendChild(img)
  container.appendChild(description)
  console.log('gennign')
}