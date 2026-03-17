// •Bücher aus books rendern
//• HTML-Template-Funktion erstellt
//• Kommentare pro Buch rendern
//• neue Kommentare hinzufügt
//• Like-Funktion gebaut
//• Herzfarbe abhängig von liked
//• Likes hoch/runter zählen

currentBook = 0;

function init() {
  renderBooks();
}

// durch das array gehen
// für jedes Buch HTML erzeugen
// alles ins DOM schreiben
// HTML Code in andere Funktion aussortieren

function renderBooks() {
  document.getElementById('content').innerHTML = '';

  for (let index = 0; index < books.length; index++) {
    let book = books[index];
    bookTemplate(book);
  }
}
