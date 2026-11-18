// Change Body Area Skin Tone
const bodyImages = {
    torso: {
        1: { // Body Type 1
            greyscale: './assets/Body Areas/Torso/front 1 (def).png',
            light: './assets/Body Areas/Torso/front 1 (light).png',
            medium: './assets/Body Areas/Torso/front 1 (med).png',
            dark: './assets/Body Areas/Torso/front 1 (dark).png'
        },
        2: { // Body Type 2
            greyscale: './assets/Body Areas/Torso/front 2 (def).png',
            light: './assets/Body Areas/Torso/front 2 (light).png',
            medium: './assets/Body Areas/Torso/front 2 (med).png',
            dark: './assets/Body Areas/Torso/front 2 (dark).png'
        },
        3: { // Body Type 3
            greyscale: './assets/Body Areas/Torso/front 3 (def).png',
            light: './assets/Body Areas/Torso/front 3 (light).png',
            medium: './assets/Body Areas/Torso/front 3 (med).png',
            dark: './assets/Body Areas/Torso/front 3 (dark).png'
        }
    },

    back: {
        1: {
            greyscale: './assets/Body Areas/Torso/back 1 (def).png',
            light: './assets/Body Areas/Torso/back 1 (light).png',
            medium: './assets/Body Areas/Torso/back 1 (med).png',
            dark: './assets/Body Areas/Torso/back 1 (dark).png'
        },
        2: {
            greyscale: './assets/Body Areas/Torso/back 2 (def).png',
            light: './assets/Body Areas/Torso/back 2 (light).png',
            medium: './assets/Body Areas/Torso/back 2 (med).png',
            dark: './assets/Body Areas/Torso/back 2 (dark).png'
        },
        3: {
            greyscale: './assets/Body Areas/Torso/back 3 (def).png',
            light: './assets/Body Areas/Torso/back 3 (light).png',
            medium: './assets/Body Areas/Torso/back 3 (med).png',
            dark: './assets/Body Areas/Torso/back 3 (dark).png'
        }
    },

    ribs: {
        1: {
            greyscale: './assets/Body Areas/Torso/side 1 (def).png',
            light: './assets/Body Areas/Torso/side 1 (light).png',
            medium: './assets/Body Areas/Torso/side 1 (med).png',
            dark: './assets/Body Areas/Torso/side 1 (dark).png'
        },

        2: {
            greyscale: './assets/Body Areas/Torso/side 2 (def).png',
            light: './assets/Body Areas/Torso/side 2 (light).png',
            medium: './assets/Body Areas/Torso/side 2 (med).png',
            dark: './assets/Body Areas/Torso/side 2 (dark).png'
        },

        3: {
            greyscale: './assets/Body Areas/Torso/side 3 (def).png',
            light: './assets/Body Areas/Torso/side 3 (light).png',
            medium: './assets/Body Areas/Torso/side 3 (med).png',
            dark: './assets/Body Areas/Torso/side 3 (dark).png'
        }
    },

    head: {
        1: {
            greyscale: './assets/Body Areas/Head/back (def).png',
            light: './assets/Body Areas/Head/back (light).png',
            medium: './assets/Body Areas/Head/back (med).png',
            dark: './assets/Body Areas/Head/back (dark).png'
        }
    },

    ear: {
        1: {
            greyscale: './assets/Body Areas/Head/side (def).png',
            light: './assets/Body Areas/Head/side (light).png',
            medium: './assets/Body Areas/Head/side (med).png',
            dark: './assets/Body Areas/Head/side (dark).png'
        }
    },

    throat: {
        1: {
            greyscale: './assets/Body Areas/Head/front (def).png',
            light: './assets/Body Areas/Head/front (light).png',
            medium: './assets/Body Areas/Head/front (med).png',
            dark: './assets/Body Areas/Head/front (dark).png'
        }
    },

    armInside: {
        1: {
            greyscale: './assets/Body Areas/Arm/in 1 (def).png',
            light: './assets/Body Areas/Arm/in 1 (light).png',
            medium: './assets/Body Areas/Arm/in 1 (med).png',
            dark: './assets/Body Areas/Arm/in 1 (dark).png'
        },

        2: {
            greyscale: './assets/Body Areas/Arm/in 2 (def).png',
            light: './assets/Body Areas/Arm/in 2 (light).png',
            medium: './assets/Body Areas/Arm/in 2 (med).png',
            dark: './assets/Body Areas/Arm/in 2 (dark).png'
        },

        3: {
            greyscale: './assets/Body Areas/Arm/in 3 (def).png',
            light: './assets/Body Areas/Arm/in 3 (light).png',
            medium: './assets/Body Areas/Arm/in 3 (med).png',
            dark: './assets/Body Areas/Arm/in 3 (dark).png'
        }
    },

    armOutside: {
        1: {
            greyscale: './assets/Body Areas/Arm/out 1 (def).png',
            light: './assets/Body Areas/Arm/out 1 (light).png',
            medium: './assets/Body Areas/Arm/out 1 (med).png',
            dark: './assets/Body Areas/Arm/out 1 (dark).png'
        },

        2: {
            greyscale: './assets/Body Areas/Arm/out 2 (def).png',
            light: './assets/Body Areas/Arm/out 2 (light).png',
            medium: './assets/Body Areas/Arm/out 2 (med).png',
            dark: './assets/Body Areas/Arm/out 2 (dark).png'
        },

        3: {
            greyscale: './assets/Body Areas/Arm/out 3 (def).png',
            light: './assets/Body Areas/Arm/out 3 (light).png',
            medium: './assets/Body Areas/Arm/out 3 (med).png',
            dark: './assets/Body Areas/Arm/out 3 (dark).png'
        }
    },

    knuckles: {
        1: {
        greyscale: './assets/Body Areas/Knuckle/default.png',
            light: './assets/Body Areas/Knuckle/light.png',
            medium: './assets/Body Areas/Knuckle/medium.png',
            dark: './assets/Body Areas/Knuckle/dark.png'
        }
    },

    legFront: {
        1: {
            greyscale: './assets/Body Areas/Leg/front 1 (def).png',
            light: './assets/Body Areas/Leg/front 1 (light).png',
            medium: './assets/Body Areas/Leg/front 1 (med).png',
            dark: './assets/Body Areas/Leg/front 1 (dark).png'
        },

        2: {
            greyscale: './assets/Body Areas/Leg/front 2 (def).png',
            light: './assets/Body Areas/Leg/front 2 (light).png',
            medium: './assets/Body Areas/Leg/front 2 (med).png',
            dark: './assets/Body Areas/Leg/front 2 (dark).png'
        },

        3: {
            greyscale: './assets/Body Areas/Leg/front 3 (def).png',
            light: './assets/Body Areas/Leg/front 3 (light).png',
            medium: './assets/Body Areas/Leg/front 3 (med).png',
            dark: './assets/Body Areas/Leg/front 3 (dark).png'
        }
    },

    legSide: {
        1: {
            greyscale: './assets/Body Areas/Leg/side 1 (def).png',
            light: './assets/Body Areas/Leg/side 1 (light).png',
            medium: './assets/Body Areas/Leg/side 1 (med).png',
            dark: './assets/Body Areas/Leg/side 1 (dark).png'
        },

        2: {
            greyscale: './assets/Body Areas/Leg/side 2 (def).png',
            light: './assets/Body Areas/Leg/side 2 (light).png',
            medium: './assets/Body Areas/Leg/side 2 (med).png',
            dark: './assets/Body Areas/Leg/side 2 (dark).png'
        },

        3: {
            greyscale: './assets/Body Areas/Leg/side 3 (def).png',
            light: './assets/Body Areas/Leg/side 3 (light).png',
            medium: './assets/Body Areas/Leg/side 3 (med).png',
            dark: './assets/Body Areas/Leg/side 3 (dark).png'
        }
    },

    legBack: {
        1: {
            greyscale: './assets/Body Areas/Leg/back 1 (def).png',
            light: './assets/Body Areas/Leg/back 1 (light).png',
            medium: './assets/Body Areas/Leg/back 1 (med).png',
            dark: './assets/Body Areas/Leg/back 1 (dark).png'
        },

        2: {
            greyscale: './assets/Body Areas/Leg/back 2 (def).png',
            light: './assets/Body Areas/Leg/back 2 (light).png',
            medium: './assets/Body Areas/Leg/back 2 (med).png',
            dark: './assets/Body Areas/Leg/back 2 (dark).png'
        },

        3: {
            greyscale: './assets/Body Areas/Leg/back 3 (def).png',
            light: './assets/Body Areas/Leg/back 3 (light).png',
            medium: './assets/Body Areas/Leg/back 3 (med).png',
            dark: './assets/Body Areas/Leg/back 3 (dark).png'
        }
    },

    hip: {
        1: {
            greyscale: './assets/Body Areas/Hip/1 (def).png',
            light: './assets/Body Areas/Hip/1 (light).png',
            medium: './assets/Body Areas/Hip/1 (med).png',
            dark: './assets/Body Areas/Hip/1 (dark).png'
        },

        2: {
            greyscale: './assets/Body Areas/Hip/2 (def).png',
            light: './assets/Body Areas/Hip/2 (light).png',
            medium: './assets/Body Areas/Hip/2 (med).png',
            dark: './assets/Body Areas/Hip/2 (dark).png'
        },

        3: {
            greyscale: './assets/Body Areas/Hip/3 (def).png',
            light: './assets/Body Areas/Hip/3 (light).png',
            medium: './assets/Body Areas/Hip/3 (med).png',
            dark: './assets/Body Areas/Hip/3 (dark).png'
        },
    }
};

