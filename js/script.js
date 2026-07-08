// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form (front-end only placeholder — wire up to your backend or a
// service like Formspree / Resend / EmailJS to actually receive messages)
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = 'Merci, votre demande a bien été enregistrée. Nous revenons vers vous sous 48h.';
    form.reset();
  });
}
