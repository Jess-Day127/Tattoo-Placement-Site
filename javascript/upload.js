// Design Upload
const dropArea  = document.getElementById('drop-area');
const inputFile = document.getElementById('input-file');
const imageView = document.getElementById('img-view');
const removeBtn = document.getElementById('removeBgBtn');   // was missing
const tryOnBtn  = document.getElementById('tryOnBtn');

if (dropArea && inputFile && imageView) {
    let currentFile = null;

    inputFile.addEventListener('change', () => uploadImage(inputFile.files[0]));

    function uploadImage(file) {
        if (!file) return;
        currentFile = file;

        const imgLink = URL.createObjectURL(file);
        imageView.style.backgroundImage = `url(${imgLink})`;
        imageView.style.backgroundSize = 'contain';
        imageView.style.backgroundRepeat = 'no-repeat';
        imageView.style.backgroundPosition = 'center';
        imageView.textContent = '';
        imageView.style.border = '0';

        if (removeBtn) removeBtn.disabled = false;
    }

    // block the browser from opening the file
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
        dropArea.addEventListener(evt, e => {
            e.preventDefault();
            e.stopPropagation();
        });
    });

    dropArea.addEventListener('dragover', e => {
        e.dataTransfer.dropEffect = 'copy';   // shows the "copy" cursor
    });

    dropArea.addEventListener('drop', e => {
        const file = e.dataTransfer.files[0];
        if (!file) return;

        // keep the input in sync so inputFile.files[0] works later
        const dt = new DataTransfer();
        dt.items.add(file);
        inputFile.files = dt.files;

        uploadImage(file);
    });

    removeBtn.addEventListener('click', async () => {
        if (!currentFile) return alert('Upload image first');

        removeBtn.textContent = 'Removing...';
        removeBtn.disabled = true;

        try {
            const noBgBlob = await removeBackground(currentFile);
            const url = URL.createObjectURL(noBgBlob);

            imageView.style.backgroundImage = `url(${url})`;
            imageView.style.backgroundSize = 'contain';
            imageView.style.backgroundRepeat = 'no-repeat';
            imageView.style.backgroundPosition = 'center';

            // hand the stencil to the try-on page
            const reader = new FileReader();
            reader.onload = () => sessionStorage.setItem('stencil', reader.result);
            reader.readAsDataURL(noBgBlob);

            if (tryOnBtn) tryOnBtn.style.display = 'inline-block';
        } catch (err) {
            console.error(err);
            alert('Failed to remove background');
        } finally {
            removeBtn.disabled = false;
        }
    });
}