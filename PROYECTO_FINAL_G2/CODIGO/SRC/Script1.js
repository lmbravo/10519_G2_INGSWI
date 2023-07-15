const urlParams = new URLSearchParams(window.location.search);
const nombrePaciente = urlParams.get('nombre');
const telefonoPaciente = urlParams.get('telefono');
const emailPaciente = urlParams.get('email');
const marca = urlParams.get('marca');
const fechaVacunacion = urlParams.get('fecha');
const horaVacunacion = urlParams.get('hora');

document.getElementById("nombre_paciente_salida").value = nombrePaciente;
document.getElementById("telefono_paciente_salida").value = telefonoPaciente;
document.getElementById("email_paciente_salida").value = emailPaciente;
document.getElementById("marca_salida").value = marca;
document.getElementById("fecha_vacunacion_salida").value = fechaVacunacion;
document.getElementById("hora_vacunacion_salida").value = horaVacunacion;