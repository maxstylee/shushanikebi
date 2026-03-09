const friendsIcon = document.getElementById("friends");
const closeIcon = document.getElementById("close-btn");
const friendList = document.querySelector(".friend-list");
const mainCont = document.querySelector(".main-content");

function toggleFriends() {
  friendList.classList.toggle("active");
  mainCont.classList.toggle("active");
  friendsIcon.classList.toggle("active");
}
friendsIcon.onclick = toggleFriends;
closeIcon.onclick = toggleFriends;
// friend list toggle button logic

// category choose class change logic

const tabsHome = document.querySelectorAll(".home__tab");

tabsHome.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabsHome.forEach((element) => element.classList.remove("focuse"));

    this.classList.add("focuse");
  });
});
const tabsDiscover = document.querySelectorAll(".discover__tab");

tabsDiscover.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabsDiscover.forEach((element) => element.classList.remove("focuse"));

    this.classList.add("focuse");
  });
});

const artistNavButton = document.querySelectorAll(".artist-nav__btn");

artistNavButton.forEach((tab) => {
  tab.addEventListener("click", function () {
    artistNavButton.forEach((element) =>
      element.classList.remove("artist-nav__btn--active"),
    );

    this.classList.add("artist-nav__btn--active");
  });
});

//footer player logic
const audio = document.getElementById("audio-element");
const playBtn = document.getElementById("play-pause");
const progressBar = document.getElementById("progress-bar");
const currentTimeEl = document.getElementById("current-time");
const durationTimeEl = document.getElementById("duration-time");

// Toggle Play/Pause
playBtn.addEventListener("click", () => {
  audio.paused ? audio.play() : audio.pause();
  playBtn.classList.toggle("active");
});

// function to format seconds into M:SS
const formatTime = (seconds) => {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

// Update Total Duration when the file loads
audio.addEventListener("loadedmetadata", () => {
  durationTimeEl.textContent = formatTime(audio.duration);
});

// Update Current Time as it plays
audio.addEventListener("timeupdate", () => {
  const percentage = (audio.currentTime / audio.duration) * 100;
  progressBar.value = percentage || 0;
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

const volumeSlider = document.getElementById("volume-slider");
const muteBtn = document.getElementById("mute-btn");

// Change volume when slider moves
volumeSlider.addEventListener("input", (e) => {
  audio.volume = e.target.value;

  // Optional: Change icon if volume is 0
  if (audio.volume === 0) {
    muteBtn.style.opacity = "0.5";
  } else {
    muteBtn.style.opacity = "1";
  }
});

// Bonus: Quick Mute Toggle
muteBtn.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false;
    volumeSlider.value = audio.volume;
  } else {
    audio.muted = true;
    volumeSlider.value = 0;
  }
});

audio.addEventListener("error", (e) => {
  console.error("აუდიო ფაილის ჩატვირთვის შეცდომა:", audio.error);
  alert("მუსიკა ვერ იპოვა! შეამოწმე ფაილის გზა და სახელი.");
});

audio.addEventListener("canplay", () => {
  console.log("მუსიკა მზად არის დასაკრავად!");
});

// toggle class for like action

let toggleLike = document.getElementById("like-toggle");

function toggleFriends() {
  toggleLike.classList.toggle("active");
}
toggleLike.onclick = toggleFriends;
