gsap.registerPlugin(Flip, Draggable, ScrollTrigger);

/* ===== Flash Wall - ONLY on pages with .detail / .item ===== */
(() => {
  const items = gsap.utils.toArray(".item");
  const details = document.querySelector('.detail');
  if (!items.length || !details) return; // <-- FIX: skip on try-on + upload, don't crash

  const detailContent = document.querySelector('.detail .content');
  const detailImage = document.querySelector('.detail img');
  const detailTitle = document.querySelector('.detail .title');

  let activeItem;

  gsap.set(detailContent, { yPercent: -100 });

  function showDetails(item) {
    if (activeItem) return hideDetails();
    let onLoad = () => {
      Flip.fit(details, item, { scale: true, fitChild: detailImage });
      const state = Flip.getState(details);
      gsap.set(details, { clearProps: true });
      gsap.set(details, { xPercent: -50, top: "50%", yPercent: -50, visibility: "visible", overflow: "hidden" });
      Flip.from(state, {
        duration: 0.5,
        ease: "power2.inOut",
        scale: true,
        onComplete: () => gsap.set(details, { overflow: "auto" })
      }).to(detailContent, { yPercent: 0 }, 0.2);
      detailImage.removeEventListener("load", onLoad);
    };
    const data = item.dataset;
    detailImage.addEventListener("load", onLoad);
    detailImage.src = item.querySelector('img').src;
    detailTitle.innerText = data.title;
    gsap.to(items, { opacity: 0.3, stagger: { amount: 0.7, from: items.indexOf(item), grid: "auto" } });
    activeItem = item;
  }

  function hideDetails() {
    if (!activeItem) return;
    const itemToClose = activeItem;
    activeItem = null;
    gsap.set(details, { overflow: "hidden" });
    const state = Flip.getState(details);
    Flip.fit(details, itemToClose, { scale: true, fitChild: detailImage });
    const tl = gsap.timeline();
    tl.set(details, { overflow: "hidden" })
      .to(detailContent, { yPercent: -100 })
      .to(items, { opacity: 1, stagger: { amount: 0.7, from: items.indexOf(itemToClose), grid: "auto" } })
      .to(".flash-wall", { backgroundColor: "lightcoral" }, "<");
    Flip.from(state, {
      scale: true,
      duration: 0.5,
      delay: 0.2,
      onInterrupt: () => tl.kill()
    }).set(details, { visibility: "hidden" });
  }

  items.forEach(item => item.addEventListener('click', () => showDetails(item)));

  details.addEventListener('click', (e) => {
    e.stopPropagation();
    if (activeItem) hideDetails();
  });
})();

/* ===== Draggable + resize + rotate - ONLY on try-on ===== */
(() => {
  const stage = document.querySelector('.try-on-area');
  const box = document.getElementById('stencilBox');
  const stencilImg = document.getElementById('imgStencil');
  const resizeHandle = document.getElementById('resizeHandle');
  const rotateHandle = document.getElementById('rotateHandle');
  if (!stage || !box || !stencilImg || !resizeHandle || !rotateHandle) return; // skip on home + upload

  const saved = sessionStorage.getItem('stencil');
  if (saved) stencilImg.src = saved;

  gsap.set(box, { xPercent: -50, yPercent: -50, transformOrigin: 'center center', scale: 1 });

  let startWidth = 220, startDist = 1, centre = { cx: 0, cy: 0 };
  let startAngle = 0, startRotation = 0;

  function boxCentre() {
    const stageRect = stage.getBoundingClientRect();
    const boxRect = box.getBoundingClientRect();
    return {
      cx: boxRect.left - stageRect.left + boxRect.width / 2,
      cy: boxRect.top - stageRect.top + boxRect.height / 2,
      stageRect,
    };
  }

  // FIX 1: removed positionHandles() - it doesn't exist
  function select() {
    box.classList.add('selected');
    resizeHandle.classList.add('visible');
    rotateHandle.classList.add('visible');
  }

  function deselect() {
    box.classList.remove('selected');
    resizeHandle.classList.remove('visible');
    rotateHandle.classList.remove('visible');
  }

  box.addEventListener('pointerdown', select);
  document.addEventListener('pointerdown', (e) => {
    if (!box.contains(e.target)) deselect();
  });

  Draggable.create(box, {
    type: 'x,y',
    bounds: stage,
    onPress() { select(); }
  });

  Draggable.create(resizeHandle, {
    type: 'x,y',
    trigger: resizeHandle,
    onPress(e) {
      e.stopPropagation();
      select();
      startWidth = box.offsetWidth;
      const c = boxCentre();
      centre = c;
      startDist = Math.hypot(
        e.clientX - c.stageRect.left - c.cx,
        e.clientY - c.stageRect.top - c.cy
      ) || 1;
    },
    onDrag(e) {
      const { cx, cy, stageRect } = boxCentre();
      const dist = Math.hypot(
        e.clientX - stageRect.left - cx,
        e.clientY - stageRect.top - cy
      );
      const newWidth = Math.max(40, startWidth * (dist / startDist));
      gsap.set(box, { width: newWidth, scale: 1 });
      gsap.set(resizeHandle, { x: 0, y: 0 });
    },
    onRelease() {
      gsap.set(resizeHandle, { x: 0, y: 0 });
    }
  });

  Draggable.create(rotateHandle, {
    type: 'x,y',
    trigger: rotateHandle,
    onPress(e) {
      e.stopPropagation();
      select();
      const { cx, cy, stageRect } = boxCentre();
      startAngle = Math.atan2(
        e.clientY - stageRect.top - cy,
        e.clientX - stageRect.left - cx
      );
      startRotation = gsap.getProperty(box, 'rotation');
    },
    onDrag(e) {
      const { cx, cy, stageRect } = boxCentre();
      const now = Math.atan2(
        e.clientY - stageRect.top - cy,
        e.clientX - stageRect.left - cx
      );
      const delta = (now - startAngle) * 180 / Math.PI;
      gsap.set(box, { rotation: startRotation + delta });
      gsap.set(rotateHandle, { x: 0, y: 0 });
    },
    onRelease() {
      gsap.set(rotateHandle, { x: 0, y: 0 });
    }
  });

  select();
})();


/* Scroll to stencil */
(() => {
  const uploadSection = document.querySelector('.upload-section');
  const afterLayer = document.getElementById('afterLayer');
  const afterImg = document.getElementById('afterImg');
  if (!uploadSection || !afterLayer || !afterImg) return; // skip on home + try-on

  gsap.set("#afterLayer", { xPercent: 100 });
  gsap.set("#afterImg", { xPercent: -100 });

  const wipe = gsap.timeline({
    scrollTrigger: {
      trigger: ".upload-section",
      start: "top top",
      end: "+=800",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      enabled: false
    },
    defaults: { ease: "none" }
  });

  wipe
    .to("#afterLayer", { xPercent: 0 }, 0)
    .to("#afterImg", { xPercent: 0 }, 0);

  // so upload.js can enable/disable it
  window.wipe = wipe;
})();