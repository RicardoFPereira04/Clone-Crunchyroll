$(document).ready(function() {
    // Quando o botão de dropdown for clicado
    $(".dropdown-toggle").click(function() {
      // Mostra o dropdown personalizado
      $(".custom-dropdown").toggle();
      
      // Aplica o efeito de desfoque no resto da tela
      $(".overlay").toggle();
    });
  });