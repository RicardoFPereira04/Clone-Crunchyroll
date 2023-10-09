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
    };


  });
});


const menuIcon = document.querySelector(".menu-icon");
const customDropdown = document.querySelector(".custom-dropdown-mobile");

menuIcon.addEventListener("click", function() {
  customDropdown.classList.toggle("show"); // Adicione ou remova a classe "show" para exibir/ocultar o menu dropdown
  menuIcon.classList.toggle("active-hover"); // Adicione ou remova a classe "active-hover" para controlar o estilo do hover
});

// Adicione um evento de clique no documento para remover a classe "active-hover" quando clicar em outra parte da tela
document.addEventListener("click", function(event) {
  if (!menuIcon.contains(event.target) && !customDropdown.contains(event.target)) {
    customDropdown.classList.remove("show");
    menuIcon.classList.remove("active-hover");
  }
});

const GenerosSubMenu = document.querySelector("#sub-menu");
const SubMenu = document.querySelector(".dropdown-menu-mob");
const customDropdownMob = document.querySelector(".custom-dropdown-mobile");

GenerosSubMenu.addEventListener("click", function() {
  SubMenu.classList.toggle("show");
  customDropdownMob.classList.toggle("scrollable");
  customDropdownMob.classList.add("submenu-opened"); // Adicione a classe quando o submenu é aberto
});

// Adicione um evento de clique no documento para remover a classe quando clicar em outra parte da tela
document.addEventListener("click", function(event) {
  if (!GenerosSubMenu.contains(event.target) && !SubMenu.contains(event.target)) {
    SubMenu.classList.remove("show");
    customDropdownMob.classList.remove("submenu-opened"); // Remova a classe quando o submenu é fechado
  }
});

const GenerosSubMenu2 = document.querySelector("#sub-menu2");
const SubMenu2 = document.querySelector(".dropdown-menu-mob2");

GenerosSubMenu2.addEventListener("click", function() {
  SubMenu2.classList.toggle("show");
  customDropdownMob.classList.remove("scrollable");
  customDropdownMob.classList.add("submenu-opened"); // Adicione a classe quando o submenu é aberto
});


//


const MenuIconClose = document.querySelector(".custom-dropdown-mobile");
const CloseAccount = document.querySelector(".icon-account");
const IconMenuMob = document.querySelector(".menu-icon")
const MenuNavigationClose = document.querySelector(".custom-dropdown");
const MenuNewsClose = document.querySelector(".custom-dropdown2");
const IcoNavigation = document.querySelector("#drop");
const IcoNews = document.querySelector("#drop-2")


CloseAccount.addEventListener("click" ,function(){
  MenuIconClose.classList.remove("show");
  IconMenuMob.classList.remove("active-hover");
});


const AccountCloseDesktop = document.querySelector(".drop-account")
const CloseNews = document.querySelector("#drop")
const CloseNavigation = document.querySelector("#drop-2")
const IconAccountDesktop = document.querySelector(".icon-account")
const customDropdownTablet = document.querySelector(".custom-dropdown-tablet");

CloseNews.addEventListener("click", function(){
  AccountCloseDesktop.classList.remove("active")
  IconAccountDesktop.classList.remove("active-hover")
});


CloseNavigation.addEventListener("click", function(){
  AccountCloseDesktop.classList.remove("active")
  IconAccountDesktop.classList.remove("active-hover")
});


CloseAccount.addEventListener("click", function(){
  MenuNavigationClose.classList.remove("show")
  IcoNavigation.classList.remove("active-hover")
});


CloseAccount.addEventListener("click", function(){
  MenuNewsClose.classList.remove("show")
  IcoNews.classList.remove("active-hover")
});

CloseAccount.addEventListener("click", function(){
  customDropdownTablet.classList.remove("show")
  IconMenuMob.classList.remove("active-hover")
});


//



document.addEventListener("DOMContentLoaded", function() {
  const menuIcon2 = document.querySelector(".menu-icon");

  const customDropdownTablet = document.querySelector(".custom-dropdown-tablet");

  // Função para fechar todos os menus

  

  menuIcon2.addEventListener("click", function() {
if (window.innerWidth > 575 && window.innerWidth <= 1115) {
      // Se a largura da tela estiver entre 575px e 1115px, abra o customDropdownTablet
      
      customDropdownTablet.classList.toggle("show");
 
    }
  });

  // Adicione um evento de clique no documento para fechar os menus
  document.addEventListener("click", function(event) {
    if (!event.target.closest(".dropdown")) {
      
    }
  });

  // Adicione um evento de clique no documento para remover a classe "active-hover" quando clicar em outra parte da tela
document.addEventListener("click", function(event) {
  if (!menuIcon2.contains(event.target) && !customDropdownTablet.contains(event.target)) {
    customDropdownTablet.classList.remove("show");
    menuIcon2.classList.remove("active-hover");
  }
});
});




