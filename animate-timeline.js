const checkpoints = document.querySelectorAll(".slide-in");

const mediaQuery = window.matchMedia('(min-width: 768px)');

function handleMediaChange(e) {
  if (e.matches) {
    // If the screen width is 768px or more, alternate the checkpoint slide animation directions
    checkpoints[0].classList.replace("from-right", "from-left");
    checkpoints[2].classList.replace("from-right", "from-left");
  }
}

handleMediaChange(mediaQuery);
mediaQuery.addEventListener('change', handleMediaChange);

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };

const appearOnScroll = new IntersectionObserver((
    entries,
    appearOnScroll
  ) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        entry.target.classList.remove('in-view');
        entry.target.classList.add('out-of-view');
        return;
      } else {
        entry.target.classList.add("in-view");
        entry.target.classList.remove('out-of-view');
        // appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
checkpoints.forEach(slider => {
    appearOnScroll.observe(slider);
});

