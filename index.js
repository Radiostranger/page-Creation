// const button = document.getElementById("myButton");

//   button.addEventListener("click", function() {
//     window.location.href = "https://www.github.com";

//     window.open(urlToOpen, "_blank")
//   });



const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  // Specify the URL you want to open in a new tab
  const urlToOpen = "https://www.github.com";

  // Use window.open() to open the URL in a new tab
  window.open(urlToOpen, "_blank");
});

const currentUTCTime = new Date().toUTCString();
document.getElementById("utc-time").textContent = "Current UTC Time: " + currentUTCTime;