(function () {
  'use strict';

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var links = document.getElementById('nav-links');
  if (btn && links) {
    btn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Lightbox
  var triggers = document.querySelectorAll('[data-lightbox]');
  if (!triggers.length) return;

  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Image viewer');
  box.innerHTML = '<button class="lb-close" type="button" aria-label="Close image viewer">Close ✕</button><img alt=""><p></p>';
  document.body.appendChild(box);
  var boxImg = box.querySelector('img');
  var boxCap = box.querySelector('p');
  var closeBtn = box.querySelector('.lb-close');
  var lastFocus = null;

  function open(src, alt, cap, from) {
    lastFocus = from;
    boxImg.src = src;
    boxImg.alt = alt || '';
    boxCap.textContent = cap || '';
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function close() {
    box.classList.remove('open');
    boxImg.removeAttribute('src');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  triggers.forEach(function (t) {
    t.addEventListener('click', function () {
      var img = t.querySelector('img');
      var cap = t.getAttribute('data-caption') || '';
      open(t.getAttribute('data-lightbox'), img ? img.alt : '', cap, t);
    });
  });
  closeBtn.addEventListener('click', close);
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  document.addEventListener('keydown', function (e) {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'Tab') { e.preventDefault(); closeBtn.focus(); }
  });
})();
