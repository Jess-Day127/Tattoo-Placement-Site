/* API Key: pk_48c110edabcd05ee88d4b2c7e108aa66 */

(() => {
    const POOF_API_KEY = 'pk_48c110edabcd05ee88d4b2c7e108aa66';

    const removeBtn = document.getElementById('removeBgBtn');
    const tryOnBtn = document.getElementById('tryOnBtn');
    const imageView = document.getElementById('img-view');

    if (!removeBtn || !imageView) return;

    let currentFile = null;

    document.addEventListener('image:selected', (event) => {
        currentFile = event.detail.file;
        removeBtn.disabled = false;
        removeBtn.style.display = 'inline-block';
        if (tryOnBtn) tryOnBtn.style.display = 'none';
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

    function blobToDataUrl(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    removeBtn.addEventListener('click', async () => {
        if (!currentFile) return;

        removeBtn.disabled = true;
        removeBtn.textContent = 'Removing…';

        try {
            const blob = await removeBackground(currentFile);
            imageView.style.backgroundImage = `url(${URL.createObjectURL(blob)})`;

            const dataUrl = await blobToDataUrl(blob);
            let saved = false;
            try {
                sessionStorage.setItem('stencilImage', dataUrl);
                saved = true;
            } catch (e) {
                console.warn('Stencil too large for sessionStorage:', e);
            }

            if (saved) {
                removeBtn.style.display = 'none';
                if (tryOnBtn) tryOnBtn.style.display = 'inline-block';
            }
        } catch (err) {
            console.error(err);
            alert('Background removal failed: ' + err.message);
        } finally {
            removeBtn.disabled = false;
            removeBtn.textContent = 'Remove Background';
        }
    });
})();
