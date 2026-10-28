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
    let stencilImage = sessionStorage.getItem('stencilImage');

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

function showStencil() {
    const stencil = document.getElementById('imgStencil');
    if (!stencil || !stencilImage) return;

    stencil.src = stencilImage;
    stencil.style.display = 'block';
}

if (document.getElementById('body-area-select')) {
    updateImage();
    showStencil();
}



    // Select Design
    function select() {
        stencil.classList.add('selected');
        resizeHandle.classList.add('visible');
        rotateHandle.classList.add('visible');
        positionHandles();
    }

    function deselect() {
        stencil.classList.remove('selected');
        resizeHandle.classList.remove('visible');
        rotateHandle.classList.remove('visible');
    }

    stencil.addEventListener('pointerdown', select);

    document.addEventListener('pointerdown', (e) => {
        if (
            !stencil.contains(e.target) &&
            !resizeHandle.contains(e.target) &&
            !rotateHandle.contains(e.target)
        ) {
            deselect();
        }
    });

    // Rotate Design
    let startAngle = 0;
    let startRotation = 0;

    Draggable.create(rotateHandle, {
        type: 'x,y',
        onPress(e) {
            e.stopPropagation();
            const rect = stencil.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;

            startAngle = Math.atan2(e.clientY - cy, e.clientX - cx);
            startRotation = gsap.getProperty(stencil, 'rotation');
            gsap.set(stencil, { transformOrigin: 'center center' });
        },
        onDrag(e) {
            const rect = stencil.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;

            const now = Math.atan2(e.clientY - cy, e.clientX - cx);
            const delta = (now - startAngle) * 180 / Math.PI;

            gsap.set(stencil, { rotation: startRotation + delta });
            positionHandles();
        },
    });

    new ResizeObserver(positionHandles).observe(stencil);
    positionHandles();