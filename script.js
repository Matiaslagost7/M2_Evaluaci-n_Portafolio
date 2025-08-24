$(document).ready(function() {
  // Cuando se hace clic en cualquier elemento con la clase .scroll-item
  $('.scroll-item').on('click', function() {
    // Obtiene el valor del atributo 'data-modal-target' del elemento clicado.
    // Por ejemplo, para el div de Proyectos, obtendrá 'projectsModal'.
    const targetModalId = $(this).data('modal-target');
    
    // Construye el selector para el modal objetivo (ej: '#projectsModal').
    const targetModal = $('#' + targetModalId);
    
    // Muestra el modal haciendo que su estilo de display sea 'block'.
    targetModal.css('display', 'block');
  });

  // Cuando se hace clic en cualquier elemento con la clase .close-btn
  $('.close-btn').on('click', function() {
    // Encuentra el modal padre más cercano y lo oculta.
    $(this).closest('.modal').css('display', 'none');
  });

  // Cuando se hace clic en cualquier lugar de la ventana
  $(window).on('click', function(e) {
    // Si el elemento en el que se hizo clic tiene la clase 'modal'
    // (es decir, el fondo oscuro fuera del contenido del modal)
    if ($(e.target).hasClass('modal')) {
      // Oculta ese modal.
      $(e.target).css('display', 'none');
    }
  });
});