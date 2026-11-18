gsap.registerPlugin(Flip, Draggable, ScrollTrigger);

// Flash Wall
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

// Drag, Resize & Rotate
(() => {
  const stage = document.querySelector('.try-on-area');
  const box = document.getElementById('stencilBox');
  const stencilImg = document.getElementById('imgStencil');
  const resizeHandle = document.getElementById('resizeHandle');
  const rotateHandle = document.getElementById('rotateHandle');
  if (!stage || !box || !stencilImg || !resizeHandle || !rotateHandle) return; // skip on home + upload


  const saved = sessionStorage.getItem('stencil');
  const hasStencil = !!saved;

  if (!hasStencil) {
    box.style.display = 'none';
    setTransformEnabled(false);
    return;
  }

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

  function clampToStage() {
    const stageRect = stage.getBoundingClientRect();
    const boxRect = box.getBoundingClientRect();
    // How far is the box centre from the stage centre right now?
    const boxCx = boxRect.left + boxRect.width / 2;
    const boxCy = boxRect.top + boxRect.height / 2;
    const stageCx = stageRect.left + stageRect.width / 2;
    const stageCy = stageRect.top + stageRect.height / 2;
    // How far CAN it go before an edge hits?
    const maxDx = Math.max(0, (stageRect.width - boxRect.width) / 2);
    const maxDy = Math.max(0, (stageRect.height - boxRect.height) / 2);
    let dx = boxCx - stageCx;
    let dy = boxCy - stageCy;
    dx = Math.max(-maxDx, Math.min(maxDx, dx));
    dy = Math.max(-maxDy, Math.min(maxDy, dy));
    // Push it back by the difference
    const curX = gsap.getProperty(box, 'x');
    const curY = gsap.getProperty(box, 'y');
    gsap.set(box, {
      x: curX + (stageCx + dx - boxCx),
      y: curY + (stageCy + dy - boxCy)
    });
  }

  function updateSliderLimits() {
    if (!posX || !posY) return;
    const stageRect = stage.getBoundingClientRect();
    const boxRect = box.getBoundingClientRect();
    const maxX = Math.max(0, (stageRect.width - boxRect.width) / 2);
    const maxY = Math.max(0, (stageRect.height - boxRect.height) / 2);
    posX.min = -maxX;
    posX.max = maxX;
    posY.min = -maxY;
    posY.max = maxY;
    if (scaleSlider) {
      scaleSlider.max = Math.floor(Math.min(stageRect.width, stageRect.height));
    }
  }

  function updateStencilMask() {
    const bodyImg = document.getElementById('imgBodyArea');
    const clip = document.getElementById('stencilClip');
    if (!bodyImg || !clip || !box) return;
    const bodyRect = bodyImg.getBoundingClientRect();
    const boxRect = box.getBoundingClientRect();
    const maskUrl = `url("${bodyImg.src}")`;
    clip.style.webkitMaskImage = maskUrl;
    clip.style.maskImage = maskUrl;
    clip.style.webkitMaskSize = `${bodyRect.width}px ${bodyRect.height}px`;
    clip.style.maskSize = `${bodyRect.width}px ${bodyRect.height}px`;
    clip.style.webkitMaskPosition = `${bodyRect.left - boxRect.left}px ${bodyRect.top - boxRect.top}px`;
    clip.style.maskPosition = `${bodyRect.left - boxRect.left}px ${bodyRect.top - boxRect.top}px`;
  }
  window.updateStencilMask = updateStencilMask;
  window.addEventListener('resize', updateStencilMask);

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

    // Sliders & Undo/Redo
  const posX = document.getElementById('posX');
  const posY = document.getElementById('posY');
  const rotSlider = document.getElementById('rotSlider');
  const scaleSlider = document.getElementById('scaleSlider');
  const undoBtn = document.getElementById('undo-button');
  const redoBtn = document.getElementById('redo-button');
  const resetBtn = document.getElementById('resetStencilBtn');

  let undoStack = [];
  let redoStack = [];
  let isApplying = false;

    function getState() {
    return {
      x: gsap.getProperty(box, 'x'),
      y: gsap.getProperty(box, 'y'),
      rotation: gsap.getProperty(box, 'rotation'),
      width: box.offsetWidth,
      flipX: window.flipX ?? 1,
      opacity: stencilImg ? Number(stencilImg.style.opacity || 1) : 1,
    };
  }

  function applyState(s) {
    isApplying = true;
    gsap.set(box, { x: s.x, y: s.y, rotation: s.rotation, width: s.width, scale: 1 });
    window.flipX = s.flipX ?? 1;
    if (stencilImg) {
      stencilImg.style.scale = `${window.flipX} 1`;
      stencilImg.style.opacity = s.opacity ?? 1;
    }
    const opSlider = document.getElementById('opacitySlider');
    const opVal = document.getElementById('opacityValue');
    const flipBtn = document.getElementById('flipHBtn');
    if (opSlider) opSlider.value = Math.round((s.opacity ?? 1) * 100);
    if (opVal) opVal.textContent = Math.round((s.opacity ?? 1) * 100) + '%';
    if (flipBtn) flipBtn.classList.toggle('active', window.flipX === -1);
    syncSliders();
    updateStencilMask();
    isApplying = false;
  }

  function saveState() {
    if (isApplying) return;
    undoStack.push(getState());
    if (undoStack.length > 50) undoStack.shift();
    redoStack = [];
    updateUndoButtons();
  }

  function updateUndoButtons() {
    if (undoBtn) undoBtn.disabled = undoStack.length === 0;
    if (redoBtn) redoBtn.disabled = redoStack.length === 0;
  }

  function syncSliders() {
    updateSliderLimits();
    const s = getState();
    if (posX) posX.value = s.x;
    if (posY) posY.value = s.y;
    if (rotSlider) rotSlider.value = s.rotation;
    if (scaleSlider) scaleSlider.value = s.width;
  }

  function bindSlider(el, fn) {
    if (!el) return;
    el.addEventListener('pointerdown', () => saveState()); // before
    el.addEventListener('input', () => { fn(parseFloat(el.value)); syncSliders(); });
    // delete the 'change' saveState
  }

  bindSlider(posX, v => { gsap.set(box, { x: v }); clampToStage(); updateStencilMask(); });
  bindSlider(posY, v => { gsap.set(box, { y: v }); clampToStage(); updateStencilMask(); });
  bindSlider(rotSlider, v => { gsap.set(box, { rotation: v }); clampToStage(); updateStencilMask(); });
  bindSlider(scaleSlider, v => { gsap.set(box, { width: v, scale: 1 }); clampToStage(); updateStencilMask(); });

  if (undoBtn) undoBtn.addEventListener('click', () => {
    if (!undoStack.length) return;
    redoStack.push(getState());
    applyState(undoStack.pop());
    updateUndoButtons();
  });

  if (redoBtn) redoBtn.addEventListener('click', () => {
    if (!redoStack.length) return;
    undoStack.push(getState());
    applyState(redoStack.pop());
    updateUndoButtons();
  });

  if (resetBtn) resetBtn.addEventListener('click', () => {
    saveState();
    gsap.set(box, { x: 0, y: 0, xPercent: -50, yPercent: -50, rotation: 0, scale: 1, width: 220 });
    syncSliders();
    updateStencilMask();
  });

    function setTransformEnabled(enabled) {
    const ids = ['posX', 'posY', 'rotSlider', 'scaleSlider', 'opacitySlider', 'flipHBtn', 'undo-button', 'redo-button', 'resetStencilBtn'];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.disabled = !enabled;
    });
    // Also grey out the whole left column so it's obvious
    document.querySelector('.left-column')?.classList.toggle('controls-disabled', !enabled);
  }

  Draggable.create(box, {
    type: 'x,y',
    bounds: stage,
    onPress() { select(); },
    onDrag() { clampToStage(); syncSliders(); updateStencilMask(); },
    onRelease() { clampToStage(); saveState(); syncSliders(); updateStencilMask(); }
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
      const maxSize = Math.min(stageRect.width, stageRect.height);
      const newWidth = Math.max(40, Math.min(maxSize, startWidth * (dist / startDist)));
      gsap.set(box, { width: newWidth, scale: 1 });
      gsap.set(resizeHandle, { x: 0, y: 0 });
      clampToStage();
      syncSliders();
      updateStencilMask();
    },
    onRelease() {
      gsap.set(resizeHandle, { x: 0, y: 0 });
      saveState();
      syncSliders();
      updateStencilMask();
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
      syncSliders();
      updateStencilMask();
    },
    onRelease() {
      gsap.set(rotateHandle, { x: 0, y: 0 });
      saveState();
      syncSliders();
      updateStencilMask();
    }
  });
  saveState();
  window.saveStencilState = saveState;
  syncSliders();
  updateUndoButtons();
  setTransformEnabled(true);
  select();
})();

// Stencil Before -> After Scroll
(() => {
  const uploadSection = document.querySelector('.upload-section');
  const afterLayer = document.getElementById('afterLayer');
  const afterImg = document.getElementById('afterImg');
  if (!uploadSection || !afterLayer || !afterImg) return;

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

  window.wipe = wipe;
})();