const painImages = {
    torso: {
        1: './assets/Body Areas/Pain/torso 1.png',
        2: './assets/Body Areas/Pain/torso 2.png',
        3: './assets/Body Areas/Pain/torso 3.png'
    },

    back: {
        1: './assets/Body Areas/Pain/back 1.png',
        2: './assets/Body Areas/Pain/back 2.png',
        3: './assets/Body Areas/Pain/back 3.png'
    },

    ribs: {
        1: './assets/Body Areas/Pain/rib 1.png',
        2: './assets/Body Areas/Pain/rib 2.png',
        3: './assets/Body Areas/Pain/rib 3.png'
    },

    head: {
        1: './assets/Body Areas/Pain/head.png'
    },

    throat: {
        1: './assets/Body Areas/Pain/throat.png'
    },

    ear: {
        1: './assets/Body Areas/Pain/ear.png'
    },

    knuckles: {
        1: './assets/Body Areas/Pain/knuckles.png'
    },

    armInside: {
        1: './assets/Body Areas/Pain/arm in 1.png',
        2: './assets/Body Areas/Pain/arm in 2.png',
        3: './assets/Body Areas/Pain/arm in 3.png'
    },

    armOutside: {
        1: './assets/Body Areas/Pain/arm out 1.png',
        2: './assets/Body Areas/Pain/arm out 2.png',
        3: './assets/Body Areas/Pain/arm out 3.png'
    },

    legBack: {
        1: './assets/Body Areas/Pain/leg back 1.png',
        2: './assets/Body Areas/Pain/leg back 2.png',
        3: './assets/Body Areas/Pain/leg back 3.png'
    },

    legFront: {
        1: './assets/Body Areas/Pain/leg front 1.png',
        2: './assets/Body Areas/Pain/leg front 2.png',
        3: './assets/Body Areas/Pain/leg front 3.png'
    },

    legSide: {
        1: './assets/Body Areas/Pain/leg side 1.png',
        2: './assets/Body Areas/Pain/leg side 2.png',
        3: './assets/Body Areas/Pain/leg side 3.png'
    },

    hip: {
        1: './assets/Body Areas/Pain/hip 1.png',
        2: './assets/Body Areas/Pain/hip 2.png',
        3: './assets/Body Areas/Pain/hip 3.png'
    }
};

