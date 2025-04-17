// Countdown Timer - 10 days from today
const countdown = document.getElementById("countdown");
const eventDate = new Date();
eventDate.setDate(eventDate.getDate() + 10);

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate.getTime() - now;

  if (distance < 0) {
    countdown.innerHTML = "Hackathon Started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `⏳ ${days}d ${hrs}h ${mins}m ${secs}s`;
}, 1000);

// Typewriter Effect
const typewriter = document.getElementById("typewriter");
const words = ["Hack the Future", "24 Hours. Infinite Ideas.", "Code. Create. Conquer."];
let wordIndex = 0, letterIndex = 0;
let currentWord = words[wordIndex];
let isDeleting = false;

function type() {
  currentWord = words[wordIndex];
  let displayText = isDeleting 
      ? currentWord.substring(0, letterIndex--) 
      : currentWord.substring(0, letterIndex++);

  typewriter.innerHTML = displayText;

  if (!isDeleting && letterIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1200);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();

// Scroll Fade-in Animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -20px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fade => {
  appearOnScroll.observe(fade);
});
