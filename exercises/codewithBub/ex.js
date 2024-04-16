const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerText
.split(' ')
.map(word => word.length > 8 ? `<span style="background-color: yellow">${word}</span>`:`<span style="color: #7fb174">${word}</span>`)
.join(' ');

/* ex2 
 Add a link back to the source of the text after the paragraph tag.
 (https://forcemipsum.com/)
*/
const link = document.createElement('a');
link.href = 'https://forcemipsum.com/';
link.innerText = 'Text generated from Forcem Ipsum';
document.body.appendChild(link);