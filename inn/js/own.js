// animate slide-line on click
jQuery(document).on("click", ".leftBtn", function () {
  // GSAP animate to clicked menu item
  gsap.to(".firstScreen", 1, {
    css: {
      x: 1500,
      width: "100%",
    },
    opacity: 0,
    ease: Power1.easeOut,
  });
  gsap.to(".secondScreen", 1.7, {
    css: {
      x: 0,
      visibility: "visible",
    },
    opacity: 0,
    ease: Power1.easeOut,
  });
});

jQuery(document).on("click", ".rightBtn", function () {
  // GSAP animate to clicked menu item
  gsap.to(".firstScreen", 1, {
    css: {
      x: 0,
      width: "93.5%",
    },
    opacity: 0,
    ease: Power1.easeOut,
  });
  gsap.to(".secondScreen", 1.7, {
    css: {
      x: -1500,
    },
    opacity: 0,
    ease: Power1.easeOut,
  });
});

$(document).ready(function () {
  gsap.to(".secondScreen", 0, {
    css: {
      x: -1500,
      visibility: "visible",
    },
    ease: Power1.easeOut,
  });
});
