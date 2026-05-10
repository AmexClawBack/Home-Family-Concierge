async function loadIncludes() {

  const headerTarget = document.getElementById("header");
  const footerTarget = document.getElementById("footer");

  if (headerTarget) {
    const headerResponse = await fetch("/header.html");
    headerTarget.innerHTML = await headerResponse.text();
  }

  if (footerTarget) {
    const footerResponse = await fetch("/footer.html");
    footerTarget.innerHTML = await footerResponse.text();
  }

  // mobile nav
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

      menuToggle.classList.toggle("active");
      nav.classList.toggle("active");

    });

    nav.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        nav.classList.remove("active");

      });

    });

  }

}

loadIncludes();