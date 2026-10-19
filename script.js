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
const feedback = document.getElementById('formFeedback');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) {
    feedback.textContent = 'Пожалуйста, проверьте номер телефона: требуется от 10 до 15 цифр.';
    document.getElementById('phone').focus();
    return;
  }
  const amount = document.getElementById('amount').value;
  const purpose = document.getElementById('purpose').value;
  const details = document.getElementById('details').value.trim();
  const message = `Здравствуйте! Хочу получить предварительную оценку финансирования.\n\nИмя: ${name}\nТелефон: ${phone}\nСумма: ${amount}\nЦель: ${purpose}\nО проекте: ${details || 'Расскажу при общении.'}\n\nОтправлено с сайта FINANCE ALMATY.`;
  const encoded = encodeURIComponent(message);
  const recipient = WHATSAPP_NUMBER.replace(/\D/g, '');
  const link = recipient ? `https://wa.me/${recipient}?text=${encoded}` : `https://api.whatsapp.com/send?text=${encoded}`;
  feedback.textContent = recipient ? 'Открываем WhatsApp с готовым сообщением. Для отправки подтвердите действие в WhatsApp.' : 'Открываем WhatsApp. Выберите получателя и подтвердите отправку. Чтобы заявки приходили вам напрямую, пропишите номер в script.js.';
  const opened = window.open(link, '_blank', 'noopener,noreferrer');
  if (!opened) {
    feedback.replaceChildren(document.createTextNode('Разрешите всплывающее окно или '));
    const a = document.createElement('a');
    a.href = link; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = 'откройте сообщение в WhatsApp';
    feedback.appendChild(a);
  }
});
