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
    bookTemplate(book);
  }
}

//function likes() {
// let button = books[index].liked;

// if (button === false) {
//   ((document.getElementById('icon').src = './assets/icon/heart-filled.svg'), (books[index].likes = books[index].like + 1));
//}
//}
