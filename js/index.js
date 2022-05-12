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

    listItem.addEventListener('click', (e)=>displayBookInfo(e,book))
}

function displayBookInfo(e, book){
   
    let displayDiv = document.getElementById('show-panel')
    let thumbnail = book.img_url
    let description=book.description
    let usersArray =book.users

   let bookPicture = document.createElement('img')
   let descriptionEl=document.createElement('h4')
   let listOfUsers = document.createElement('ul')
   
   buildUserList(usersArray)
   
    function buildUserList(usersArray){
        usersArray.forEach(user=>{
            let singleUserEl =document.createElement('li')
            singleUserEl.innerText = user.username
            listOfUsers.append(singleUserEl)
        })
    }       
       
   bookPicture.src = thumbnail
   descriptionEl.innerText = description
   
   displayDiv.append(bookPicture,descriptionEl, listOfUsers)


}

// thumbnail, description, and a list of users 