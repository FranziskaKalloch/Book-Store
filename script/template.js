function bookTemplate(book) {
  document.getElementById('content').innerHTML += ` 
<div class="display-flex">
      <section class="book-card">
        <h2 class="book-title">${book.title}</h2>

        <div class="book-img-container">
          <img src="${book.image}" class="book-image">
        </div>

        <div class="book-info">
          <span class="book-price">${book.price} €</span>
          <div class="like-container">
            <span>${book.likes}</span> 
            <button class="like-button" type="button" onclick="likes()">
                <img id="icon" src="./assets/icon/Heart--Streamline-Flex.svg" alt="Like Icon" />
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
            <div class="single-comment"><strong>[UserName]</strong> UserText</div>
          </div>

          <div class="form">
            <input type="text" placeholder="Schreibe ein Kommentar..." />
            <button class="btn">Send</button>
          </div>
        </div>
      </section>
      `;
}
