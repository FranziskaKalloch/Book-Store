function bookTemplate(book) {
  document.getElementById('content').innerHTML += ` 

      <section class="book-card">
        <h2 class="book-title">${book.title}</h2>

        <div class="book-img-container">
          <img src="./assets/img/dracula.jpeg" class="book-image" alt="Cover von Dracule - Die Wiederkehr" />
        </div>

        <div class="book-info">
          <span class="book-price">${book.price} €</span>
          <button class="like-button" type="button">
            <img src="./assets/icon/Heart--Streamline-Flex.svg" alt="Like Icon" />
          </button>
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
            <button>Send</button>
          </div>
        </div>
      </section>
      `;
}
