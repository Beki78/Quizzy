const spinWrapper = document.querySelector(".spinner-wrapper");
window.addEventListener("load", () => {
  spinWrapper.style.opacity = "0";

  setTimeout(() => {
    spinWrapper.style.display = "none";
  }, 300);
});

const topic = document.querySelector(".topic");
topic.addEventListener("click", (e) => {
  window.location.href = "question.html";
});

const back = document.querySelector(".NavBarleft");
back.addEventListener("click", (e) => {
  window.location.href = "index.html";
  console.log("sd");
});

let icon = document.querySelector(".icon");
function changeTheme() {
  // Toggle the dark-theme class on the body element
  document.body.classList.toggle("dark-theme");

  // Get a reference to the icon element
  let icon = document.querySelector(".icon");

  // Check if the dark-theme class is present after toggling
  if (document.body.classList.contains("dark-theme")) {
    // If the dark-theme class is present, change the icon to sun
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    // If the dark-theme class is not present, change the icon to moon
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
  
}