let painVisible = false;

function updatePainOverlay() {
  const overlay = document.getElementById('imgPainOverlay');
  if (!overlay) return;
  const areaPain = painImages[currentArea];
  const src = areaPain ? (areaPain[currentBodyType] || areaPain['1']) : null;
  if (src) {
    overlay.src = src;
  } else {
    overlay.removeAttribute('src');
  }
  overlay.classList.toggle('visible', painVisible && !!src);
}

let currentArea = 'head'; // default
let currentBodyType = '1';
let currentSkinTone = 'greyscale'; // default

const stencilImage = sessionStorage.getItem('stencil');
const stencilBox = document.getElementById('stencilBox');
const stencilImg = document.getElementById('imgStencil');

function changeSkinTone(tone) {
    currentSkinTone = tone;
    updateImage();
}

function changeBodyType(type) {
    currentBodyType = type;
    updateImage();
}

function changeBodyArea(area) {
    currentArea = area;
    updateImage();
    resetStencilPosition();
}

function updateImage() {
  const img = document.getElementById('imgBodyArea');
  if (!img) return;
  const areaData = bodyImages[currentArea];
  if (!areaData) return;
  const typeData = areaData[currentBodyType] || areaData['1'];
  if (!typeData) return;
  const newSrc = typeData[currentSkinTone] ?? typeData.light ?? typeData.greyscale;
  img.src = newSrc;
  updatePainOverlay();
  img.onload = () => { if (window.updateStencilMask) window.updateStencilMask(); };
  if (img.complete && window.updateStencilMask) window.updateStencilMask();
}

