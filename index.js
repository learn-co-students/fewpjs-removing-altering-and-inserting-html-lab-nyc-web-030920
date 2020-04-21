const main = document.querySelector('#main')
main.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "Kelly is the champion"
const body = document.querySelector('body')
body.appendChild(newHeader)