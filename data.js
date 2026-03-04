import AllData from './card-data.js';

// Made for you
let madeForYou = document.getElementById("music-container");
// თითოეული ობიექტისთვის ვქმნით HTML კოდს
AllData.musicData.map((item) => {
  madeForYou.innerHTML += `
       <div class="music-card">
                    <div class="music-card__image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="music-card__content">
                        <h3 class="music-card__title">${item.title}</h3>
                        <span class="music-card__badge" style="color: ${item.color}">${item.number}</span>
                    </div>
                    <p class="music-card__description">
                    ${item.author}
                    </p>
       </div>
    `;
});

// your top mixes
let yourTopMixes = document.getElementById("top-mixes");
// თითოეული ობიექტისთვის ვქმნით HTML კოდს
AllData.musicDataMix.map((item) => {
  yourTopMixes.innerHTML += `
          <div class="music-card">
            <div class="music-card__image">
              <img src="${item.image}" alt="${item.title}">
            </div>

            <div class="music-card__content">
              <h3 class="music-card__title">${item.title}</h3>
              <span class="music-card__badge">${item.number}</span>
            </div>

            <p class="music-card__description">
             ${item.author}
            </p>
          </div>
          `;
});

// favorite artist
let favArtist = document.getElementById("favorit-artist");
// თითოეული ობიექტისთვის ვქმნით HTML კოდს
AllData.favoriteArtist.map((item) => {
  favArtist.innerHTML += `
         <div class="music-card music-card--artist">
            <div class="music-card__image">
              <img src="${item.image}" alt="${item.title}">
            </div>
            <h3 class="music-card__title">${item.title}</h3>
          </div>
          `;
});

// Audiobooks
let audBooks = document.getElementById("audio-books");
// თითოეული ობიექტისთვის ვქმნით HTML კოდს
AllData.audioBooks.map((item) => {
  audBooks.innerHTML += `
         <div class="music-card">
            <div class="music-card__image">
              <img src="${item.image}" alt="${item.title}">
            </div>

            <div class="music-card__content">
              <h3 class="music-card__title">${item.title}</h3>
            </div>

            <p class="music-card__description">
              ${item.author}
            </p>
          </div>
          `;
});

// Podcasts
let podcast = document.getElementById("podcasst");
// თითოეული ობიექტისთვის ვქმნით HTML კოდს
AllData.podcasts.map((item) => {
  podcast.innerHTML += `
       <div class="music-card">
            <div class="music-card__image">
              <img src="${item.image}" alt="${item.title}">
            </div>

            <div class="music-card__contents music-card__contents--podcast">
              <h3 class="music-card__title">${item.title}</h3>
              <p class="music-card__description">
               ${item.author}
              </p>
            </div>
          </div>
          `;
});
