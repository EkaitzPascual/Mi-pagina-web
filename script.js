 // Función que muestra la Trifuerza al hacer clic en Link
 function showTrifuerza() {
  const trifuerza = document.querySelector('.trifuerza');

  // Asegurarse de que la Trifuerza existe antes de interactuar con ella
  if (trifuerza) {
    // Mostrar la Trifuerza
    trifuerza.style.opacity = '1';
    trifuerza.style.zIndex = '3';

    // Ocultar la Trifuerza después de 3 segundos
    setTimeout(() => {
      trifuerza.style.opacity = '0';
      trifuerza.style.zIndex = '1';
    }, 3000);
  } else {
    console.error('La imagen de la Trifuerza no se encontró.');
  }
}
