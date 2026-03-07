import AllData from "./card-data.js";

// 1. Made for you
const madeForYou = document.getElementById("music-container");
if (madeForYou) {
  madeForYou.innerHTML = AllData.musicData.map(
    (item) => `
        <div class="music-card">
            <div class="music-card__image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="music-card__content">
                <h3 class="music-card__title">${item.title}</h3>
                <span class="music-card__badge" style="color: ${item.color}">${item.number}</span>
            </div>
            <p class="music-card__description">${item.author}</p>
        </div>
    `,
  );
}

// 2. Your top mixes
const yourTopMixes = document.getElementById("top-mixes");
if (yourTopMixes) {
  yourTopMixes.innerHTML = AllData.musicDataMix.map(
    (item) => `
        <div class="music-card">
            <div class="music-card__image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="music-card__content">
                <h3 class="music-card__title">${item.title}</h3>
                <span class="music-card__badge">${item.number}</span>
            </div>
            <p class="music-card__description">${item.author}</p>
        </div>
    `,
  );
}

// 3. Favorite artist
const favArtist = document.getElementById("favorit-artist");
if (favArtist) {
  favArtist.innerHTML = AllData.favoriteArtist.map(
    (item) => `
        <div class="music-card music-card--artist">
            <div class="music-card__image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <h3 class="music-card__title">${item.title}</h3>
        </div>
    `,
  );
}

// 4. Audiobooks
const audBooks = document.getElementById("audio-books");
if (audBooks) {
  audBooks.innerHTML = AllData.audioBooks.map(
    (item) => `
        <div class="music-card">
            <div class="music-card__image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="music-card__content">
                <h3 class="music-card__title">${item.title}</h3>
            </div>
            <p class="music-card__description">${item.author}</p>
        </div>
    `,
  );
}

// 5. Podcasts
const podcast = document.getElementById("podcasst");
if (podcast) {
  podcast.innerHTML = AllData.podcasts.map(
    (item) => `
        <div class="music-card">
            <div class="music-card__image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="music-card__contents music-card__contents--podcast">
                <h3 class="music-card__title">${item.title}</h3>
                <p class="music-card__description">${item.author}</p>
            </div>
        </div>
    `,
  );
}

// 6. Discover Cards
const discover = document.getElementById("discover-cards");
if (discover) {
  discover.innerHTML = AllData.discoverCards.map(
    (item) => `
        <div class="category-card category-card--blue" style="background-color:${item.color} ;">
            <h3 class="category-card__title">${item.title}</h3>
            <div class="category-card__image">
                <img src="${item.image}" alt="${item.title}">
            </div>
        </div>
    `,
  );
}
// 6. Genres Cards
const genres = document.getElementById("genres-cards");
if (genres) {
  genres.innerHTML = AllData.genres.map(
    (item) => `
        <div class="category-card category-card--blue" style="background-color:${item.color} ;">
            <h3 class="category-card__title">${item.title}</h3>
            <div class="category-card__image">
                <img src="${item.image}" alt="${item.title}">
            </div>
        </div>
    `,
  );
}
// Mood & Activity Cards
const moodActivity = document.getElementById("mood-activity");
if (moodActivity) {
  moodActivity.innerHTML = AllData.moodActivityData.map(
    (item) => `
        <div class="category-card category-card--blue" style="background-color:${item.color} ;">
            <h3 class="category-card__title">${item.title}</h3>
            <div class="category-card__image">
                <img src="${item.image}" alt="${item.title}">
            </div>
        </div>
    `,
  );
}
// entertainment Cards
const entertaiment = document.getElementById("entertaiment");
if (entertaiment) {
  entertaiment.innerHTML = AllData.entertainmentData.map(
    (item) => `
        <div class="category-card category-card--blue" style="background-color:${item.color} ;">
            <h3 class="category-card__title">${item.title}</h3>
            <div class="category-card__image">
                <img src="${item.image}" alt="${item.title}">
            </div>
        </div>
    `,
  );
}
// podcast Cards
const podcasts = document.getElementById("podcasts");
if (podcasts) {
  podcasts.innerHTML = AllData.podcastData.map(
    (item) => `
        <div class="category-card category-card--blue" style="background-color:${item.color} ;">
            <h3 class="category-card__title">${item.title}</h3>
            <div class="category-card__image">
                <img src="${item.image}" alt="${item.title}">
            </div>
        </div>
    `,
  );
}
// audioBooks
const audioBooks = document.getElementById("audiobooks");
if (audioBooks) {
  audioBooks.innerHTML = AllData.audioBooksData.map(
    (item) => `
        <div class="category-card category-card--blue" style="background-color:${item.color} ;">
            <h3 class="category-card__title">${item.title}</h3>
            <div class="category-card__image">
                <img src="${item.image}" alt="${item.title}">
            </div>
        </div>
    `,
  );
}

