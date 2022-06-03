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

    bookClone.querySelector("h3.title").textContent = books.title.rendered;

    bookClone.querySelector(".author").textContent = books.book_author;

    if (books.printed == 1) {
        bookClone.querySelector(".book-icon").src = 'http://mnowak.dk/forlagetmindspace/assets/icons/book-active.svg';
        bookClone.querySelector(".ebook-icon").src = 'http://mnowak.dk/forlagetmindspace/assets/icons/ebook.svg';
        bookClone.querySelector(".price").textContent = "DKK " + books.price;
    } else {
        bookClone.querySelector(".ebook-icon").src = 'http://mnowak.dk/forlagetmindspace/assets/icons/ebook-active.svg';
        bookClone.querySelector(".book-icon").src = 'http://mnowak.dk/forlagetmindspace/assets/icons/book.svg';
        bookClone.querySelector(".price").textContent = "DKK " + books.ebook_price;
    }

    bookClone.querySelector(".author").textContent = books.book_author;

    bookClone.querySelector(".product-link").href = ''

    bookClone.querySelector(".ebook-icon").addEventListener("click", ebookActive)
    
    function ebookActive() {
        bookClone.querySelector("img.ebook-icon").src = "http://mnowak.dk/forlagetmindspace/assets/icons/ebook-active.svg";
        bookClone.querySelector("img.book-icon").src = "http://mnowak.dk/forlagetmindspace/assets/icons/book.svg";
        bookClone.querySelector(".price").textContent = "DKK " + books.ebook_price;
    }

    bookClone.querySelector(".book-icon").addEventListener("click", bookActive)

    function bookActive() {
        bookClone.querySelector("img.book-icon").src = 'http://mnowak.dk/forlagetmindspace/assets/icons/book-active.svg';
        bookClone.querySelector("img.ebook-icon").src = "http://mnowak.dk/forlagetmindspace/assets/icons/ebook.svg";
        bookClone.querySelector(".price").textContent = "DKK " + books.price;
    }

    document.querySelector(".all-products").appendChild(bookClone);

}
