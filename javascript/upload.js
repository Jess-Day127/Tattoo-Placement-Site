// Design Upload
const dropArea   = document.getElementById('drop-area');
const inputFile  = document.getElementById('input-file');
const imageView  = document.getElementById('img-view');
const removeBtn  = document.getElementById('removeBgBtn');
const tryOnBtn   = document.getElementById('tryOnBtn');

const afterImg   = document.getElementById('afterImg');
const afterLayer = document.getElementById('afterLayer');
const uploadIcon = document.getElementById('uploadIcon');
const uploadHint = document.getElementById('uploadHint');

if (dropArea && inputFile && imageView) {
    let currentFile = null;

    inputFile.addEventListener('change', () => uploadImage(inputFile.files[0]));

    function uploadImage(file) {
        if (!file) return;
        currentFile = file;

        const imgLink = URL.createObjectURL(file);

        // BEFORE - never overwritten
        imageView.style.backgroundImage = `url(${imgLink})`;
        imageView.style.backgroundSize = 'contain';
        imageView.style.backgroundRepeat = 'no-repeat';
        imageView.style.backgroundPosition = 'center';
        imageView.style.border = '0';

        if (uploadIcon) uploadIcon.style.display = 'none';
        if (uploadHint) uploadHint.style.display = 'none';

        // reset to BEFORE state: hide AFTER, show Convert, hide Scroll + Try On
        if (afterLayer) afterLayer.style.visibility = 'hidden';
        if (removeBtn) { removeBtn.style.display = 'inline-block'; removeBtn.disabled = false; }
        if (tryOnBtn) tryOnBtn.style.display = 'none';
        window.wipe.scrollTrigger.disable();
    }

    // block browser from opening file
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
        dropArea.addEventListener(evt, e => {
            e.preventDefault();
            e.stopPropagation();
        });
    });

    dropArea.addEventListener('dragover', e => {
        e.dataTransfer.dropEffect = 'copy';
    });

    dropArea.addEventListener('drop', e => {
        const file = e.dataTransfer.files[0];
        if (!file) return;
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

            // BEFORE stays in imageView - DO NOT touch it
            // AFTER only:
            if (afterImg) afterImg.src = url;
            if (afterLayer) afterLayer.style.visibility = 'visible';

            // BUTTON SWAP: hide Convert, show Scroll + Try On
            if (removeBtn) removeBtn.style.display = 'none';
            if (tryOnBtn) tryOnBtn.style.display = 'inline-block';

            window.wipe.scrollTrigger.enable();
            if (window.ScrollTrigger) ScrollTrigger.refresh();

            const reader = new FileReader();
            reader.onload = () => sessionStorage.setItem('stencil', reader.result);
            reader.readAsDataURL(noBgBlob);

        } catch (err) {
            console.error(err);
            alert('Failed to remove background');
            if (removeBtn) { removeBtn.style.display = 'inline-block'; removeBtn.disabled = false; removeBtn.textContent = 'Convert to Stencil'; }
        }
    });
}

// ===== FLASH WALL - Use this design =====
const useDesignBtn = document.getElementById('useDesignBtn');
const detailImg = document.querySelector('.detail img');

if (useDesignBtn && detailImg) {
  useDesignBtn.addEventListener('click', async (e) => {
    e.stopPropagation();

    const src = detailImg.src;
    if (!src) return;

    useDesignBtn.textContent = 'Loading...';
    useDesignBtn.disabled = true;

    try {
      const res = await fetch(src);
      const blob = await res.blob();

      const reader = new FileReader();
      reader.onload = () => {
        sessionStorage.setItem('stencil', reader.result);
        window.location.href = './try-on.html';
      };
      reader.readAsDataURL(blob);

    } catch (err) {
      console.error(err);
      alert('Could not load that design');
      useDesignBtn.textContent = 'Use this design';
      useDesignBtn.disabled = false;
    }
  });
}