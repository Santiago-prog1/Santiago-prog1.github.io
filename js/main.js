const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}));
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    document.querySelectorAll('[data-category]').forEach(project => {
      project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
    });
  });
});

// Respeta la configuración de accesibilidad del sistema.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const animatedElements = document.querySelectorAll(
  '.hero .eyebrow, .intro, h1, .hero-bottom, .hero-strip, .section-head, .project, .auto-grid article, .profile > div, .learning > div, .contact .wrap'
);

if (!motionPreference.matches && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  animatedElements.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.setProperty('--reveal-delay', `${(index % 3) * 70}ms`);
    revealObserver.observe(element);
  });

  // Si el usuario activa movimiento reducido, muestra todo inmediatamente.
  motionPreference.addEventListener('change', event => {
    if (event.matches) {
      revealObserver.disconnect();
      animatedElements.forEach(element => element.classList.add('is-visible'));
    }
  });
}

// Barra de progreso y aspecto de la navegación al desplazarse.
const progress = document.createElement('div');
progress.className = 'reading-progress';
progress.setAttribute('aria-hidden', 'true');
document.body.appendChild(progress);
let scrollScheduled = false;
function updateScroll() {
  const distance = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${distance > 0 ? window.scrollY / distance : 0})`;
  document.querySelector('.nav').classList.toggle('scrolled', window.scrollY > 25);
  scrollScheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scrollScheduled) {
    scrollScheduled = true;
    window.requestAnimationFrame(updateScroll);
  }
}, { passive: true });
window.addEventListener('resize', updateScroll);
updateScroll();

// Indica la sección actual en la navegación.
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navigation.querySelectorAll('a').forEach(link => {
          const current = link.hash === `#${entry.target.id}`;
          link.classList.toggle('current', current);
          if (current) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
}

// Cierra el menú con Escape y devuelve el foco al botón.
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
    menu.focus();
  }
});

