/* Formulario */
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');
    const submitButton = form.querySelector('button[type="submit"]');

    function validateField(field, errorField, validationFunc) {
      const value = field.value.trim();
      const errorMessage = validationFunc(value);
      errorField.textContent = errorMessage;
      return !errorMessage;
    }

    function validateNombre(value) {
      if (value === '') return 'El campo Nombre no debe estar en blanco o vacío.';
      if (value.length > 50) return 'El campo Nombre debe contener máximo 50 caracteres.';
      return '';
    }

    function validateEmail(value) {
      if (value === '') return 'El campo Email no debe estar en blanco o vacío.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'Debe estar en formato email conteniendo el caracter especial @ seguido de un dominio o proveedor seguido de un punto(.). Ejemplo: texto@texto.com';
      }
      return '';
    }

    function validateAsunto(value) {
      if (value === '') return 'El campo Asunto no debe estar en blanco o vacío.';
      if (value.length > 50) return 'El campo Asunto debe contener máximo 50 caracteres.';
      return '';
    }

    function validateMensaje(value) {
      if (value === '') return 'El campo Mensaje no debe estar en blanco o vacío.';
      if (value.length > 300) return 'El campo Mensaje debe contener máximo 300 caracteres.';
      return '';
    }

    function validateForm() {
      const isNombreValid = validateField(nombre, document.getElementById('nombreError'), validateNombre);
      const isEmailValid = validateField(email, document.getElementById('emailError'), validateEmail);
      const isAsuntoValid = validateField(asunto, document.getElementById('asuntoError'), validateAsunto);
      const isMensajeValid = validateField(mensaje, document.getElementById('mensajeError'), validateMensaje);

      submitButton.disabled = !(isNombreValid && isEmailValid && isAsuntoValid && isMensajeValid);
    }

    function resetForm() {
      form.reset();
      document.getElementById('nombreError').textContent = '';
      document.getElementById('emailError').textContent = '';
      document.getElementById('asuntoError').textContent = '';
      document.getElementById('mensajeError').textContent = '';
      submitButton.disabled = true;
    }

    nombre.addEventListener('input', validateForm);
    email.addEventListener('input', validateForm);
    asunto.addEventListener('input', validateForm);
    mensaje.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe automáticamente
      if (!submitButton.disabled) {
        alert('Formulario enviado exitosamente!');
        resetForm();
      }
    });

    // Inicializa el estado del botón de enviar
    validateForm();
  });