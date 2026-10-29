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