
    class Mario {
        constructor(images, containerSelector) {
            this.images = images;
            this.container = document.querySelector(containerSelector);
        }

        changePower(imageUrl) {
            this.container.style.backgroundImage = `url(${imageUrl})`;
        }
    }

    const marioImages = {
        "normal": "./images/mario-normal.png",
        "acorn": "./images/mario-squirel.png",
        "bell": "./images/mario-cat.png",
        "leaf": "./images/mario-raccoon.png",
        "egg": "./images/mario-yoshi.png"
    };

    const mario = new Mario(marioImages, '.mario-container');

    const buttons = document.querySelectorAll('.power-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const power = this.id.replace("-button", ""); // Extraer el poder del ID del botón
            const imageUrl = marioImages[power];
            mario.changePower(imageUrl);
        });
    });
