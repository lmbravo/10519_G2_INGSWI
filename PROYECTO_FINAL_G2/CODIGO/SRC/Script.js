function validateNombreInput() {
  const nombreInput = document.getElementById('nombre_paciente');
  const nombre = nombreInput.value;
  const regex = /^[a-zA-Z0-9\s]*$/; // Expresión regular que permite letras, números y espacios
  
  if (!nombre) {
    nombreInput.setCustomValidity('El nombre es obligatorio.');
  } else if (!regex.test(nombre)) {
    nombreInput.setCustomValidity('El nombre no debe contener caracteres especiales.');
  } else {
    nombreInput.setCustomValidity('');
  }
}

function validateTelefonoInput() {
  const telefonoInput = document.getElementById('telefono_paciente');
  const telefono = telefonoInput.value;
  const regex = /^\d{10}$/; // Expresión regular para 10 dígitos numéricos
  
  if (!telefono) {
    telefonoInput.setCustomValidity('El número de teléfono es obligatorio.');
  } else if (!regex.test(telefono)) {
    telefonoInput.setCustomValidity('El número de teléfono debe tener 10 dígitos numéricos.');
  } else {
    telefonoInput.setCustomValidity('');
  }
}

function validateEmailInput() {
  const emailInput = document.getElementById('email_paciente');
  const email = emailInput.value;
  const regex = /^\S+@\S+\.\S+$/; // Expresión regular para validar el formato de correo electrónico
  
  if (!email) {
    emailInput.setCustomValidity('El correo electrónico es obligatorio.');
  } else if (!regex.test(email)) {
    emailInput.setCustomValidity('Ingrese un correo electrónico válido.');
  } else {
    emailInput.setCustomValidity('');
  }
}

