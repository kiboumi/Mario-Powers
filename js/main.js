class Mario {
  constructor(images, containerSelector) {
    this.images = images;
    this.container = document.querySelector(containerSelector);
  }

  changePower(imageUrl) {
    // Clear existing content
    this.container.innerHTML = "";

    // Create new image element
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Mario Power";

    // Append image to container
    this.container.appendChild(img);
  }
}

const marioImages = {
  normal: "./images/mario-normal.png",
  acorn: "./images/mario-squirel.png",
  bell: "./images/mario-cat.png",
  leaf: "./images/mario-raccoon.png",
  egg: "./images/mario-yoshi.png",
};

const mario = new Mario(marioImages, "#mario-container");

const buttons = document.querySelectorAll(".power-button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const power = this.id.replace("-button", ""); // Extract power from button ID
    const imageUrl = marioImages[power];
    mario.changePower(imageUrl);
  });
});
