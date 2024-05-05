const lightThemeButton = document.getElementById("light-theme");
const darkThemeButton = document.getElementById("dark-theme");



lightThemeButton.addEventListener("click", async () => {
  document.documentElement.classList.remove("dark");
  saveTheme();
});

darkThemeButton.addEventListener("click", async () => {
  document.documentElement.classList.add("dark");
  saveTheme();
});


// Función para guardar el estado de la preferencia de color
const saveTheme = async () => {
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

const loadTheme = async () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

loadTheme();

// Algoritmo para cambiar de tema de acuerdo a la preferencia de color de sistema operativo de usuario
const toggleThemeButton = document.getElementById("device-theme");

const preferColorTheme = async () => {
  // Compruebe si el sistema operativo del usuario tiene una preferencia de combinación de colores oscuros
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // Función para actualizar el tema según la preferencia del sistema operativo del usuario.
  const updateTheme = async () => {
    if (prefersDarkScheme.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  // Actualización inicial del tema
  updateTheme();
  saveTheme();
  // Actualice el tema cada vez que el usuario cambie su preferencia de sistema operativo.
  prefersDarkScheme.addEventListener("change", updateTheme);
};

// Función para que el botón cambie dependiendo de la preferencia de SO del usuario
toggleThemeButton.addEventListener("click", preferColorTheme);

