document.addEventListener("DOMContentLoaded", () => {
  const cartOptions = document.querySelectorAll(".cart-option");
  const radioButtons = document.querySelectorAll("input[name='cartOption']");

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      cartOptions.forEach((option) => option.classList.remove("expanded"));
      const selectedOption = radio.closest(".cart-option");
      selectedOption.classList.add("expanded"); 
    });
  });
});
