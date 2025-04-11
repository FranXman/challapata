// Elementos del DOM
const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

// Fecha límite: 1 de mayo de 2025, 00:00
const deadline = new Date("May 1, 2025 00:00:00").getTime();

// Función de cuenta regresiva
const timeFunction = setInterval(() => {
  // Fecha actual
  const now = new Date().getTime();

  // Diferencia entre la fecha límite y la fecha actual
  const distance = deadline - now;

  // Cálculos de tiempo
  const daysValue = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hoursValue = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesValue = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secondsValue = Math.floor((distance % (1000 * 60)) / 1000);

  // Actualizar el contenido del DOM
  seconds.textContent = secondsValue < 10 ? `0${secondsValue}` : secondsValue;
  minutes.textContent = minutesValue < 10 ? `0${minutesValue}` : minutesValue;
  hours.textContent = hoursValue < 10 ? `0${hoursValue}` : hoursValue;
  days.textContent = daysValue < 10 ? `0${daysValue}` : daysValue;

  // Si la cuenta regresiva termina
  if (distance < 0) {
    clearInterval(timeFunction);
    seconds.textContent = "00";
    minutes.textContent = "00";
    hours.textContent = "00";
    days.textContent = "00";
  }
}, 1000); // Actualizar cada segundo