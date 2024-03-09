class Character {
  constructor(
    //Define paramaters
    name,
    age,
    height,
    hairColor,
    eyeColor,
    maxSpeed,
    strength
  ) {
    //Define properties
    this.name = name;
    this.age = age;
    this.height = height;
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.maxSpeed = maxSpeed;
    this.strength = strength;
    // this.pickups = {
    //   neck: pickupsNeck,
    //   bridge: pickupsBridge,
    // };
  }
  // Add methods like normal functions:
  strum() {
    let p = document.createElement("p");
    p.textContent = `Slappin this ${this.strings} strings are strumming on this ${this.brand} ${this.model}`;
    document.body.appendChild(p);
  }
}

class BassGuitar extends Guitar {
  constructor() {
    super(
      "Fender",
      "Jazzmaster",
      "Black",
      4,
      "62 Precision Bass Pickup",
      "62 Precision Bass Pickup"
    );
  }
  slapDaBass() {
    let p = document.createElement("p");
    p.textContent = `Slappin this ${this.brand} ${this.model}`;
    document.body.appendChild(p);
  }
}

class Keytar extends Guitar {
  constructor(brand, model, color, strings, pickupsNeck, pickupsBridge, keys) {
    super(brand, model, color, strings, pickupsNeck, pickupsBridge);
    this.keys = keys;
  }
  slide() {
    let p = document.createElement("p");
    p.textContent = `Sliding my fingers across ${this.brand} ${this.model}`;
    // this allows it to appear in the page
    document.body.append(p);
  }
}

export { Guitar, BassGuitar, Keytar };
