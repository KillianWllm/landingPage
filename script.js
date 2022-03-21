function toggleMenu(){
    const navbar = document.querySelector('.navbar') ; 
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        navbar.classList.toggle('show-nav');
    })
}
toggleMenu();

const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
  
  const handleIntersect = function(entries, observer) {
      entries.forEach(function (entry) {
          if(entry.intersectionRatio > ratio) {
              entry.target.classList.add('reveal-visible')
              observer.unobserve(entry.target)
          }
      })
  }

  const observer = new IntersectionObserver(handleIntersect, options);
  document.querySelectorAll('[class*="reveal-"]').forEach(function(r){
    observer.observe(r)
  });