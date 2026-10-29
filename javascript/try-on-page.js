// Change Body Area Skin Tone
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
    let stencilImage = sessionStorage.getItem('stencil');
    const stencil = document.getElementById('imgStencil');

    function changeSkinTone(tone) {
    currentSkinTone = tone;
    updateImage();
}

function updateImage() {
    const select = document.getElementById('body-area-select');
    const img = document.getElementById('imgBodyArea');
    if (!select || !img) return;

    const area = bodyAreaImages[select.value];
    if (!area) return;

    img.src = area[currentSkinTone] ?? area.light;
}

const stencilBox = document.getElementById('stencilBox');
const stencilImg = document.getElementById('imgStencil');

function showStencil() {
    if (!stencilBox || !stencilImg || !stencilImage) return;

    stencilImg.src = stencilImage;
    stencilBox.style.display = 'block';
}
if (document.getElementById('body-area-select')) {
    updateImage();
    showStencil();
}