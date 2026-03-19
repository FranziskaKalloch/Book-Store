function init() {
  loadFromLocalStorage();
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
  let isBookLiked = books[index].liked;

  if (isBookLiked === false) {
    books[index].liked = true;
    books[index].likes++;
  } else {
    books[index].liked = false;
    books[index].likes--;
  }

  saveToLocalStorage();
  renderLikes(index);
}

function renderLikes(index) {
  if (books[index].liked === false) {
    document.getElementById(`icon${index}`).src = './assets/icon/mogen.png';
  } else {
    document.getElementById(`icon${index}`).src = './assets/icon/liebe.png';
  }

  document.getElementById(`likes${index}`).innerHTML = books[index].likes;
}

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

  document.getElementById(`comment${index}`).innerHTML = getCommentsHtml(index);
  saveToLocalStorage();
}

function getCommentsHtml(bookIndex) {
  let commentsHtml = '';

  for (let i = 0; i < books[bookIndex].comments.length; i++) {
    let comment = books[bookIndex].comments[i];

    commentsHtml += `
      <div class="single-comment">
        <strong>${comment.userName}</strong> ${comment.userText}
      </div>
    `;
  }

  if (books[bookIndex].comments.length == 0) {
    return `<div class="no-comment">
        <strong>Keine Kommentare</strong>
      </div>`;
  }

  return commentsHtml;
}

function saveToLocalStorage() {
  localStorage.setItem('books', JSON.stringify(books));
}

function loadFromLocalStorage() {
  let booksAsText = localStorage.getItem('books');

  if (booksAsText) {
    books = JSON.parse(booksAsText);
  }
}
