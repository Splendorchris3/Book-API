let input = document.getElementById("input");
let main = document.getElementById("main");
let facebookIcon = document.getElementById("facebook-icon");
let twitterIcon = document.getElementById("twitter-icon");
let instagramIcon = document.getElementById("instagram-icon");

function searchBook() {
  event.preventDefault();
  let api = `https://www.googleapis.com/books/v1/volumes?q=${input.value}`;
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      main.innerText = "";
      let item = data.items;
      item.map((book) => {
        let books = document.createElement("div");
        let boo = `
        <div class="books">
        <img src='${book.volumeInfo.imageLinks.thumbnail}' />
        <p>${book.volumeInfo.title} </p>
        <a href="${book.volumeInfo.infoLink}" target="_blank">Know More...</a>
   <a href="${book.volumeInfo.previewLink}" target="_blank">Read Book</a>
        </div>`;
        books.innerHTML = boo;
        main.appendChild(books);
        console.log(book.volumeInfo.title);
      });
    })

    .catch((err) => alert("error"));

  input.value = "";
}

function redirectToFacebook() {
  
  
  let facebookLink = document.createElement("a");
 
  facebookLink.href = "https://www.facebook.com/profile.php?id=100081341208797";
 
  facebookLink.target = "_blank";
  
  facebookLink.innerHTML =
    '<i  class="bi bi-facebook" style="color: blue"></i>';
 

  facebookIcon.parentNode.replaceChild(facebookLink, facebookIcon);
 
  window.location.href =
    "https://www.facebook.com/profile.php?id=100081341208797";
 
}


function Twitter() {
 
  
 
  let twitterLink = document.createElement("a");
 
  twitterLink.href = "https://twitter.com/centsplendor3?t=UWqbHihMR0bHyiX80xNkDg&s=09";
  
  twitterLink.target = "_blank";
 
  twitterLink.innerHTML =
    '<i class="bi bi-twitter" style="color: blue"></i>';

  
  twitterIcon.parentNode.replaceChild(twitterLink, twitterIcon);

  
  window.location.href =
    "https://twitter.com/centsplendor3?t=UWqbHihMR0bHyiX80xNkDg&s=09";
}


function Instagram() {

let instagramLink = document.createElement("a");
instagramLink.href =
  "https://instagram.com/splendor_chris3?igshid=NTc4MTIwNjQ2YQ==";

instagramLink.target = "_blank";

 instagramLink.innerHTML = '<i class="bi bi-instagram" style="color: purple"></i>';

instagramIcon.parentNode.replaceChild(instagramLink, instagramIcon);

 window.location.href =
   "https://instagram.com/splendor_chris3?igshid=NTc4MTIwNjQ2YQ==";
}
