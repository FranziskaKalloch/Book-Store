function bookTemplate(book, index) {
  document.getElementById('content').innerHTML += ` 
<div class="display-flex">
      <section class="book-card">
        <h2 class="book-title">${book.title}</h2>

        <div class="book-img-container">
          <img src="${book.image}" class="book-image">
        </div>

        <div class="book-info">
          <span class="book-price">${book.price} €</span>
          <div class="like-container" id="like-container${index}">
            <span id="likes${index}">${book.likes}</span> 
            <button class="like-button" type="button" onclick="setLike(${index})">
                <img id="icon${index}" src="./assets/icon/mogen.png" />
            </button>
            </div>
        </div>

        <div class="book-facts">
          <div>
            <span><strong>Author:</strong></span>
            <span>${book.author}</span>
          </div>

          <div>
            <span><strong>Erscheinungsjahr:</strong> </span>
            <span>${book.year}</span>
          </div>

          <div>
            <span><strong>Genre</strong></span>
            <span>${book.genre}</span>
          </div>
        </div>

        <div class="comment-section">
          <div class="comment-list">
        ${getCommentsHtml(index)}
        </div>
          </div>

          <div class="form">
            <input id="input${index}" type="text" placeholder="Schreibe ein Kommentar..." />
            <button class="btn" type="button" id="addComment${index}" onclick="addComment(${index})">Send</button>
          </div>
        </div>
      </section>
      `;
}
