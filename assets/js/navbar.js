
const nav = document.querySelector("#nav");
const header = document.querySelector("#header");

const headerOptions = {
  rootMargin: "-100px 0px 0px 0px"  // triggers when the full header leaves the viewport
};

const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}, headerOptions);

headerObserver.observe(header);

