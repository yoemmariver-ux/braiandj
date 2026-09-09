// NUMERO DE TELEFONO DE BRAIAN (Con código de país, ej: 549383...)
const TELEFONO_BRAIAN = "5493834000000"; 

// Función para armar y enviar la consulta por WhatsApp
function enviarWhatsapp() {
  const nombre = document.getElementById("nombre").value.trim();
  const tipoEvento = document.getElementById("tipoEvento").value;
  const fecha = document.getElementById("fecha").value;
  const lugar = document.getElementById("lugar").value.trim();

  if (nombre === "" || fecha === "" || lugar === "") {
    alert("Por favor, completá todos los campos para enviar la consulta.");
    return;
  }

  // Formatear mensaje para WhatsApp
  const mensaje = `Hola DJ Braian! Mi nombre es *${nombre}*. Quisiera consultar disponibilidad y presupuesto para un evento:\n\n` +
                  `🎉 *Tipo de evento:* ${tipoEvento}\n` +
                  `📅 *Fecha:* ${fecha}\n` +
                  `📍 *Lugar:* ${lugar}\n\n` +
                  `¡Quedo a la espera de tu respuesta!`;

  // Crear el enlace a WhatsApp Web / App
  const urlWhatsapp = `https://wa.me/${TELEFONO_BRAIAN}?text=${encodeURIComponent(mensaje)}`;

  // Abrir WhatsApp en una nueva pestaña
  window.open(urlWhatsapp, "_blank");
}

// Funciones para ampliar fotos de la galería
function abrirImagen(src) {
  const modal = document.getElementById("modalFoto");
  const imgModal = document.getElementById("imgModal");
  modal.style.display = "flex";
  imgModal.src = src;
}

function cerrarImagen() {
  document.getElementById("modalFoto").style.display = "none";
}