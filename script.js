var itemLinkedIn = document.querySelector(".itemLinkedIn");
var itemGitHub = document.querySelector(".itemGitHub");
var itemInstagram = document.querySelector(".itemInstagram");

itemLinkedIn.addEventListener("mouseover", function () {
    itemGitHub.style.backgroundColor = "#202020";
    itemInstagram.style.backgroundColor = "#202020";
});

itemGitHub.addEventListener("mouseover", function () {
    itemLinkedIn.style.backgroundColor = "#202020";
    itemInstagram.style.backgroundColor = "#202020";
});

itemInstagram.addEventListener("mouseover", function () {
    itemLinkedIn.style.backgroundColor = "#202020";
    itemGitHub.style.backgroundColor = "#202020";
});

itemLinkedIn.addEventListener("mouseout", function () {
    itemLinkedIn.style.backgroundColor = "#fff";
    itemGitHub.style.backgroundColor = "#fff";
    itemInstagram.style.backgroundColor = "#fff";
});

itemGitHub.addEventListener("mouseout", function () {
    itemLinkedIn.style.backgroundColor = "#fff";
    itemGitHub.style.backgroundColor = "#fff";
    itemInstagram.style.backgroundColor = "#fff";
});

itemInstagram.addEventListener("mouseout", function () {
    itemLinkedIn.style.backgroundColor = "#fff";
    itemGitHub.style.backgroundColor = "#fff";
    itemInstagram.style.backgroundColor = "#fff";
});
