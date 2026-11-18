// Change Body Area Type
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

// Pain Level Overlay
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

let currentArea = 'head';
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
  updateBodyTypeButtons();
}

function changeBodyArea(area) {
  currentArea = area;
  if (!bodyImages[currentArea]?.[currentBodyType]) {
    currentBodyType = '1';
  }
  updateImage();
  resetStencilPosition();
}

function updateBodyTypeButtons() {
  const section = document.getElementById('bodyTypeSection') || document.querySelector('.body-type');
  if (!section) return;

  const variations = Object.keys(bodyImages[currentArea] || {});
  const count = variations.length;

  if (count <= 1) {
    section.style.display = 'none';
    currentBodyType = '1';
    return;
  }

  section.style.display = '';
  const buttons = section.querySelectorAll('button');
  buttons.forEach(btn => {
    const type = btn.dataset.bodyType || btn.textContent.trim();
    const exists = variations.includes(type);
    btn.style.display = exists ? '' : 'none';
    btn.disabled = !exists;
    btn.classList.toggle('active', type === String(currentBodyType));
  });
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
  updateBodyTypeButtons();
  img.onload = () => { if (window.updateStencilMask) window.updateStencilMask(); };
  if (img.complete && window.updateStencilMask) window.updateStencilMask();
}

function resetStencilPosition() {
  if (!stencilBox) return;
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
  if (!stencilBox) return;
  if (!stencilImage) {
    stencilBox.style.display = 'none';
    if (window.setTransformEnabled) window.setTransformEnabled(false);
    return;
  }
  stencilImg.src = stencilImage;
  stencilBox.style.display = 'block';
  if (window.setTransformEnabled) window.setTransformEnabled(true);
}

if (document.getElementById('imgBodyArea')) {
  updateImage();
  showStencil();
}

// --- Export: Download only ---
const downloadBtn = document.getElementById('downloadBtn');
const shareStatus = document.getElementById('shareStatus');

function getBodyImg() {
  return document.getElementById('imgBodyArea')
      || document.getElementById('imgBody')
      || document.querySelector('.try-on-area img');
}
function getStencilImg() {
  return document.getElementById('imgStencil');
}

function renderDesignPNG() {
  const bodyImg = getBodyImg();
  const stencil = getStencilImg();
  if (!bodyImg || !stencil) return null;

  const canvas = document.createElement('canvas');
  canvas.width = bodyImg.naturalWidth;
  canvas.height = bodyImg.naturalHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(bodyImg, 0, 0);

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

  const maskCanvas = document.createElement('canvas');
  maskCanvas.width = canvas.width;
  maskCanvas.height = canvas.height;
  const mCtx = maskCanvas.getContext('2d');
  mCtx.drawImage(bodyImg, 0, 0);
  const imgData = mCtx.getImageData(0, 0, canvas.width, canvas.height);
  const d = imgData.data;
  const br = d[0], bg = d[1], bb = d[2];
  for (let i = 0; i < d.length; i += 4) {
    const dist = Math.abs(d[i] - br) + Math.abs(d[i+1] - bg) + Math.abs(d[i+2] - bb);
    d[i+3] = dist < 60 ? 0 : 255;
  }
  mCtx.putImageData(imgData, 0, 0);
  sCtx.globalCompositeOperation = 'destination-in';
  sCtx.drawImage(maskCanvas, 0, 0);
  sCtx.globalCompositeOperation = 'source-over';
  ctx.drawImage(stencilCanvas, 0, 0);

  return canvas;
}

async function downloadPNG() {
  const canvas = renderDesignPNG();
  if (!canvas) return;
  const blob = await new Promise(res => canvas.toBlob(res, 'image/png'));
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.download = 'my-tattoo-design.png';
  a.href = url;
  a.click();
  URL.revokeObjectURL(url);
  if (shareStatus) shareStatus.textContent = 'Downloaded!';
}

if (downloadBtn) downloadBtn.addEventListener('click', downloadPNG);

// Flip & Transparancy
window.flipX = 1;
const flipHBtn = document.getElementById('flipHBtn');
const opacitySlider = document.getElementById('opacitySlider');
const opacityValue = document.getElementById('opacityValue');
const stencilEl = document.getElementById('imgStencil');

function applyFlip() {
  if (stencilEl) stencilEl.style.scale = `${window.flipX} 1`;
}

if (flipHBtn) {
  flipHBtn.addEventListener('click', () => {
    if (window.saveStencilState) window.saveStencilState();
    window.flipX = window.flipX === 1 ? -1 : 1;
    flipHBtn.classList.toggle('active', window.flipX === -1);
    applyFlip();
  });
}

if (opacitySlider) {
  opacitySlider.addEventListener('pointerdown', () => {
    if (window.saveStencilState) window.saveStencilState();
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