import './style.scss'
// main.ts

// Vänta på att dokumentet är fullt laddat
window.addEventListener('DOMContentLoaded', () => {
  // Hitta knappen via CSS-selektor för båda klasserna
  const button = document.querySelector('.my.button') as HTMLButtonElement;

  // Kontrollera om knappen existerar
  if (button) {
    // Lägg till en event listener för 'click' på knappen
    button.addEventListener('click', () => {
      // Här skriver du vad som ska hända när knappen klickas
      alert('Knappen har klickats!');
    });
  }
});

