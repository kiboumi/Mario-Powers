import Character from "./character.js";

const marioImages = {
  mushroom: "./images/normal_power_mushroom.png",
  squirrel: "./images/acorn_power_squirel.png",
  bell: "./images/cat_power_bell.png",
  yoshi: "./images/egg_power_Yoshi.png",
  leaf: "./images/raccoon_power_leaf.png",
};

const mario = new Mario(marioImages, ".mario-container");

const buttons = document.querySelectorAll(".power-button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const power = this.id.replace("-button", ""); // Extract the power from the button's ID
    const imageUrl = marioImages[power];
    mario.changePower(imageUrl);
  });
});

const MarioCharacter = new Mario(
  ["image1.jpg", "image2.jpg"],
  "#mario-container"
);

const Mario = new Character(
  "Mario",
  32,
  160,
  "Brown",
  "Blue",
  "20mph",
  "98%",
  "Normal"
);

const Luigi = new Character(
  "Luigi",
  32,
  190,
  "Black",
  "Blue",
  "20mph",
  "90%",
  "Normal"
);

const Peach = new Character(
  "Peach",
  30,
  170,
  "Blonde",
  "Blue",
  "30mph",
  "80%",
  "Normal"
);

const Toad = new Character(
  "Toad",
  12,
  20,
  "Red",
  "Black",
  "60mph",
  "60%",
  "Normal"
);

console.log(Mario);
Mario.upgrade();
console.log(Luigi);
Luigi.upgrade();
console.log(Toad);
Toad.upgrade();
console.log(Peach);
Peach.upgrade();

console.log(MarioCharacter);
MarioCharacter.changePower("new-image.jpg");

// const Luigi = new Character(
//   "Luigi",
//   "32",
//   "190cm",
//   "Black",
//   "Blue",
//   "20mph",
//   "98%"
// );

// const alesisKeytar = new Keytar(
//   "Alesis",
//   "Vortex",
//   "Color",
//   0,
//   "None",
//   "None",
//   49
// );

// console.log(Mario);
// alesisKeytar.slide();

// console.log(fenderStrat);
// fenderStrat.strum();
// console.log(gretschWhiteFalcon);
// gretschWhiteFalcon.strum();

// const fenderPrecisionBass = new BassGuitar();

// console.log(fenderPrecisionBass);
// fenderPrecisionBass.slapDaBass();
