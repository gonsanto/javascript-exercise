/**
 * The DOM (Document Object Model) is the central element to interact between javascript and web page.
 * DOM is an object representation of all the html elements
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 */

/**
 * You need to change the color of the html element with the id "change-my-color"
 */
export function getElementFromDomAndChangeColorToRed() {
  const changeColor = document.getElementById('change-my-color')
  changeColor.style.color = 'rgba(255, 0, 0)'
}

/**
 * You need to add two paragraphs in the div with id "add-your-elements-in-this-element".
 * The first paragraph must contain "Bonjour", the second "Toto".
 */
export function addElementsInDOM() {
  const div = document.getElementById('add-your-elements-in-this-element')
  div.innerHTML += '<p>Bonjour</p> <p>Toto</p>'
}

/**
 * You get an array of elements, and you have to add them as an HTML list inside
 * the element with id "add-list-here".
 * Each item in the list should have the background color indicated in the "color" property.
 * @param {array<{name: string, color: string}>} listElements
 */
export function addAListInDomFromAnArrayOfObjects(listElements) {
  const container = document.getElementById('add-list-here')
  container.innerHTML = `
    <ul>
      ${listElements.map((el) => {
        return `<li style="background-color: ${el.color};">${el.name}</li>`
      })}
    </ul>
  `
}
