// Aufbau Objekt im Array

// Das Datenmodell sollte alles enthalten, was deine Oberfläche später verändern oder anzeigen möchte.

// image: './assets/img/dracula.jpeg'
// Deine Buchkarte zeigt ein Cover.
// Das Bild gehört also logisch zum Buch selbst.
// Wenn dein Rendering-Code später durch das Array läuft, kann er einfach sagen: nimm das Bild, das im Buchobjekt steht.
// Ohne dieses Feld müsste dein Code irgendwo anders erraten, welches Bild zu welchem Buch gehört.

//likes: 0
//Das ist einfach der Zähler. Wenn jemand das Herz klickt, wird diese Zahl erhöht oder reduziert.
// Das Objekt speichert also den aktuellen Zustand des Buchs.

//liked: false
//Das ist ein kleiner, aber wichtiger Unterschied zum Zähler.
// Diese Variable merkt sich, ob der aktuelle Zustand geliked ist oder nicht.
// Stell dir vor, jemand klickt das Herz zweimal. Beim ersten Klick soll der Like hochgehen, beim zweiten wieder runter.
// Der Code kann das nur entscheiden, wenn er weiß, ob das Buch gerade schon geliked ist.

//comments: []
//Kommentare sind eine Liste, keine einzelne Sache. Deshalb ist es ein Array.
// Wenn jemand einen Kommentar schreibt, wird einfach ein neuer Eintrag in dieses Array gelegt.
// Später kann dein Code dann durch dieses Array laufen und alle Kommentare rendern.

comments: [
  {
    name: 'Max',
    text: 'Mega Buch',
  },
  {
    name: 'Moritz',
    text: 'Hat sehr viel Spaß gemacht',
  },
];

// Comments muss ein array sein, damit wir mehree Kommentare speichern können

// Dein Inputfeld spielt später nur eine Rolle beim Hinzufügen eines neuen Kommentars. Der Ablauf wird ungefähr so sein:
//Der Benutzer schreibt etwas ins Inputfeld →
// dein Code liest den Text aus → dein Code erstellt ein neues Kommentarobjekt →
// dieses Objekt wird ins comments-Array gelegt.

/// Funktionen + Parameter
// ---> Funktionen sind kleine Maschinen, die Input bekommen und Output generieren!

function greet(name) {
  return 'hallo' + name;
}
// name ist ein Platzhalter
// der echte Wert wird im Funktionaufruf eingefügt!
greet('Franzy');

function doubleNumber(number) {
  return number * 2;
}
doubleNumber(8);

function fullName(first, last) {
  return first + ' ' + last;
}

fullName('Franziska', 'Kalloch');

////

function renderBooks() {
  document.getElementById('content').innerHTML = '';

  for (let index = 0; index < books.length; index++) {
    let singleBook = books[index];
    bookTemplate(`${book}`); // das funktioniert nicht, da es ein Objekt ist.
    // Abändern zu ---> bookTemplate(book);
  }
}
//Template-String
//→ aber book ist ein Objekt
//→ Ergebnis: [object Object] (nutzlos)
// -> das richtige bookTemplate(singleBook);
// → du übergibst das echte Objekt

// ${books} ist das ganze Objekt
// (let) singleBook ist jedes einzelne Buch aus dem JSON ARRAY

bookTemplate(singleBook);

// Schleife
// Durchlauf 1
// singleBook = books[0]; // erstes Buch
//// Durchlauf 2
// singleBook = books[1]; // zweites Buch
// Du hast also pro Durchlauf:
//👉 ein einzelnes Buch
//Und dieses gibst du weiter: bookTemplate(singleBook);

// Hiermit ist die Ausgabe Object Object

function bookTemplate(book) {
  document.getElementById('content').innerHTML += ` 

<section class="book-card">
<h2 class="book-title">${book}</h2>
...`;
}

// → JavaScript denkt:
//„Okay, du willst das ganze Objekt als Text… viel Spaß“

//→ [object Object]
// ${book.title}
//${book.image}

// LIKE likeCounter
// Beim Klick auf ❤️:
//	•	Likes erhöhen / verringern
//	•	Zustand speichern (liked)
//	•	UI aktualisieren

