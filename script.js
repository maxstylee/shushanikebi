const friendsIcon = document.getElementById("friends");
const friendList = document.querySelector(".friend-list");
const mainCont = document.querySelector(".main-content");

function toggleFriends() {
  friendList.classList.toggle("active");
  mainCont.classList.toggle("active");
}
friendsIcon.onclick = toggleFriends;
