const nav = document.querySelector("nav");
const header = document.querySelector("header");

const headerOptions = {
  threshold: 0  // triggers when the full header leaves the viewport
};

const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
  entries.forEach(entry => {
    console.log(entry.target);
  });
}, headerOptions);

headerObserver.observe(header);
