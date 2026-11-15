
gsap.registerPlugin(Flip, Draggable, ScrollTrigger); 


/* Flash Wall*/
gsap.registerPlugin(Flip);

const items = gsap.utils.toArray(".item"),
      details = document.querySelector('.detail'),
      detailContent = document.querySelector('.detail .content'),
      detailImage = document.querySelector('.detail img'),
      detailTitle = document.querySelector('.detail .title'),
      detailDescription = document.querySelector('.detail .description');

let activeItem;

gsap.set(detailContent, { yPercent: -100 });

function showDetails(item) {
  if (activeItem) {
    return hideDetails();
  }
  let onLoad = () => {
    Flip.fit(details, item, {scale: true, fitChild: detailImage});
    const state = Flip.getState(details);

    gsap.set(details, {clearProps: true});
    gsap.set(details, {xPercent: -50, top: "50%", yPercent: -50, visibility: "visible", overflow: "hidden"});

    Flip.from(state, {
      duration: 0.5,
      ease: "power2.inOut",
      scale: true,
      onComplete: () => gsap.set(details, {overflow: "auto"})
    })
      .to(detailContent, {yPercent: 0}, 0.2);

    detailImage.removeEventListener("load", onLoad);
  };

  const data = item.dataset;
  detailImage.addEventListener("load", onLoad);
  detailImage.src = item.querySelector('img').src;
  detailTitle.innerText = data.title;
  detailDescription.innerText = data.description;

  gsap.to(items, {opacity: 0.3, stagger: { amount: 0.7, from: items.indexOf(item), grid: "auto"}});
  activeItem = item;
}

function hideDetails() {
  if (!activeItem) return;
  const itemToClose = activeItem;
  activeItem = null;
  gsap.set(details, {overflow: "hidden"});

  const state = Flip.getState(details);
  Flip.fit(details, itemToClose, {scale: true, fitChild: detailImage});

  const tl = gsap.timeline();
  tl.set(details, {overflow: "hidden"})
    .to(detailContent, {yPercent: -100})
    .to(items, {opacity: 1, stagger: {amount: 0.7, from: items.indexOf(itemToClose), grid: "auto"}})
    .to(".flash-wall", {backgroundColor: "lightcoral"}, "<");

  Flip.from(state, {
    scale: true,
    duration: 0.5,
    delay: 0.2,
    onInterrupt: () => tl.kill()
  })
    .set(details, {visibility: "hidden"});
}

gsap.utils.toArray('.item').forEach(item => item.addEventListener('click', () => showDetails(item)));

// Close when you click the big image - OG used document click, this is the same idea but stops it re-opening
details.addEventListener('click', (e) => {
  e.stopPropagation();
  if (activeItem) hideDetails();
});

/* Draggable + resize */
gsap.registerPlugin(Draggable);

