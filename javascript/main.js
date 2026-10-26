const bodyAreaImages = {
        torso: {
            light: './assets/torso light.jpg',
            medium: './assets/torso medium.jpg',
            dark: './assets/torso dark.jpg'
        },
        back: {
            light: './assets/back light.jpg',
            medium: './assets/back medium.jpg',
            dark: './assets/back dark.jpg'
        },
        knuckles: {
            greyscale: './assets/knuckles 0.jpg',
            light: './assets/knuckles 1.jpg',
            medium: './assets/knuckles 2.jpg',
            dark: './assets/knuckles 3.jpg'
        },
        arm: {
            light: './assets/arm light.jpg',
            medium: './assets/arm medium.jpg',
            dark: './assets/arm dark.jpg'
        },
    };

    let currentSkinTone = 'greyscale'; // default

    function updateImage() {
        const select = document.getElementById('body-area-select');
        const img = document.getElementById('imgBodyArea');
        if (!select || !img) return;   // not on this page — bail out quietly

        const selectedArea = select.value;
        img.src = bodyAreaImages[selectedArea][currentSkinTone];
    }

    if (document.getElementById('body-area-select')) {
    updateImage();
}



/* API Key: pk_48c110edabcd05ee88d4b2c7e108aa66 */

const dropArea = document.getElementById('drop-area');
const inputFile = document.getElementById('input-file');
const imageView = document.getElementById('img-view');

inputFile.addEventListener('change', uploadImage);

function uploadImage() {
    let imgLink = URL.createObjectURL (inputFile.files[0]); /* create image link */
    imageView.style.backgroundImage = `url(${imgLink})`; /* set image as background */
}

