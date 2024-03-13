import Character from "./character.js";

const mario = new Character(
  "Mario",
  "27",
  "160cm",
  "Brown",
  "Blue",
  "20mph",
  "100%",
  "Pizza"
);
const luigi = new Character(
  "Luigi",
  "27",
  "177cm",
  "Brown",
  "Blue",
  "20mph",
  "98%",
  "Pasta"
);
const peach = new Character(
  "Princess Peach",
  "32",
  "170cm",
  "Brown",
  "Blue",
  "20mph",
  "90%",
  "Salad"
);
const toad = new Character(
  "Toad",
  "32",
  "159cm",
  "Brown",
  "Blue",
  "20mph",
  "70%",
  "Mushrooms"
);

document.querySelectorAll(".character-img").forEach((img) => {
  img.addEventListener("click", function () {
    clearCharacterInfo();
    const characterName = this.dataset.character;
    const character = {
      mario,
      luigi,
      peach,
      toad,
    }[characterName];
    if (character) {
      character.introduce().eat();
    }
  });
});

function clearCharacterInfo() {
  const existingCharacterInfo = document.querySelector(".character-info");
  if (existingCharacterInfo) {
    existingCharacterInfo.remove();
  }
}
