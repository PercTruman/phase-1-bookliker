document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:3000/books')
    .then(res=>res.json())
    .then(bookObjects=>bookObjects.forEach(book=>renderBook(book)))
});

function renderBook(book){
    let unorderedList= document.getElementById('list')
    let titleText= book.title
    let listItem = document.createElement('li')
    listItem.innerText=titleText
    unorderedList.appendChild(listItem)

    listItem.addEventListener('click', (e)=>displayBookInfo(e))
}

function displayBookInfo(e){
    console.log(e)
}