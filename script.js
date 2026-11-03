const form = document.getElementById('contact-form');
const toast = document.getElementById('bag-toast');

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove('visible');
  }, 1800);
};

document.querySelectorAll('.add-to-bag').forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.dataset.product || 'Item';
    const price = button.dataset.price || '';

    button.textContent = 'Added ✓';
    button.disabled = true;
    showToast(`${product} ${price} added to bag`);

    window.setTimeout(() => {
      button.textContent = 'Add to bag';
      button.disabled = false;
    }, 1600);
  });
});

const setFieldError = (field, message) => {
  const errorNode = field.parentElement.querySelector('.error-message');
  field.setAttribute('aria-invalid', String(Boolean(message)));
  if (message) {
    errorNode.textContent = message;
  } else {
    errorNode.textContent = '';
  }
};

const validateField = (field) => {
  const value = field.value.trim();
  let message = '';

  if (field.required && !value) {
    message = `${field.labels[0]?.textContent || 'This field'} is required.`;
  } else if (field.type === 'email' && value && !field.checkValidity()) {
    message = 'Please enter a valid email address.';
  }

  setFieldError(field, message);
  return !message;
};

if (form) {
  form.querySelectorAll('input, textarea').forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fields = Array.from(form.querySelectorAll('input, textarea'));
    const allValid = fields.every((field) => validateField(field));

    if (!allValid) {
      const firstInvalid = fields.find((field) => field.getAttribute('aria-invalid') === 'true');
      firstInvalid?.focus();
      return;
    }

    const status = document.getElementById('form-status');
    status.textContent = 'Demo submission received. This form is for testing only and is not connected to a backend.';
    status.style.color = '#1b42dd';
    form.reset();
    fields.forEach((field) => setFieldError(field, ''));
  });
}
