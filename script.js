const hero = document.querySelector(".hero");
const heroBannerWrapper = document.querySelector(".hero_banner_wrapper");
const editionLabel = document.querySelector(".edition_label");
const locationLabel = document.querySelector(".location_label");
const modelLabel = document.querySelector(".model_label");
const bannerBottomP = document.querySelector(".hero_description_bottom p");
const titleLabel = document.querySelector(".title_label");
const exploreLabel = document.querySelector(".explore_label");

window.addEventListener("load", () => {
  // Gsap Hero Timeline//

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
  });

  tl.from(hero, {
    opacity: 0,
    duration: 1.5,
    scale: 1.1,
    clearProps: "scale",
    x: "100%",
  });

  tl.from(exploreLabel, {
    opacity: 0,
    duration: 0.5,
  });

  tl.from(heroBannerWrapper, {
    duration: 0.5,
    opacity: 0,
    ease: "circ.out",
    x: "-100%",
    y: "100%",
  });

  tl.from([editionLabel, modelLabel], {
    duration: 0.6,
    opacity: 0,
    x: "-100%",
  });

  tl.from([locationLabel, bannerBottomP], {
    duration: 0.6,
    opacity: 0,
    x: "100%",
  });

  tl.from(titleLabel, {
    duration: 1.5,
    opacity: 0,
    ease: "power2.out",
    x: "100%",
    scale: -1.5,
    clearProps: "scale",
  });
});
//=====================================================================SEction two GSAP------

// Forces GSAP to recalculate its viewport heights instantly whenever you resize Inspect Mode
ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
});
window.addEventListener("load", () => {
  const sectionTwo = document.querySelector(".section_two");

  const sectionTwoTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "bottom center",
      end: " top top",
      scrub: 1,
      markers: false,
    },
    defaults: { ease: "power3.out" },
  });

  sectionTwoTL.from(sectionTwo, {
    x: "-100%",
    scale: 0,
    autoAlpha: 0,
    duration: 0.5,
  });

  const sectionThree = document.querySelector(".section_three");

  const sectionThreeTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_two",
      start: "top top",
      end: " center bottom",
      scrub: 1,
      markers: false,
    },

    defaults: { ease: "power3.out" },
  });

  sectionThreeTL.from(sectionThree, {
    scale: 0,
    duration: 2,
    autoAlpha: 0,
  });

  const sectionFour = document.querySelector(".section_four");

  const sectionFourTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_four",
      start: "top bottom",
      end: "center center",
      scrub: 1,
      markers: false,
    },
    defaults: { ease: "power3.out" },
  });

  sectionFourTL.from(sectionFour, {
    x: "100%",
    scale: 0,
    autoAlpha: 0,

    duration: 0.5,
  });

  const sectionFive = document.querySelector(".section_five");

  const sectionFiveTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_four",
      start: "center center",
      end: "bottom top",
      markers: false,

      scrub: 1,
    },

    defaults: { ease: "power3.out" },
  });

  sectionFiveTL.from(sectionFive, {
    x: "-100%",
    ease: "power1.out",
    duration: 0.5,
  });

  const sectionSix = document.querySelector(".section_six");

  const sectionSixTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_five",
      start: "center center",
      end: "bottom top+=200",
      markers: false,

      scrub: 1,
    },

    defaults: { ease: "power3.out" },
  });

  sectionSixTL.from(".grid_six_card", {
    x: "100%",
    stagger: 0.5,
    autoAlpha: 0,
    duration: 3,
    ease: "power1.out",
  });

  sectionSixTL.from(".header_six", {
    autoAlpha: 0,
    scale: -1.1,
  });

  const sectionSeven = document.querySelector(".section_seven");

  const sectionSevenTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_six",
      start: " top bottom",
      end: "bottom top",
      markers: false,
      scrub: 1,
    },
    defaults: { ease: "power3.out" },
  });

  sectionSevenTL.from(sectionSeven, {
    x: "-100%",
    ease: "power4.out",
    duration: 1,
    autoAlpha: 0,
  });

  const sectionEight = document.querySelector(".section_eight");

  const sectionEightTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_seven",
      start: "bottom center",
      end: "bottom top",
      scrub: 1,
      markers: false,
    },

    default: { ease: "power3.out" },
  });

  sectionEightTL.from(sectionEight, {
    x: "100%",
    ease: "power3.out",
    duration: 1,
    autoAlpha: 0,
  });

  sectionEightTL.from(".grid_eight_card", {
    stagger: 0.5,
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
    x: "-100%",
  });

  const formRowGrid = document.querySelector(".form_row_grid");
  const formGroup = document.querySelector(".form_group");
  const submitBtn = document.querySelector(".submit_btn");
  const sectionContact = document.querySelector(".section_contact");
  const contactLeft = document.querySelector(".contact_left");

  const sectionContactTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_eight",
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: false,
    },
    defaults: { ease: "power3.out" },
  });

  sectionContactTL.from(".form_row_grid, .form_group", {
    duration: 3,
    ease: "power1.out",
    y: "100%",
  });

  sectionContactTL.from(".contact_left", {
    scale: 0,
    autoAlpha: 0,
    x: "-100%",
  });

  sectionContactTL.from(
    ".submit_btn",
    {
      scale: 0,
      autoAlpha: 0,

      x: "-100%",
    },
    "<",
  );
});
//media query for GSAP============================================================

const mediaQuery = window.matchMedia("(min-width:1281px)");
