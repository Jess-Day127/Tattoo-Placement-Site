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
  // Add click event listener only to the non selected items
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

    const handle = document.createElement('div');
    handle.className = 'resize-handle';
    stage.appendChild(handle);

    function positionHandle() {
        gsap.set(handle, {
            x: stencil.offsetLeft + stencil.offsetWidth - 8,
            y: stencil.offsetTop + stencil.offsetHeight - 8,
        });
    }

    function select() {
        stencil.classList.add('selected');
        handle.classList.add('visible');
        positionHandle();
    }

    function deselect() {
        stencil.classList.remove('selected');
        handle.classList.remove('visible');
    }

    // click the stencil → select
    stencil.addEventListener('pointerdown', select);

    // click anywhere else → deselect
    document.addEventListener('pointerdown', (e) => {
        if (!stencil.contains(e.target) && !handle.contains(e.target)) {
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
        onDrag: positionHandle,
        onRelease: positionHandle,
    });

    Draggable.create(handle, {
        type: 'x,y',
        onPress(e) {
            e.stopPropagation();
        },
        onDrag(e) {
            const rect = stencil.getBoundingClientRect();
            const w = Math.max(40, e.clientX - rect.left);
            gsap.set(stencil, { width: w });
            positionHandle();
        },
    });

    new ResizeObserver(positionHandle).observe(stencil);
    positionHandle();
})();
