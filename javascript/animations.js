
gsap.registerPlugin(Flip, ScrollTrigger, Draggable); 


/* Features Bento Grid */
console.clear();

gsap.registerPlugin(Flip);

const items = gsap.utils.toArray(".bento-grid .item");
const centerItem = document.querySelector(".bento-grid .item.selected");
const itemsContent = gsap.utils.toArray(".bento-grid .item .item-content");
gsap.set(".bento-grid .item:not(.selected) .description", {
  autoAlpha: 0
});

let state;
items.forEach((e, i) => {
  if (!e.classList.contains("selected")) {
    e.addEventListener("click", () => {
      const content = e.querySelector(".item-content");
      const centerContent = centerItem.querySelector(".item-content");
      state = Flip.getState(itemsContent);

      // Fade out description
      gsap.to(centerItem.querySelector(".description"), {
        autoAlpha: 0,
        ease: "power2.out",
        duration: 0.15
      });

      // Swap contents
      centerItem.appendChild(content);
      e.appendChild(centerContent);

      // Create Flip Animation
      gsap.to(centerItem.querySelector(".description"), {
        autoAlpha: 1,
        delay: 0.25,
        ease: "power1.in",
        duration: 0.25
      });
      Flip.from(state, {
        duration: 0.35,
        ease: "power2.inOut",
        transformOrigin: "center center",
        absolute: true
      });
    });
  }
});

/* Draggable + resize */
gsap.registerPlugin(Draggable);

(() => {
    const stage = document.querySelector('.try-on-area');
    const stencil = document.getElementById('imgStencil');
    if (!stage || !stencil) return;

    const resizeHandle = document.createElement('div');
    resizeHandle.className = 'resize-handle';
    stage.appendChild(resizeHandle);

    const rotateHandle = document.createElement('div');
    rotateHandle.className = 'rotate-handle';
    stage.appendChild(rotateHandle);

    function positionHandles() {
        const stageRect = stage.getBoundingClientRect();
        const sRect = stencil.getBoundingClientRect();

        const cx = sRect.left + sRect.width / 2 - stageRect.left;
        const cy = sRect.top + sRect.height / 2 - stageRect.top;

        const angle = gsap.getProperty(stencil, 'rotation') * Math.PI / 180;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);

        const rx = sRect.width / 2 + 8;
        const ry = sRect.height / 2 + 8;
        gsap.set(resizeHandle, {
            x: cx + rx * cos - ry * sin - 8,
            y: cy + rx * sin + ry * cos - 8,
        });

        const ty = -(sRect.height / 2 + 28);
        gsap.set(rotateHandle, {
            x: cx - ty * sin - 8,
            y: cy + ty * cos - 8,
        });
    }

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
        },
        onDrag(e) {
            const rect = stencil.getBoundingClientRect();
            const angle = gsap.getProperty(stencil, 'rotation') * Math.PI / 180;

            const dx = e.clientX - (rect.left + rect.width / 2);
            const dy = e.clientY - (rect.top + rect.height / 2);
            const localX = dx * Math.cos(-angle) - dy * Math.sin(-angle);

            const w = Math.max(40, localX * 2);
            gsap.set(stencil, { width: w });
            positionHandles();
        },
    });
})();
