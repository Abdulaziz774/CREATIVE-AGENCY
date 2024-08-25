const navbarToggleButton = document.querySelector(".fa-bars");
const headerResNavbar = document.querySelector(".header_res_navbar");
const navDarkLight = document.querySelector(".nav_dark_light");
const body = document.querySelector("body");
const navImage = document.querySelector(".nav_logo_image");

const changeNavIcon = () => {
  const mode = localStorage.getItem("mode");

  if (mode === "dark") {
    navDarkLight.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    navImage.src = "./images/logo-dark.png";
  } else {
    navDarkLight.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    navImage.src = "./images/logo.png";
  }
};

changeNavIcon();

navbarToggleButton.addEventListener("click", () => {
  headerResNavbar.classList.toggle("hidden");
});

navDarkLight.addEventListener("click", () => {
  const mode = localStorage.getItem("mode");

  console.log(mode);

  if (mode === "dark") {
    navImage.src = "./images/logo.png";
    localStorage.setItem("mode", "light");
    navDarkLight.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
  } else {
    localStorage.setItem("mode", "dark");
    navDarkLight.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    body.classList.add("dark-mode");
    navImage.src = "./images/logo-dark.png";
    body.classList.remove("light-mode");
  }
});
