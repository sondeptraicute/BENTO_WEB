const profileCard = document.querySelectorAll(".profile-card");

profileCard.forEach((card) => {
  card.addEventListener("click", () => {
    // Redirect to the URL stored in the data-url attribute
    const url = "./profile_guess_view.html";
    window.location.href = url;
  });
});
