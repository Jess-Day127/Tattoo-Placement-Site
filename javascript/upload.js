const dropArea = document.getElementById('drop-area');
const inputFile = document.getElementById('input-file');
const imageView = document.getElementById('img-view');

if (dropArea && inputFile && imageView) {
    inputFile.addEventListener('change', uploadImage);

    function uploadImage() {
        const file = inputFile.files[0];
        if (!file) return;

        const imgLink = URL.createObjectURL(file);
        imageView.style.backgroundImage = `url(${imgLink})`;
        imageView.textContent = '';
        imageView.style.border = 0;

        // let the API script know a file is ready
        document.dispatchEvent(new CustomEvent('image:selected', { detail: { file } }));
    }

    dropArea.addEventListener('dragover', (event) => event.preventDefault());

    dropArea.addEventListener('drop', (event) => {
        event.preventDefault();
        const dt = new DataTransfer();
        dt.items.add(event.dataTransfer.files[0]);
        inputFile.files = dt.files;
        uploadImage();
    });
}
