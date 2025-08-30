const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const bioText = btn.nextElementSibling;

    if (bioText.style.display === "block") {
      bioText.style.display = "none";
      btn.textContent = "Ver biografia";
    } else {
      bioText.style.display = "block";
      btn.textContent = "Esconder biografia";
    }
  });
});