// card generation in library
let libraryCards = document.getElementById("library-cards");

if (libraryCards) {
  libraryCards.innerHTML += AllData.musicDataMix.map(
    (item) => `
       <div class="library-card">
                    <div class="library-card__image">
                        <img src="${item.image}" alt="${item.title}">
                        <div class="library-card__pin">
                            <img src="../asset/icons/pinned.svg" alt="Pinned">
                        </div>
                    </div>
                    <div class="library-card__content">
                        <div class="library-card__header">
                            <h3 class="library-card__title">${item.title}</h3>
                            <span class="library-card__count">${item.number}</span>
                        </div>
                        <p class="library-card__description">
                        ${item.author}
                        </p>
                    </div>
                </div>
    `,
  );
  libraryCards.innerHTML += AllData.musicData.map(
    (item) => `
       <div class="library-card">
                    <div class="library-card__image">
                        <img src="${item.image}" alt="${item.title}">
                        <div class="library-card__pin">
                            <img src="../asset/icons/pinned.svg" alt="Pinned">
                        </div>
                    </div>
                    <div class="library-card__content">
                        <div class="library-card__header">
                            <h3 class="library-card__title">${item.title}</h3>
                            <span class="library-card__count">${item.number}</span>
                        </div>
                        <p class="library-card__description">
                        ${item.author}
                        </p>
                    </div>
                </div>
    `,
  );
}

// liked music generator

let likedSongs = document.getElementById("liked-song-generator");
if (likedSongs) {
  likedSongs.innerHTML += AllData.likedCardsData.map(
    (item) => `
      <div class="liked-songs__list">
              <div class="song-row">
                <span class="song-row__number">${item.number}</span>
                <div class="song-row__title-group">
                  <img src="${item.image}" alt="${item.title}" />
                  <div class="song-row__text">
                    <h3 class="song-row__title">${item.title}</h3>
                    <p class="song-row__artist">${item.author}</p>
                  </div>
                </div>
                <span class="song-row__album">Random Access Memories</span>
                <span class="song-row__duration">${item.duration}</span>
                <div class="song-row__like">
                  <img src="../asset/icons/heart-active.svg" alt="Liked" />
                </div>
              </div>
            </div>
    `,
  );
}
let artistAlbumCards = document.getElementById("artist-album-cards");

if (artistAlbumCards) {
  artistAlbumCards.innerHTML += AllData.musicDataMix.map(
    (item) => `
   <article class="artist-album-card">
              <div class="artist-album-card__image">
                <img src="${item.image}" alt="${item.title}" />
              </div>

              <div class="artist-album-card__content">
                <div class="artist-album-card__header">
                  <h3 class="artist-album-card__title">
                    ${item.title}
                  </h3>
                  <span class="artist-album-card__count">${item.number}</span>
                </div>

                <p class="artist-album-card__description">${item.author}</p>
              </div>
            </article>
           
    `,
  );
  artistAlbumCards.innerHTML += AllData.musicData.map(
    (item) => `
   <article class="artist-album-card">
              <div class="artist-album-card__image">
                <img src="${item.image}" alt="${item.title}" />
              </div>

              <div class="artist-album-card__content">
                <div class="artist-album-card__header">
                  <h3 class="artist-album-card__title">
                    ${item.title}
                  </h3>
                  <span class="artist-album-card__count">${item.number}</span>
                </div>

                <p class="artist-album-card__description">${item.author}</p>
              </div>
            </article>
           
    `,
  );
}

let trackListdata = document.getElementById("traack-list-generator");
if (trackListdata) {
  trackListdata.innerHTML += AllData.likedCardsData.map(
    (item, index) => `
               <li class="track-item">
                  <span class="track-item__index">${index + 1}</span>

                  <div class="track-item__info">
                    <img src="${item.image}" alt="${item.title}" />
                    <div>
                      <p class="track-item__title">${item.title}</p>
                      <p class="track-item__artist">${item.author}</p>
                    </div>
                  </div>

                  <span class="track-item__duration">${item.duration}</span>

                  <button class="track-item__like">
                    <img src="../asset/icons/like.svg" alt="Like" />
                  </button>
                </li>    
    `,
  );
}

let popularListdata = document.getElementById("popular-cardlist-generator");
if (popularListdata) {
  popularListdata.innerHTML += AllData.likedCardsData.map(
    (item, index) => `
               <li class="track-item">
                  <span class="track-item__index">${index + 1}</span>

                  <div class="track-item__info">
                    <img src="${item.image}" alt="${item.title}" />
                    <div>
                      <p class="track-item__title">${item.title}</p>
                      <p class="track-item__artist">${item.author}</p>
                    </div>
                  </div>

                  <span class="track-item__duration">${item.duration}</span>

                  <button class="track-item__like">
                    <img src="../asset/icons/like.svg" alt="Like" />
                  </button>
                </li>    
    `,
  );
}
