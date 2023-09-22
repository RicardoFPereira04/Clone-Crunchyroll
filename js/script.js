$(document).ready(function() {
  // Função para abrir e fechar o dropdown de "Navegar"
  function toggleDropdownNav() {
    $(".custom-dropdown").toggleClass("show");
    $(".overlay").toggle();
    if ($(".custom-dropdown").hasClass("show")) {
      $("#drop").addClass("active-hover");
      $("#drop-2").removeClass("active-hover");
    } else {
      $("#drop").removeClass("active-hover");
    }

    if ($(".custom-dropdown").is(":visible")) {
      $("#drop").addClass("active-hover");
    } else {
      $("#drop-2").removeClass("active-hover");
    }
  }

  // Função para abrir e fechar o dropdown de "Notícias"
  function toggleDropdownNews() {
    $(".custom-dropdown2").toggleClass("show");
    $(".overlay").toggle();
    if ($(".custom-dropdown2").hasClass("show")) {
      $("#drop-2").addClass("active-hover");
      $("#drop").removeClass("active-hover");
    } else {
      $("#drop-2").removeClass("active-hover");
    }
  }

  // Quando o botão de dropdown para "Navegar" for clicado
  $("#drop").click(function(e) {
    e.stopPropagation(); // Evita que o evento de clique se propague para o documento
    toggleDropdownNav();
  });

  // Quando o botão de dropdown para "Notícias" for clicado
  $("#drop-2").click(function(e) {
    e.stopPropagation(); // Evita que o evento de clique se propague para o documento
    toggleDropdownNews();
  });

  // Fecha o menu dropdown quando clicar em qualquer parte da tela fora do menu
  $(document).on("click", function(event) {
    if (!$(event.target).closest(".dropdown").length) {
      $(".custom-dropdown, .custom-dropdown2").removeClass("show");
      $(".overlay").hide();
      $("#drop, #drop-2").removeClass("active-hover");
    }
  });
});
