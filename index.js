function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
  let findBooks = fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
  return findBooks
}


function renderBooks(findBooks) {
  const main = document.querySelector('main')
  findBooks.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})