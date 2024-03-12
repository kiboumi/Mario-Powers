class Character {
  constructor(
    //Define paramaters
    name,
    age,
    height,
    hairColor,
    eyeColor,
    maxSpeed,
    strength,
    status,
    images,
    containerSelector
  ) {
    //Define properties
    this.name = name;
    this.age = age;
    this.height = height;
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.maxSpeed = maxSpeed;
    this.strength = strength;
    this.status = status;
    this.images = images;
    this.container = document.querySelector(containerSelector);
  }
  // Add methods like normal functions:
  // upgrade() {
  //   let p = document.createElement("p");
  //   p.textContent = `Upgrading ${this.status}  ${this.name} ${this.strength}`;
  //   document.body.appendChild(p);
  // }

  changePower(imageUrl) {
    this.container.style.backgroundImage = `url(${imageUrl})`;
  }
}

// class Mario extends Character {
//   constructor() {
//     super("Mario", "32", "160cm", "Brown", "Blue", "20mph", "98%");
//   }
//   changePower() {
//     let img = document.createElement("img");
//     // let p = document.createElement("p");
//     img.src = "img/mario-normal.png";
//     img.alt = "Mario";
//     document.body.appendChild(img);
//     // p.fileContent = `Changing ${this.brand} ${this.model}`;
//     // document.body.appendChild(p);
//   }
// }

// class Keytar extends Guitar {
//   constructor(brand, model, color, strings, pickupsNeck, pickupsBridge, keys) {
//     super(brand, model, color, strings, pickupsNeck, pickupsBridge);
//     this.keys = keys;
//   }
//   slide() {
//     let p = document.createElement("p");
//     p.textContent = `Sliding my fingers across ${this.brand} ${this.model}`;
//     // this allows it to appear in the page
//     document.body.append(p);
//   }
// }

export default Character;
