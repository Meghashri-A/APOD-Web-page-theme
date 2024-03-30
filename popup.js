document.addEventListener("DOMContentLoaded", function () {
  const apodImage = document.getElementById("apod-image");
  const changeThemeButton = document.getElementById("change-theme");

  function setApodTheme() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=pcDSBvAVMrqtz8SAVMH2SjN3fwe5R3mptYzxzqyi")
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.url;
        document.body.style.backgroundImage = `url(${imageUrl})`;
        apodImage.querySelector("img").src = imageUrl;
      })
      .catch((error) => {
        console.error("Error fetching APOD data:", error);
      });
  }

  changeThemeButton.addEventListener("click", setApodTheme);
  setApodTheme();
});