function resetStencilPosition() {
  if (!stencilBox) return;
  // back to center, no rotation, default size
  gsap.set(stencilBox, {
    x: 0,
    y: 0,
    xPercent: -50,
    yPercent: -50,
    rotation: 0,
    scale: 1,
    width: 220
  });
}

function showStencil() {
  if (!stencilBox || !stencilImg || !stencilImage) return;
  stencilImg.src = stencilImage;
  stencilBox.style.display = 'block';
}

if (document.getElementById('imgBodyArea')) {
  updateImage();
  showStencil();
}

// Export & Share
const downloadBtn = document.getElementById('downloadBtn');
const copyLinkBtn = document.getElementById('copyLinkBtn');
const shareBtn = document.getElementById('shareBtn');
const shareStatus = document.getElementById('shareStatus');

// Find the body + stencil images - tries both IDs so it can't be null
function getBodyImg() {
  return document.getElementById('imgBodyArea')
      || document.getElementById('imgBody')
      || document.querySelector('.try-on-area img');
}
function getStencilImg() {
  return document.getElementById('imgStencil');
}

function getDesignState() {
  const stencilElNow = document.getElementById('imgStencil');
  return {
    skin: currentSkinTone,
    body: currentBodyType,
    area: currentArea,
    flipX: window.flipX ?? 1,
    opacity: stencilElNow ? Number(stencilElNow.style.opacity || 1) : 1,
    x: stencilBox ? gsap.getProperty(stencilBox, 'x') : 0,
    y: stencilBox ? gsap.getProperty(stencilBox, 'y') : 0,
    rotation: stencilBox ? gsap.getProperty(stencilBox, 'rotation') : 0,
    width: stencilBox ? stencilBox.offsetWidth : 220,
  };
}

function getShareLink() {
  const state = getDesignState();
  const encoded = btoa(JSON.stringify(state));
  return `${location.origin}${location.pathname}#design=${encoded}`;
}

function loadFromLink() {
  const hash = location.hash;
  if (!hash.startsWith('#design=')) return;
  try {
    const state = JSON.parse(atob(hash.replace('#design=', '')));

    // 1. Restore body FIRST, on their own lines - not inside gsap.set
    if (state.area) currentArea = state.area;
    if (state.skin) currentSkinTone = state.skin;
    if (state.body) currentBodyType = state.body;
    updateImage();

    // 2. Restore flip + opacity
    if (state.flipX) {
      window.flipX = state.flipX;
      const img = document.getElementById('imgStencil');
      if (img) img.style.scale = `${window.flipX} 1`;
      const flipBtn = document.getElementById('flipHBtn');
      if (flipBtn) flipBtn.classList.toggle('active', window.flipX === -1);
    }
    if (state.opacity != null) {
      const img = document.getElementById('imgStencil');
      if (img) img.style.opacity = state.opacity;
      const opSlider = document.getElementById('opacitySlider');
      const opVal = document.getElementById('opacityValue');
      if (opSlider) opSlider.value = Math.round(state.opacity * 100);
      if (opVal) opVal.textContent = Math.round(state.opacity * 100) + '%';
    }

    // 3. Restore position LAST, as a plain object
    if (stencilBox) {
      gsap.set(stencilBox, {
        x: state.x || 0,
        y: state.y || 0,
        rotation: state.rotation || 0,
        width: state.width || 220,
        scale: 1
      });
    }

    if (window.updateStencilMask) window.updateStencilMask();
  } catch(e) { console.log('Bad share link', e); }
}

