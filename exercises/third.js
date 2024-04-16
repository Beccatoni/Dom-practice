// adding elements to the page

const body = document.body;
body.append('') //append : for strings and append child  for divs ps ...

const div = document.createElement('div')
const strong = document.createElement('strong')
strong.innerText = 'Hello here!'
div.append(strong)
body.append(div)

console.log(div.innerText);
console.log(div.textContent);