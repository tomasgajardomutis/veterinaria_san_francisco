import './styles.css';

const menuButton = document.querySelector<HTMLButtonElement>('.menu-btn');
const navigation = document.querySelector<HTMLElement>('#nav');
menuButton?.addEventListener('click', () => {
  const isOpen = navigation?.classList.toggle('open') ?? false;
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
navigation?.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  })
);

const form = document.querySelector<HTMLFormElement>('#booking-form');
const status = document.querySelector<HTMLElement>('.form-status');
form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const service = String(data.get('servicio') ?? '');
  if (status)
    status.textContent =
      'Solicitud preparada. Nos pondremos en contacto para confirmar tu hora de ' +
      service.toLowerCase() +
      '.';
  form.reset();
  status?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
