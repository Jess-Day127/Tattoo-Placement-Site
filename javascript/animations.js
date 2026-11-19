gsap.registerPlugin(Flip, Draggable, ScrollTrigger);

// Flash Wall
(() => {
  const items = gsap.utils.toArray(".item");
  const details = document.querySelector('.detail');
  if (!items.length || !details) return;

  const detailContent = document.querySelector('.detail .content');
  const detailImage = document.querySelector('.detail img');

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
  if (!stage || !box || !stencilImg || !resizeHandle || !rotateHandle) return;


  const saved = sessionStorage.getItem('stencil');
  const hasStencil = !!saved;

  function setTransformEnabled(enabled) {
  const ids = ['posX', 'posY', 'rotSlider', 'scaleSlider', 'opacitySlider', 'flipHBtn', 'undo-button', 'redo-button', 'resetStencilBtn'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.disabled = !enabled;
  });
  document.querySelector('.left-column')?.classList.toggle('controls-disabled', !enabled);
}
window.setTransformEnabled = setTransformEnabled;

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
  
    const boxCx = boxRect.left + boxRect.width / 2;
    const boxCy = boxRect.top + boxRect.height / 2;
    const stageCx = stageRect.left + stageRect.width / 2;
    const stageCy = stageRect.top + stageRect.height / 2;

    const maxDx = Math.max(0, (stageRect.width - boxRect.width) / 2);
    const maxDy = Math.max(0, (stageRect.height - boxRect.height) / 2);
    let dx = boxCx - stageCx;
    let dy = boxCy - stageCy;
    dx = Math.max(-maxDx, Math.min(maxDx, dx));
    dy = Math.max(-maxDy, Math.min(maxDy, dy));

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
  clip.style.webkitMaskImage = `url("${bodyImg.src}")`;
  clip.style.maskImage = `url("${bodyImg.src}")`;
  clip.style.webkitMaskSize = `${bodyRect.width}px ${bodyRect.height}px`;
  clip.style.maskSize = `${bodyRect.width}px ${bodyRect.height}px`;
  clip.style.webkitMaskPosition = `${bodyRect.left - boxRect.left}px ${bodyRect.top - boxRect.top}px`;
  clip.style.maskPosition = `${bodyRect.left - boxRect.left}px ${bodyRect.top - boxRect.top}px`;
}
  

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

  document.addEventListener('pointerdown', (e) => {
  if (e.target.closest('#resizeHandle, #rotateHandle')) return;
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
      rotation: gsap.getProperty(stencilImg, 'rotation'),
      width: box.offsetWidth,
      flipX: window.flipX ?? 1,
      opacity: stencilImg ? Number(stencilImg.style.opacity || 1) : 1,
    };
  }

  function applyState(s) {
    isApplying = true;
    gsap.set(box, { x: s.x, y: s.y, width: s.width, scale: 1 });
    gsap.set(stencilImg, { rotation: s.rotation, scaleX: s.flipX ?? 1 });
    window.flipX = s.flipX ?? 1;
    if (stencilImg) {
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
    el.addEventListener('pointerdown', () => saveState());
    el.addEventListener('input', () => { fn(parseFloat(el.value)); syncSliders(); });
  }

  bindSlider(posX, v => { gsap.set(box, { x: v }); clampToStage(); updateStencilMask(); });
  bindSlider(posY, v => { gsap.set(box, { y: v }); clampToStage(); updateStencilMask(); });
  bindSlider(rotSlider, v => { gsap.set(stencilImg, { rotation: v }); updateStencilMask(); });
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
    gsap.set(box, { x: 0, y: 0, xPercent: -50, yPercent: -50, scale: 1, width: 220 });
    gsap.set(stencilImg, { rotation: 0 });
    syncSliders();
    updateStencilMask();
  });

    function setTransformEnabled(enabled) {
    const ids = ['posX', 'posY', 'rotSlider', 'scaleSlider', 'opacitySlider', 'flipHBtn', 'undo-button', 'redo-button', 'resetStencilBtn'];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.disabled = !enabled;
    });
  
    document.querySelector('.left-column')?.classList.toggle('controls-disabled', !enabled);
  }

  function positionHandles() {
    gsap.set(resizeHandle, { x: 0, y: 0, left: box.offsetWidth - 8, top: box.offsetHeight - 8 });
  }


  Draggable.create(box, {
    type: 'x,y',
    bounds: stage,
    onPress(e) {
      if (e.target.closest('#resizeHandle, #rotateHandle')) {
        this.endDrag();
        return false;
      }
      select();
    },
    onDrag() { clampToStage(); syncSliders(); updateStencilMask(); },
    onRelease() { clampToStage(); saveState(); syncSliders(); updateStencilMask(); positionHandles(); }
  });

  // RESIZE
  Draggable.create(resizeHandle, {
    type: 'top,left',
    onPress(e) {
      e.stopPropagation();
      select();
    },
    onDrag(e) {
      const newWidth = Math.max(40, Math.min(
        Math.min(stage.offsetWidth, stage.offsetHeight),
        this.x + 14
      ));
      gsap.set(box, { width: newWidth, scale: 1 });
      gsap.set(resizeHandle, { left: newWidth - 16, top: newWidth - 16 });
      clampToStage();
      syncSliders();
      updateStencilMask();
    },
    onRelease() {
      saveState();
      syncSliders();
      updateStencilMask();
      positionHandles();
    }
  });

    // ROTATE 
  let rotatePointerId = null;
  let rotateStartAngle = 0;
  let rotateStartRotation = 0;

  rotateHandle.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    select();
    rotatePointerId = e.pointerId;
    try { rotateHandle.setPointerCapture(e.pointerId); } catch(err) {}
    const { cx, cy, stageRect } = boxCentre();
    rotateStartAngle = Math.atan2(e.clientY - stageRect.top - cy, e.clientX - stageRect.left - cx);
    rotateStartRotation = gsap.getProperty(stencilImg, 'rotation');
  });

  stage.addEventListener('pointermove', (e) => {
    if (rotatePointerId === null || e.pointerId !== rotatePointerId) return;
    e.preventDefault();
    const { cx, cy, stageRect } = boxCentre();
    const now = Math.atan2(e.clientY - stageRect.top - cy, e.clientX - stageRect.left - cx);
    const delta = (now - rotateStartAngle) * 180 / Math.PI;
    gsap.set(stencilImg, { rotation: rotateStartRotation + delta });
    syncSliders();
    updateStencilMask();
  }, { passive: false });

  function endRotate(e) {
    if (rotatePointerId === null || e.pointerId !== rotatePointerId) return;
    rotatePointerId = null;
    saveState();
    syncSliders();
    updateStencilMask();
  }
  stage.addEventListener('pointerup', endRotate);
  stage.addEventListener('pointercancel', endRotate);

  positionHandles();
  saveState();
  window.saveStencilState = saveState;
  syncSliders();
  updateUndoButtons();
  select();
})(); 

