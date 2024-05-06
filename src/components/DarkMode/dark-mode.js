const lightThemeButton = document.getElementById("light-theme");
const darkThemeButton = document.getElementById("dark-theme");
const preferOSThemeButton = document.getElementById("device-theme");

lightThemeButton.addEventListener("click", async () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("preferOS", "false");
  saveTheme();
});

darkThemeButton.addEventListener("click", async () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("preferOS", "false");
  saveTheme();
});


// Función para guardar el estado de la preferencia de color
const saveTheme = async () => {
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("darkTheme", "true");
  } else {
    localStorage.setItem("darkTheme", "false");
  }
};

const loadTheme = async () => {
  const storedTheme = localStorage.getItem("darkTheme");
  if (storedTheme === "true") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

loadTheme();

// Algoritmo para cambiar de tema de acuerdo a la preferencia de color de sistema operativo de usuario
const preferOSColorTheme = async () => {
  // Compruebe si el sistema operativo del usuario tiene una preferencia de combinación de colores oscuros
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // Función para actualizar el tema según la preferencia del sistema operativo del usuario.
  const updateTheme = async () => {
    if (prefersDarkScheme.matches) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkTheme", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkTheme", "false");
    }
  }

  localStorage.setItem("preferOS", "true");

  // Actualización inicial del tema
  updateTheme();
  saveTheme();
  // Actualice el tema cada vez que el usuario cambie su preferencia de sistema operativo.
  prefersDarkScheme.addEventListener("change", updateTheme);
};

// Función para que el botón cambie dependiendo de la preferencia de SO del usuario
preferOSThemeButton.addEventListener("click", preferOSColorTheme);

const loadPreferOSColorTheme = async () => {
  const storedOSTheme = localStorage.getItem("preferOS");
  if (storedOSTheme === "true") {
    preferOSColorTheme();
  } else {
    localStorage.setItem("preferOS", "false");
  }
}

loadPreferOSColorTheme();
