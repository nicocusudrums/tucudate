// Validación simple formulario contacto
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return; // Si no hay formulario, salir

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nombre = form.querySelector('input[name="nombre"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const mensaje = form.querySelector('textarea[name="mensaje"]').value.trim();

    if (!nombre || !email || !mensaje) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (!validarEmail(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    alert('Mensaje enviado con éxito. ¡Gracias!');
    form.reset();
  });

  function validarEmail(email) {
    // Expresión regular simple para validar email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.banda, .agenda ul li, .card');

  elementos.forEach(el => el.classList.add('oculto'));

  function mostrarElementos() {
    const triggerBottom = window.innerHeight * 0.85;

    elementos.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add('visible');
        el.classList.remove('oculto');
      }
    });
  }

  window.addEventListener('scroll', mostrarElementos);
  mostrarElementos(); // Ejecutar al cargar por si ya están visibles
});
