gsap.registerPlugin(Flip); 


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