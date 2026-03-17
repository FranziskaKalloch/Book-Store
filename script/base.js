// •Bücher aus books rendern
//• HTML-Template-Funktion erstellt
//• Kommentare pro Buch rendern
//• neue Kommentare hinzufügt
//• Like-Funktion gebaut
//• Herzfarbe abhängig von liked
//• Likes hoch/runter zählen

function init() {
  renderBooks();
}

function renderBooks() {
  document.getElementById('content').innerHTML = '';

  for (let index = 0; index < books.length; index++) {
    let book = books[index];
    bookTemplate(book, index);
  }
}

function setLike(index) {
  let isBookLiked = books[index].liked; // Wert wird in der Variable gespeichert (True oder False)

  if (isBookLiked === false) {
    books[index].liked = true;
    books[index].likes++;
  } else {
    books[index].liked = false;
    books[index].likes--;
  }

  renderLikes(index);
}
// False ist zu True geworden
// und 5 ist auf 6 gegangen

function renderLikes(index) {
  if (books[index].liked === false) {
    document.getElementById(`icon${index}`).src = './assets/icon/heart.svg';
  } else {
    document.getElementById(`icon${index}`).src = './assets/icon/heart-filled.svg';
  }
  // Zahl ändern
  document.getElementById(`likes${index}`).innerHTML = books[index].likes;
}