// Ich möchte die Anzahl der likes im books Array erhöhen
// die Funktion sollte auf das book Array zugreifen können, passend zu
// dem Buch, wo geliked wurde
// ----> das heisst man müsste der Funktion einen Index mitgeben, der zum Buch passt
// ---> also function like(index) {
// Beim erste BUch wäre es 0, beim zweiten Buch 1
//}
// Im array books an der stelle 0 die Eigenschaft likes zu verändern:
// -> books[index].likes = den gleichen Wert + 1 rechnen, also
// ------> books[0].likes = books[0].like + 1

// Damit wir der Wert links überschrieben

// danach muss diese Stelle neu gerendert werden.

function addComment(index) {
  let userName = ['User234', 'Sansa', 'Daenery', 'Jon Snow', 'Arya', 'Brienne', 'User54'];
  let inputRef = document.getElementById(`input${index}`);
  let comment = inputRef.value;

  let randomIndex = Math.floor(Math.random() * userName.length);
  let randomName = userName[randomIndex];

  let newComment = {
    userName: randomName,
    userText: comment,
  };

  books[index].comments.push(newComment);

  inputRef.value = '';

  renderBooks();
}

// Erläuterung --- Nimm alle Kommentare und mach daraus einen großen HTML String!

function getCommentsHtml(bookIndex) {
  // Die Funktion bekommt: bookIndex -> welches Buch: 0,1,2,..
  let commentsHtml = ''; // Leerer Start - Am Anfang soll alles leer sein, danach wird alles an HTML hier reingepackt

  for (let i = 0; i < books[bookIndex].comments.length; i++) {
    // Schleife durch die Kommentare -> geh durch alle Kommentare dieses Buches!
    let comment = books[bookIndex].comments[i]; // Hier werden die einzelnen Kommentare geholt

    commentsHtml += `  
      <div class="single-comment">
        <strong>${comment.userName}</strong> ${comment.userText}
      </div>
    `; // Hier wird das HTML gebaut und angefügt
  }
  return commentsHtml; // gib mir das fertige HTML zurück
}

// mit let commentHtml bereiten wir das HTML vor. Es wird aber erstmal Text zusammen gebaut und dann später dieser Container genutzt!
// Diese Funktion soll allgemein nur etwas ZURÜCKGEBEN und nicht wie viele andere Funktionen was anzeigen!
// let commentHtml = ''; -> heisst einfach nur, das ist eine leere Variable! Es wird nichts im DOM gelöscht.
// innerHTML = ''; // löscht echte HTML Inhalte
// let x = ''; erstellt nur eine leere Variable!

// Warum wird hier return benutzt?
// ----> die function getCommentHTML(bookIndex):
// input --> bookIndex
// output --> fertiger HTML String
// Ohne return würde hier nichts zurückgegeben werden und es steht undefined

// Warum ${getCommentsHtml(index)}?
//

// LOCAL STORAGE

// speichern (setItem) ---> localStorage.setItem('key, 'value');
// abrufen (getItem) --->  let data = localStorage.getItem('key');

// Nur Strings können gespeichert werden:
// Für Objekte und Array muss ------> JSON.stringify() beim Speichern und JSON.parse beim Auslesen verwendet werden

// Templates auslagern

function getCommentsHtml(bookIndex) {
  let commentsHtml = '';

  for (let i = 0; i < books[bookIndex].comments.length; i++) {
    let comment = books[bookIndex].comments[i];

    commentsHtml += commentsTemplate(comment);
  }

  if (books[bookIndex].comments.length == 0) {
    return noComment();
  }

  return commentsHtml;
}

function commentsTemplate(comment) {
  return `<div class="single-comment">
        <strong>${comment.userName}</strong> ${comment.userText}
      </div>
    `;
}

function noComment() {
  return `<div class="no-comment">
        <strong>Keine Kommentare</strong>
      </div>`;
}

// 	•	getCommentsHtml() sammelt alles zusammen
//	•	commentsTemplate(comment) baut einen Kommentar
