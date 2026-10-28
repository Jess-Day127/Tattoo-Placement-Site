// Design Upload

const dropArea = document.getElementById('drop-area');
const inputFile = document.getElementById('input-file');
const imageView = document.getElementById('img-view');

console.log("upload.js loaded");
console.log("dropArea:", dropArea);

inputFile.addEventListener("change", uploadImage);

function uploadImage(){
    const file = inputFile.files[0];
    if (!file) return;

    let imgLink = URL.createObjectURL(file);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent = "";
    imageView.style.border = 0;

    //removeBtn.disabled = false;
   // removeBtn.style.display = 'inline-block';
    //if (tryOnBtn) tryOnBtn.style.display = 'none';
}

// Drag & Drop 
dropArea.addEventListener("dragover", (e) => e.preventDefault());

dropArea.addEventListener("drop", (e) => {
    console.log("DROP FIRED", e.dataTransfer.files);
    e.preventDefault();
    const dt = new DataTransfer();
    for (const file of e.dataTransfer.files) dt.items.add(file);
    inputFile.files = dt.files;
    console.log("input files:", inputFile.files);
    uploadImage();
});



/* Remove BG Button
const removeBtn = document.getElementById('removeBgBtn');
const tryOnBtn = document.getElementById('tryOnBtn');


removeBtn.addEventListener('click', async () => {
    if (!currentFile) return alert("Upload image first");

    removeBtn.textContent = 'Removing...';
    removeBtn.disabled = true;

    try {
        const noBgBlob = await removeBackground(currentFile);
        const url = URL.createObjectURL(noBgBlob);
        imageView.style.backgroundImage = `url(${url})`;
        if (tryOnBtn) tryOnBtn.style.display = 'inline-block';
    } catch (err) {
        console.error(err);
        alert("Failed to remove background");
    } finally {
        removeBtn.textContent = 'Remove Background'
        removeBtn.disabled = false;
    }
});
*/






/* if (dropArea && inputFile && imageView) {
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
        const file = event.dataTransfer.files[0];
        if (!file) return;

        const dt = new DataTransfer();
        dt.items.add(file);
        inputFile.files = dt.files;
        uploadImage();
    });
}
*/
