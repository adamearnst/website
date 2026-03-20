const nav = document.querySelector("nav");
const header = document.querySelector("header");

const headerOptions = {};

const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      nav.classList.add("scrolled");
    }
  });
}, headerOptions);

headerObserver.observe(header)
