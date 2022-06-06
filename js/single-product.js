const browserUrl = window.location.search;
const urlParams = new URLSearchParams(browserUrl);
const id = urlParams.get("id");

// fetching the data

const urlBooks = `http://mnowak.dk/wp-mindspace/wp-json/wp/v2/book/` + id + "?_embed";

console.log(urlBooks);

fetch(urlBooks)
    .then(function(res) {
        return res.json();
    })
    
    .then(function(data) {
        dataReceived(data);
})


function dataReceived(data) {
    data.forEach(showProduct);
}

function showProduct() {

}