async function downloadPNG() {
  const bodyImg = getBodyImg();
  const stencil = getStencilImg();
  if (!bodyImg || !stencil) return;

  const canvas = document.createElement('canvas');
  canvas.width = bodyImg.naturalWidth;
  canvas.height = bodyImg.naturalHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(bodyImg, 0, 0);

  // 1. Draw stencil on its own canvas
  const stencilCanvas = document.createElement('canvas');
  stencilCanvas.width = canvas.width;
  stencilCanvas.height = canvas.height;
  const sCtx = stencilCanvas.getContext('2d');

  const bodyRect = bodyImg.getBoundingClientRect();
  const stencilRect = stencil.getBoundingClientRect();
  const scaleX = canvas.width / bodyRect.width;
  const scaleY = canvas.height / bodyRect.height;

  const cx = (stencilRect.left - bodyRect.left + stencilRect.width / 2) * scaleX;
  const cy = (stencilRect.top - bodyRect.top + stencilRect.height / 2) * scaleY;
  const w = stencilRect.width * scaleX;
  const h = stencilRect.height * scaleY;
  const rot = stencilBox ? gsap.getProperty(stencilBox, 'rotation') * Math.PI / 180 : 0;

  sCtx.save();
  sCtx.translate(cx, cy);
  sCtx.rotate(rot);
  sCtx.scale(window.flipX ?? 1, 1);
  sCtx.globalAlpha = stencilEl ? Number(stencilEl.style.opacity || 1) : 1;
  sCtx.drawImage(stencil, -w/2, -h/2, w, h);
  sCtx.restore();

  

  // 2. Build a mask from the body image
  // Corner pixel = background colour (the gap / outside the body)
  const maskCanvas = document.createElement('canvas');
  maskCanvas.width = canvas.width;
  maskCanvas.height = canvas.height;
  const mCtx = maskCanvas.getContext('2d');
  mCtx.drawImage(bodyImg, 0, 0);
  const imgData = mCtx.getImageData(0, 0, canvas.width, canvas.height);
  const d = imgData.data;
  // sample top-left corner as background
  const br = d[0], bg = d[1], bb = d[2];

  for (let i = 0; i < d.length; i += 4) {
    const r = d[i], g = d[i+1], b = d[i+2];
    // how close is this pixel to background colour?
    const dist = Math.abs(r - br) + Math.abs(g - bg) + Math.abs(b - bb);
    // if it's background -> transparent, else -> keep it
    d[i+3] = dist < 60 ? 0 : 255;
  }
  mCtx.putImageData(imgData, 0, 0);

  // 3. Apply mask to stencil - erases the gap bit
  sCtx.globalCompositeOperation = 'destination-in';
  sCtx.drawImage(maskCanvas, 0, 0);
  sCtx.globalCompositeOperation = 'source-over';

  // 4. Put masked stencil on body
  ctx.drawImage(stencilCanvas, 0, 0);

  const a = document.createElement('a');
  a.download = 'my-tattoo-design.png';
  a.href = canvas.toDataURL('image/png');
  a.click();
  if (shareStatus) shareStatus.textContent = 'Downloaded!';
}

if (downloadBtn) downloadBtn.addEventListener('click', downloadPNG);

if (copyLinkBtn) copyLinkBtn.addEventListener('click', async () => {
  const link = getShareLink();
  try {
    await navigator.clipboard.writeText(link);
    if (shareStatus) shareStatus.textContent = 'Link copied!';
  } catch(e) {
    prompt('Copy this link:', link);
  }
});

if (shareBtn) shareBtn.addEventListener('click', async () => {
  const link = getShareLink();
  if (navigator.share) {
    try { await navigator.share({ title: 'My tattoo design', text: 'Check out my design', url: link }); return; }
    catch(e) {}
  }
  try { await navigator.clipboard.writeText(link); } catch(e) {}
  if (shareStatus) shareStatus.textContent = 'Link copied!';
});




// ---------- Flip + Transparency (Undo lives in animation.js) ----------
window.flipX = 1;
const flipHBtn = document.getElementById('flipHBtn');
const opacitySlider = document.getElementById('opacitySlider');
const opacityValue = document.getElementById('opacityValue');
const stencilEl = document.getElementById('imgStencil');

function applyFlip() {
  if (stencilEl) stencilEl.style.scale = `${window.flipX} 1`;
}

// Flip: animation.js saves state on its own saveState, but it can't see
// this click, so we trigger its save by faking a slider change is messy.
// Instead: just flip - animation.js will save the NEXT drag/slider change.
// If you want Flip itself undoable, keep this one line: it pushes to
// animation.js's stack via the reset button trick is not needed -
// see note below.

if (flipHBtn) {
  flipHBtn.addEventListener('click', () => {
    if (window.saveStencilState) window.saveStencilState(); // save BEFORE
    window.flipX = window.flipX === 1 ? -1 : 1;
    flipHBtn.classList.toggle('active', window.flipX === -1);
    applyFlip();
  });
}

if (opacitySlider) {
  opacitySlider.addEventListener('pointerdown', () => {
    if (window.saveStencilState) window.saveStencilState(); // save BEFORE drag
  });
  opacitySlider.addEventListener('input', () => {
    const v = Number(opacitySlider.value);
    if (stencilEl) stencilEl.style.opacity = v / 100;
    if (opacityValue) opacityValue.textContent = v + '%';
  });
}

const painToggle = document.getElementById('painToggle');
if (painToggle) {
  painToggle.addEventListener('change', () => {
    painVisible = painToggle.checked;
    updatePainOverlay();
  });
}