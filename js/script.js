$(document).ready(function() {
    // Quando o botão de dropdown for clicado
    $("#drop").click(function() {
      // Mostra o dropdown personalizado
      $(".custom-dropdown").toggle();
      
      // Aplica o efeito de desfoque no resto da tela
      $(".overlay").toggle();

      
    });
  });




  $(document).ready(function() {
    // Quando o botão de dropdown for clicado
    $("#drop-2").click(function() {
      // Mostra o dropdown personalizado
      $("#custom-drop").toggle();
      
      // Aplica o efeito de desfoque no resto da tela
      $(".overlay").toggle();
    });
  });