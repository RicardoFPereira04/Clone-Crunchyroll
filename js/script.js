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


$(document).ready(function() {
  const $menuIcon = $(".menu-icon");
  const $customDropdownMobile = $(".custom-dropdown-mobile");
  const Header = (".container-navigation")

  // Quando o menu-icon for clicado
  $menuIcon.click(function(e) {
    e.stopPropagation(); // Impede que o evento de clique se propague para o documento
    $customDropdownMobile.toggleClass("show");
    $menuIcon.toggleClass("active-hover");
  });

  // Evitar que o hover do menu-icon saia quando clicar dentro do custom dropdown mobile
  $customDropdownMobile.click(function(e) {
    e.stopPropagation(); // Impede que o evento de clique se propague para o documento
  });

  $(document).on("click", function(event) {
    if (!$customDropdownMobile.is(event.target) && $customDropdownMobile.has(event.target).length === 0) {
      $customDropdownMobile.removeClass("show");
    
    }
  });

  Header.addEventListener("click" , function(){
    $customDropdownMobile.classList.remove("show")
  
  })
});




const GenerosSubMenu = document.querySelector("#sub-menu");
const SubMenu = document.querySelector(".dropdown-menu-mob");
const customDropdownMob = document.querySelector(".custom-dropdown-mobile");

GenerosSubMenu.addEventListener("click", function() {
  if (SubMenu.classList.contains("show")) {
    // Se o submenu estiver aberto, remova a classe "submenu-opened" do elemento pai
    customDropdownMob.classList.remove("submenu-opened");
  } else {
    // Caso contrário, adicione a classe "submenu-opened" quando o submenu for aberto
    customDropdownMob.classList.add("submenu-opened");
  }
  
  SubMenu.classList.toggle("show");
  customDropdownMob.classList.toggle("scrollable");
  SubMenu2.classList.remove("show")
});

// Adicione um evento de clique no documento para remover a classe quando clicar em outra parte da tela
document.addEventListener("click", function(event) {
  if (!GenerosSubMenu.contains(event.target) && !SubMenu.contains(event.target)) {
    SubMenu.classList.remove("show");
    customDropdownMob.classList.remove("submenu-opened"); // Remova a classe quando o submenu é fechado
  }
});



// Repita o mesmo processo para o segundo submenu, se necessário
const GenerosSubMenu2 = document.querySelector("#sub-menu2");
const SubMenu2 = document.querySelector(".dropdown-menu-mob2");

GenerosSubMenu2.addEventListener("click", function() {
  if (SubMenu2.classList.contains("show")) {
    customDropdownMob.classList.remove("submenu-opened");
  } else {
    customDropdownMob.classList.add("submenu-opened");
  }
  
  SubMenu2.classList.toggle("show");
  customDropdownMob.classList.remove("scrollable");
 
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

IconMenuMob.addEventListener("click" , function(){
  CloseAccount.classList.remove("active-hover")
  AccountCloseDesktop.classList.remove("active")
})


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




const GenerosSubMenuT = document.querySelector("#sub-menuT");
const SubMenuT = document.querySelector(".dropdown-menu-tablet");
const customDropdownT = document.querySelector(".custom-dropdown-tablet");

GenerosSubMenuT.addEventListener("click", function() {
  if (SubMenuT.classList.contains("show")) {
    // Se o submenu estiver aberto, remova a classe "submenu-opened" do elemento pai
    customDropdownT.classList.remove("submenu-opened");
  } else {
    // Caso contrário, adicione a classe "submenu-opened" quando o submenu for aberto
    customDropdownT.classList.add("submenu-opened");
  }
  
  SubMenuT.classList.toggle("show");
  customDropdownT.classList.toggle("scrollable");
  SubMenuT2.classList.remove("show")


});

// Adicione um evento de clique no documento para remover a classe quando clicar em outra parte da tela
document.addEventListener("click", function(event) {
  if (!GenerosSubMenuT.contains(event.target) && !SubMenuT.contains(event.target)) {
    SubMenuT.classList.remove("show");
    customDropdownT.classList.remove("submenu-opened"); // Remova a classe quando o submenu é fechado
  }
});

// Repita o mesmo processo para o segundo submenu, se necessário
const GenerosSubMenuT2 = document.querySelector("#sub-menuT2");
const SubMenuT2 = document.querySelector(".dropdown-menu-tablet2");
const customDropdownT2 = document.querySelector(".custom-dropdown-tablet");

GenerosSubMenuT2.addEventListener("click", function() {
  if (SubMenuT2.classList.contains("show")) {
    customDropdownT2.classList.remove("submenu-opened");
  } else {
    customDropdownT2.classList.add("submenu-opened");
  }
  
  SubMenuT2.classList.toggle("show");
  customDropdownT2.classList.remove("scrollable");
 
});


const CloseAccountTablet = document.querySelector(".drop-account")
const CloseMenuIcon = document.querySelector(".menu-icon");

CloseMenuIcon.addEventListener("click", function()
{
  CloseAccountTablet.classList.remove("active")
});



// MAIN //




