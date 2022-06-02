// fetching the data - books

let books_url = 'http://mnowak.dk/wp-mindspace/wp-json/wp/v2/book?per_page=100'

fetch(books_url)
    .then(function(res) {
        return res.json();
    })
    
    .then(function(data) {
        dataReceived(data);
})


function dataReceived(data) {
    data.forEach(showBook);
}

function showBook(books) {

    const bookTemplate = document.querySelector("#book-card-template").content;

    bookClone = bookTemplate.cloneNode(true);

    // adding data

    bookClone.querySelector("img.book-image").src = books.book_picture;

    bookClone.querySelector(".book-genre").textContent = books.genre;


    document.querySelector(".all-products").appendChild(bookClone);

}
