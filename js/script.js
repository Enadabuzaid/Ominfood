// Set current yeear
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation 
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener('click',function(){
  header.classList.toggle("nav-open");
});

// Smooth scrolling animation .
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link){
  link.addEventListener("click",function(e){
    e.preventDefault();
    const href = link.getAttribute("href");
    
    // scroll back to top
    if(href === "#") 
      window.scrollTo({
        top : 0,
        behavior : "smooth"
      });

    //scroll to othe sections
    if(href !== "#" && href.startsWith("#")){
      const section =  document.querySelector(href);
      section.scrollIntoView({behavior : "smooth"});
    }

    // close mobile navigation
    if(link.classList.contains('main-nav-link'))
      header.classList.toggle("nav-open");

  });
});

// Sticky navigation 
const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function(entries){
    const ent = entries[0];
    console.log(ent);
    if(ent.isIntersecting === false){
      document.body.classList.add("sticky");
    }

    if(ent.isIntersecting){
      document.body.classList.remove("sticky");
    }
  },
  {
  // in the viewport 
  root:null,
  threshold:0,
  rootMargin:"-80px"
  }
);
obs.observe(sectionHero);