(() => {
    const stage = document.querySelector('.try-on-area');
    const stencil = document.getElementById('imgStencil');
    if (!stage || !stencil) return;

    const resizeHandle = document.createElement('div');
    resizeHandle.className = 'resize-handle';
    resizeHandle.id ='resizeHandle';
    stage.appendChild(resizeHandle);

    const rotateHandle = document.createElement('div');
    rotateHandle.className = 'rotate-handle';
    rotateHandle.id = 'rotateHandle';
    stage.appendChild(rotateHandle);

    gsap.set(stencil, { transformOrigin: 'center center' });
    gsap.set([resizeHandle, rotateHandle], { xPercent: -50, yPercent: -50 });

    // centre of the stencil in stage coordinates, ignoring rotation
    function stencilCentre() {
        const stageRect = stage.getBoundingClientRect();
        const x = gsap.getProperty(stencil, 'x');
        const y = gsap.getProperty(stencil, 'y');
        const w = stencil.offsetWidth;
        const h = stencil.offsetHeight;

        // offsetLeft/Top are the untransformed layout position
        return {
            cx: stencil.offsetLeft + w / 2 + x,
            cy: stencil.offsetTop + h / 2 + y,
            w,
            h,
            stageRect,
        };
    }

    function positionHandles() {
      const { cx, cy, w, h } = stencilCentre();
      const angle = gsap.getProperty(stencil, 'rotation') * Math.PI / 180;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

        // bottom-right corner, rotated about the centre
      const rx = w / 2 + 10;
      const ry = h / 2 + 10;
      gsap.set(resizeHandle, {
          x: cx + rx * cos - ry * sin,
          y: cy + rx * sin + ry * cos,
      });

        // above the top edge, rotated about the centre
      const ty = -(h / 2 + 30);
      gsap.set(rotateHandle, {
          x: cx - ty * sin,
          y: cy + ty * cos,
      });
    }

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

    Draggable.create(stencil, {
      type: 'x,y',
      bounds: stage,
      onPress() {
        select();
        gsap.set(stencil, { zIndex: 5 });
      },
        onDrag: positionHandles,
        onRelease: positionHandles,
    });

    
    Draggable.create(resizeHandle, {
      type: 'x,y',
      onPress(e) {
        e.stopPropagation();
        select();

        startScale = gsap.getProperty(stencil, 'scale');
        const c = stencilCentre();
        centre = { cx: c.cx, cy: c.cy };

        const stageRect = stage.getBoundingClientRect();
        startDist = Math.hypot(
            e.clientX - stageRect.left - centre.cx,
            e.clientY - stageRect.top - centre.cy
        ) || 1;
      },
      onDrag(e) {
        const stageRect = stage.getBoundingClientRect();
        const dist = Math.hypot(
            e.clientX - stageRect.left - centre.cx,
            e.clientY - stageRect.top - centre.cy
        );

        const scale = Math.max(0.1, startScale * (dist / startDist));
        gsap.set(stencil, { scale });

        // move the handle to the pointer — do NOT call positionHandles() here
        gsap.set(resizeHandle, {
            x: e.clientX - stageRect.left,
            y: e.clientY - stageRect.top,
        });
      },
    onRelease() {
        positionHandles();   // re-snap to the true corner
    },
  });
  
    Draggable.create(rotateHandle, {
        type: 'x,y',
        onPress(e) {
            e.stopPropagation();
            select();
            const { cx, cy } = stencilCentre();
            const stageRect = stage.getBoundingClientRect();
            startAngle = Math.atan2(e.clientY - stageRect.top - cy,
                                    e.clientX - stageRect.left - cx);
            startRotation = gsap.getProperty(stencil, 'rotation');
        },
        onDrag(e) {
            const { cx, cy } = stencilCentre();
            const stageRect = stage.getBoundingClientRect();
            const now = Math.atan2(e.clientY - stageRect.top - cy,
                                   e.clientX - stageRect.left - cx);
            const delta = (now - startAngle) * 180 / Math.PI;

            gsap.set(stencil, { rotation: startRotation + delta });
            positionHandles();
        },
    });

    positionHandles();
})();


/* Scroll to stencil */
gsap.registerPlugin(ScrollTrigger);

// AFTER starts parked off to the right
gsap.set("#afterLayer", { xPercent: 100 });
gsap.set("#afterImg", { xPercent: -100 });

const wipe = gsap.timeline({
  scrollTrigger: {
    trigger: ".upload-section",
    start: "top top",     // lock when section hits top
    end: "+=800",         // 800px of scroll = full wipe. Higher = slower
    scrub: 1,             // smooths scroll-back-up judder
    pin: true,            // screen stays fixed while wiping
    anticipatePin: 1,
    invalidateOnRefresh: true,
    enabled: false        // only pin after Convert
  },
  defaults: { ease: "none" }
});

wipe
  .to("#afterLayer", { xPercent: 0 }, 0)
  .to("#afterImg", { xPercent: 0 }, 0); 