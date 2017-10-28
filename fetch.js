const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';

const createNode = (element) => {
  return document.createElement(element)
}

const append = (parent, el) => {
  return parent.appendChild(el);
}

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let authors = data.results;
    return authors.map((author) => {
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = author.picture.medium;
      span.innerHTML = `${author.name.first} ${author.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    })
  })
  .catch((err) => {
    console.log(err)
  })