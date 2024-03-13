class Character {
  constructor(name, age, height, hairColor, eyeColor, maxSpeed, strength) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.maxSpeed = maxSpeed;
    this.strength = strength;
  }

  introduce() {
    let p = document.createElement("p");
    p.textContent = `My name is ${this.name}, I am ${this.age} years old.`;
    p.textContent += `I am ${this.height} tall with ${this.hairColor} hair and ${this.eyeColor} eyes. `;
    p.textContent += `I can run at ${this.maxSpeed} and my strength is ${this.strength}.`;
    p.classList.add("character-info");
    document.body.appendChild(p);
    p.innerHTML = p.textContent;
  }
}

// class Power extends Character {
//   constructor(
//     name,
//     age,
//     height,
//     hairColor,
//     eyeColor,
//     maxSpeed,
//     strength,
//     power
//   ) {
//     super(name, age, height, hairColor, eyeColor, maxSpeed, strength);
//     this.power = power;
//   }
//   transform() {
//     let p = document.createElement("p");
//     let img = document.createElement("img");
//     img.src = `./images/${this.power}.png`;
//     p.textContent = `I am ${this.name} and I can transform into ${this.power}`;
//     p.classList.add("character-info");
//     document.body.appendChild(p);
//     document.body.appendChild(img);
//     p.innerHTML = p.textContent;
//   }
// }

// class Food extends Character {
//     constructor(
//       name,
//       age,
//       height,
//       hairColor,
//       eyeColor,
//       maxSpeed,
//       strength,
//       food
//     ) {
//       super(name, age, height, hairColor, eyeColor, maxSpeed, strength);
//       this.food = food;
//     }
//     eat() {
//       let p = document.createElement("p");
//       p.textContent = `My favourite food is ${this.food}`;
//       p.classList.add("character-info");
//       document.body.appendChild(p);
//       p.innerHTML = p.textContent;

//     }
//   }

export default Character;
