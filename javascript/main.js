const dropArea = document.getElementById('drop-area');
const inputFile = document.getElementById('input-file');
const imageView = document.getElementById('img-view');
const removeBtn = document.getElementById('removeBgBtn');

if (dropArea && inputFile && imageView && removeBtn) {
    const POOF_API_KEY = 'pk_48c110edabcd05ee88d4b2c7e108aa66';
    let currentFile = null;

    inputFile.addEventListener('change', uploadImage);

    function uploadImage() {
        const file = inputFile.files[0];
        if (!file) return;

        currentFile = file;

        const imgLink = URL.createObjectURL(file);
        imageView.style.backgroundImage = `url(${imgLink})`;
        imageView.textContent = '';
        imageView.style.border = 0;

        removeBtn.disabled = false;
    }

    dropArea.addEventListener('dragover', (event) => event.preventDefault());

    dropArea.addEventListener('drop', (event) => {
        event.preventDefault();
        const dt = new DataTransfer();
        dt.items.add(event.dataTransfer.files[0]);
        inputFile.files = dt.files;
        uploadImage();
    });

    async function removeBackground(file) {
        const form = new FormData();
        form.append('file', file);
        form.append('size', 'preview');

        const res = await fetch('https://api.poof.bg/v1/remove', {
            method: 'POST',
            headers: { 'x-api-key': POOF_API_KEY },
            body: form,
        });

        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.error || `HTTP ${res.status}`);
        }

        return await res.blob();
    }

    removeBtn.addEventListener('click', async () => {
        if (!currentFile) return;

        removeBtn.disabled = true;
        removeBtn.textContent = 'Removing…';

        try {
            const blob = await removeBackground(currentFile);
            imageView.style.backgroundImage = `url(${URL.createObjectURL(blob)})`;
        } catch (err) {
            console.error(err);
            alert('Background removal failed: ' + err.message);
        } finally {
            removeBtn.disabled = false;
            removeBtn.textContent = 'Remove Background';
        }
    });
}



/*Body Area Images*/
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

    function changeSkinTone(tone) {
    currentSkinTone = tone;
    updateImage();
}

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
