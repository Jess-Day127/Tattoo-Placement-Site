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

let currentArea = 'torso'; // default
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
}

function updateImage() {
  const img = document.getElementById('imgBodyArea');
  if (!img) return;

  const areaData = bodyImages[currentArea];
  if (!areaData) return;

  // fallback: if this body type doesn't exist for this area, use type 1
  const typeData = areaData[currentBodyType] || areaData['1'];
  if (!typeData) return;

  const newSrc = typeData[currentSkinTone] ?? typeData.light ?? typeData.greyscale;
  img.src = newSrc;

  const clip = document.getElementById('stencilClip');
  if (clip) {
    const maskUrl = `url("${newSrc}")`;
    clip.style.setProperty('--body-mask', maskUrl);
    clip.style.webkitMaskImage = maskUrl;
    clip.style.maskImage = maskUrl;
  }
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

const resetStencilBtn = document.getElementById('resetStencilBtn');
if (resetStencilBtn) {
  resetStencilBtn.addEventListener('click', () => {
    resetStencilPosition();
  });
}