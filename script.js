const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// Function to download an image given its URL
const downloadImage = (image) => {
  return new Promise((resolve, reject) => {
    const imgElement = new Image();
    imgElement.onload = () => resolve(imgElement);
    imgElement.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
    imgElement.src = image.url;
  });
};

// Event listener for button click
btn.addEventListener("click", () => {
  Promise.all(images.map(downloadImage))
    .then((downloadedImages) => {
      // Clear the output div before displaying new images
      output.innerHTML = '';

      // Append each downloaded image to the output div
      downloadedImages.forEach((imgElement) => {
        output.appendChild(imgElement);
      });
    })
    .catch((error) => {
      console.error(error);
    });
});
