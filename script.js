'use strict';
// Номер получателя указан в международном формате без знака +.
// Номер WhatsApp для получения заявок: +7 777 487 71 63.
const WHATSAPP_NUMBER = '77774877163';

const menuButton = document.getElementById('menuButton');
const mobileNav = document.getElementById('mobileNav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Открыть меню');
}));

const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }});
}, { threshold: 0.08 }) : null;
document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-purpose]').forEach(link => link.addEventListener('click', () => {
  const purpose = document.getElementById('purpose');
  purpose.value = link.dataset.purpose;
}));

const form = document.getElementById('leadForm');
form.addEventListener('submit', event => {
  event.preventDefault();
  const fields = new FormData(form);
  const name = fields.get('name').trim();
  const details = fields.get('details').trim();
  const lines = [
    'Здравствуйте! Хочу получить предварительную оценку финансирования.',
    '',
    `Цель: ${fields.get('purpose')}`,
    `Сумма: ${fields.get('amount')}`,
  ];
  if (name) lines.push(`Имя: ${name}`);
  if (details) lines.push(`О проекте: ${details}`);
  lines.push('', 'Заявка через форму на сайте FINANCE ALMATY.');

  const url = new URL(`https://wa.me/${WHATSAPP_NUMBER}`);
  url.searchParams.set('text', lines.join('\n'));
  window.location.assign(url.href);
});