// Before/After Scroll
(() => {
  const afterLayer = document.getElementById('afterLayer');
  const afterImg = document.getElementById('afterImg');
  if (!afterLayer || !afterImg) return;

  gsap.set(afterLayer, { clearProps: 'transform,xPercent,x' });
  gsap.set(afterImg, { clearProps: 'transform,xPercent,x' });

  let target = 0;  
  let current = 0;  
  let enabled = false;


  function render() {
    current += (target - current) * 0.12; // smoothing 
    if (Math.abs(target - current) < 0.001) current = target;
    afterLayer.style.clipPath = `inset(0% 0% 0% ${(1 - current) * 100}%)`;
  }
  gsap.ticker.add(render);

  function setWipe(p) {
    target = Math.max(0, Math.min(1, p));
    if (!enabled) { current = target; render(); }
  }

  window.addEventListener('wheel', (e) => {
    if (!enabled) return;
    e.preventDefault();
    setWipe(target + e.deltaY / 800);
  }, { passive: false });

  let lastY = 0;
  window.addEventListener('touchstart', (e) => { lastY = e.touches[0].clientY; }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    if (!enabled) return;
    e.preventDefault();
    const y = e.touches[0].clientY;
    setWipe(target + (lastY - y) / 400);
    lastY = y;
  }, { passive: false });

  window.wipe = {
    scrollTrigger: {
      enable: () => { enabled = true; target = 0; current = 0; render(); },
      disable: () => { enabled = false; target = 0; current = 0; render(); },
    }
  };
  window.setCompareWipe = setWipe;
})();


gsap.registerPlugin(ScrollTrigger);


const mm = gsap.matchMedia();

mm.add("(min-width: 601px)", () => {
  const panels = gsap.utils.toArray(".section");
  panels.pop(); 

  panels.forEach((panel) => {
    const inner = panel.querySelector(".section-inner");
    if (!inner) return;

    const panelHeight = inner.offsetHeight;
    const windowHeight = window.innerHeight;
    const difference = panelHeight - windowHeight;

    const fakeScrollRatio = difference > 0 ? (difference / (difference + windowHeight)) : 0;

    if (fakeScrollRatio) {
      panel.style.marginBottom = panelHeight * fakeScrollRatio + "px";
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: panel,
        start: "bottom bottom",
        end: () => fakeScrollRatio ? `+=${inner.offsetHeight}` : "bottom top",
        pinSpacing: false,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true
      }
    });

    if (fakeScrollRatio) {
      tl.to(inner, {
        yPercent: -100,
        y: windowHeight,
        duration: 1 / (1 - fakeScrollRatio) - 1,
        ease: "none"
      });
    }

    tl.fromTo(panel, { scale: 1, opacity: 1 }, { scale: 0.7, opacity: 0.5, duration: 0.9 })
      .to(panel, { opacity: 0, duration: 0.1 });
  });

  window.addEventListener("load", () => ScrollTrigger.refresh());

  return () => {
    panels.forEach((p) => { p.style.marginBottom = ""; });
  };
});

mm.add("(max-width: 600px)", () => {
  // Mobile: clear any leftover OG inline styles
  gsap.utils.toArray(".section").forEach((panel) => {
    panel.style.marginBottom = "";
    gsap.set(panel, { clearProps: "all" });
    const inner = panel.querySelector(".section-inner");
    if (inner) gsap.set(inner, { clearProps: "all" });
  });
  ScrollTrigger.refresh();
});