// Toggle the visibility of a dropdown menu
const toggleDropdown = (dropdown, menu, isOpen) => {
  dropdown.classList.toggle("open", isOpen);
  menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0;
};

// Close all open dropdowns
const closeAllDropdowns = () => {
  document.querySelectorAll(".dropdown-container.open").forEach((openDropdown) => {
    toggleDropdown(openDropdown, openDropdown.querySelector(".dropdown-menu"), false);
  });
};

// Attach click event to all dropdown toggles
document.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();

    const dropdown = dropdownToggle.closest(".dropdown-container");
    const menu = dropdown.querySelector(".dropdown-menu");
    const isOpen = dropdown.classList.contains("open");

    closeAllDropdowns(); // Close all open dropdowns
    toggleDropdown(dropdown, menu, !isOpen); // Toggle current dropdown visibility
  });
});

// Attach click event to sidebar toggle buttons
document.querySelectorAll(".sidebar-toggler, .sidebar-menu-button").forEach((button) => {
  button.addEventListener("click", () => {
    closeAllDropdowns(); // Close all open dropdowns
    document.querySelector(".sidebar").classList.toggle("collapsed"); // Toggle collapsed class on sidebar
  });
});

window.addEventListener("DOMContentLoaded", () => {
      const nome = localStorage.getItem("nomeUsuario");
      const foto = localStorage.getItem("fotoPerfil");

      document.getElementById("nomeUsuario").textContent = nome || "Usuário";
      document.getElementById("fotoPerfil").src = foto || "default-avatar.png";
    });

// Collapse sidebar by default on small screens
if (window.innerWidth <= 1024) document.querySelector(".sidebar").classList.add("collapsed");
// Perfil
const nomeUsuario = localStorage.getItem("nomeUsuario") || "Visitante";
    const fotoPerfil = localStorage.getItem("fotoPerfil") || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";

    const headerLeft = document.querySelector(".header-left");
    headerLeft.innerHTML = `
      <div class="user-info">
        <img src="${fotoPerfil}" alt="Foto de Perfil" class="profile-pic" />
        <span class="user-name">${nomeUsuario}</span>
      </div>
    `;
    if (nomeUsuario === "Visitante") {
  // Esconde o botão de Sign Out se o usuário não estiver logado
  const signOutItem = document.querySelector('a[href="Login.html"]').closest(".nav-item");
  if (signOutItem) {
    signOutItem.style.display = "none";
  }
}