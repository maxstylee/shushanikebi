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

    artistNavButton.forEach((element) => element.classList.remove("artist-nav__btn--active"));

    this.classList.add("artist-nav__btn--active");

  });
});
