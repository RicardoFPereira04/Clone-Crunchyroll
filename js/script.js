$(document).ready(function() {
  // Função para abrir e fechar o dropdown de "Navegar"
  function toggleDropdownNav() {
    const $navDropdown = $(".custom-dropdown");
    const $newsDropdown = $(".custom-dropdown2");

    // Fecha o dropdown de "Notícias" se estiver aberto
    $newsDropdown.removeClass("show");

    $navDropdown.toggleClass("show");
    $(".overlay").toggle();

    if ($navDropdown.hasClass("show")) {
      $("#drop").addClass("active-hover");
      $("#drop-2").removeClass("active-hover");
    } else {
      $("#drop").removeClass("active-hover");
    }
  }

  // Função para abrir e fechar o dropdown de "Notícias"
  function toggleDropdownNews() {
    const $navDropdown = $(".custom-dropdown");
    const $newsDropdown = $(".custom-dropdown2");

    // Fecha o dropdown de "Navegar" se estiver aberto
    $navDropdown.removeClass("show");

    $newsDropdown.toggleClass("show");
    $(".overlay").toggle();

    if ($newsDropdown.hasClass("show")) {
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

  // Fecha os menus dropdown quando clicar em qualquer parte da tela fora dos menus
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
    const $dropAccount = $(".drop-account");
    const $iconAccount = $(".icon-account");

    if ($dropAccount.hasClass("active")) {
      // Se o dropdown estiver ativo, remova a classe "active-hover" do ícone
      $iconAccount.removeClass("active-hover");
    } else {
      // Se o dropdown não estiver ativo, adicione a classe "active-hover" ao ícone
      $iconAccount.addClass("active-hover");
    }

    // Toggle do dropdown e overlay
    $dropAccount.toggleClass("active");
    $(".overlay").toggle();
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


// Supondo que você tenha um ícone com a classe "menu-icon"
const menuIcon = document.querySelector(".menu-icon");
const customDropdown = document.querySelector(".custom-dropdown");

menuIcon.addEventListener("click", function() {
  customDropdown.classList.toggle("show"); // Adicione uma classe "show" para exibir/ocultar o menu dropdown
});