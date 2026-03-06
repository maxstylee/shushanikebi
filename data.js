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
const podcast = document.getElementById("podcasst"); // Note: Double 's' as per your original code
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
