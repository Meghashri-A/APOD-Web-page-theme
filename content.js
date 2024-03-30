
fetch("https://api.nasa.gov/planetary/apod?api_key=pcDSBvAVMrqtz8SAVMH2SjN3fwe5R3mptYzxzqyi")
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.url;
    document.body.style.backgroundImage = `url(${imageUrl})`;
  })
  .catch(error => {
    console.error("Error fetching APOD data:", error);
  });
