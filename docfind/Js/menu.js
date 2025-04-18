    const menuButton = document.getElementById("menu");
    const mobileMenu = document.querySelector(".mobile-link");

    menuButton.addEventListener("click", () => {
      if (window.innerWidth <= 770) {
        mobileMenu.classList.toggle("show");
      }
    });

   
  