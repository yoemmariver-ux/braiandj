// NUMERO DE TELEFONO DE BRAIAN (Con código de país)
const TELEFONO_BRAIAN = "5493834000000"; 

// LISTA DE FOTOS PARA LA GALERÍA DE EVENTOS
const fotosGaleria = [
  { src: "images/evento1.jpg", caption: "Fiesta y pista de baile" },
  { src: "images/evento2.jpg", caption: "Cabina de DJ Braian" },
  { src: "images/evento3.jpg", caption: "Luces y ambientación" }
];

let indiceFotoActual = 0;

// FUNCIONES DE LA GALERÍA
function abrirGaleria(indice) {
  indiceFotoActual = indice;
  mostrarFotoModal();
  document.getElementById("modalFoto").style.display = "flex";
}

function mostrarFotoModal() {
  const imgModal = document.getElementById("imgModal");
  imgModal.src = fotosGaleria[indiceFotoActual].src;
}

function cambiarFoto(direccion) {
  indiceFotoActual += direccion;
  if (indiceFotoActual < 0) {
    indiceFotoActual = fotosGaleria.length - 1;
  } else if (indiceFotoActual >= fotosGaleria.length) {
    indiceFotoActual = 0;
  }
  mostrarFotoModal();
}

function cerrarImagen() {
  document.getElementById("modalFoto").style.display = "none";
}

// Navegación con teclado para la galería
document.addEventListener("keydown", function(event) {
  const modal = document.getElementById("modalFoto");
  if (modal && modal.style.display === "flex") {
    if (event.key === "ArrowLeft") cambiarFoto(-1);
    if (event.key === "ArrowRight") cambiarFoto(1);
    if (event.key === "Escape") cerrarImagen();
  }
});

// FUNCIÓN PARA ENVIAR PRESUPUESTO A WHATSAPP
function enviarWhatsapp() {
  const nombre = document.getElementById("nombre").value.trim();
  const tipoEvento = document.getElementById("tipoEvento").value;
  const fecha = document.getElementById("fecha").value;
  const lugar = document.getElementById("lugar").value.trim();

  if (nombre === "" || fecha === "" || lugar === "") {
    alert("Por favor, completá todos los campos para enviar la consulta.");
    return;
  }

  const mensaje = `Hola DJ Braian! Mi nombre es *${nombre}*. Quisiera consultar disponibilidad y presupuesto para un evento:\n\n` +
                  `🎉 *Tipo de evento:* ${tipoEvento}\n` +
                  `📅 *Fecha:* ${fecha}\n` +
                  `📍 *Lugar:* ${lugar}\n\n` +
                  `¡Quedo a la espera de tu respuesta!`;

  const urlWhatsapp = `https://wa.me/${TELEFONO_BRAIAN}?text=${encodeURIComponent(mensaje)}`;
  window.open(urlWhatsapp, "_blank");
}