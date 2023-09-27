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




$(document).ready(function() {
  // Função para abrir e fechar o dropdown de "Navegar"
  function toggleDropdownAccount() {
    $(".drop-account").toggleClass("active");
    $(".overlay").toggle();
    if ($(".drop-account").hasClass("active")) {
      $(".icon-account").addClass("active-hover");
     
    } 

    if ($(".drop-account").is(":visible")) {
      $(".icon-account").addClass("active-hover");
    } 
  }
  $(".icon-account").click(function(e) {
    e.stopPropagation(); // Evita que o evento de clique se propague para o documento
    toggleDropdownAccount();
  });

  $(document).on("click", function(event) {
    if (!$(event.target).closest(".drop-account").length) {
      $(".drop-account").removeClass("active");
      $(".overlay").hide();
      $(".icon-account").removeClass("active-hover");
    }
  });

});