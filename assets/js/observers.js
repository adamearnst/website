
  const nav = document.querySelector("#nav");
  const header = document.querySelector("#header");
  
  const headerOptions = {
    threshold: 0  // triggers when the full header leaves the viewport
  };
  
  const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        nav.classList.add("scrolled");
      }
    });
  }, headerOptions);
  
  headerObserver.observe(header);
