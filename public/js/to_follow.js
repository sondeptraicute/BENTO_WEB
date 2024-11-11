const trendingPosts = document.querySelectorAll(".trending-post");

trendingPosts.forEach((post) => {
  post.addEventListener("click", () => {
    // Redirect to the URL stored in the data-url attribute
    const url = "./trending_topic_detail.html";
    window.location.href = url;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const profileContainer = document.getElementById("profile-container");
  const numSections = 8; // You can change this number to control how many times the content is added

  if (profileContainer) {
    let sectionsHtml = "";

    // Generate the sections and concatenate them into a single string
    for (let i = 0; i < numSections; i++) {
      sectionsHtml += sectionProfileCard();
    }

    // Inject the concatenated HTML into the container
    profileContainer.innerHTML = sectionsHtml;
    const profileCard = document.querySelectorAll(".profile-card");
    profileCard.forEach((card) => {
      card.addEventListener("click", () => {
        // Redirect to the URL stored in the data-url attribute
        const url = "./profile_guess_view.html";
        window.location.href = url;
      });
    });
  }
});

function sectionProfileCard() {
  return `<div
            class="profile-card w-full bg flex flex-col rounded-[20px] p-3 bg-neutral-22 gap-3 md:min-h-[252px] md:max-h-[252px] md:items-center md:justify-center md:hover:bg-[#f8f8f81a] cursor-pointer"
          >
            <div
              class="profile-info flex items-end gap-3 md:flex-col md:justify-center md:items-center"
            >
              <div id="avatar-user" class="relative">
                <div
                  class="absolute size-[20px] -left-1 -top-1 rounded-full bg-[#323232] border-[3px] border-[#323232]"
                >
                  <img
                    src="../public/svg/ic_is_offline.svg"
                    class="h-full w-full object-cover"
                  />
                </div>

                <img
                  src="https://i.pinimg.com/originals/4a/7e/74/4a7e7438c14c2807c81cba4a99e4cec2.jpg"
                  alt="avatar"
                  class="rounded-full min-w-[44px] size-[44px] object-cover"
                />
              </div>
              <div
                class="profile-content grow flex flex-col gap-2 md:justify-center md:items-center"
              >
                <span class="text-text-primary text-sm font-medium"
                  >Nettie Schuster</span
                >
                <span class="text-text-light text-xs font-normal md:hidden">
                  Cordia.Roob52
                </span>
                <span class="hidden text-text-light text-xs font-normal md:flex"
                  >@nettie_schuster</span
                >
              </div>

              <button class="btn-add md:hidden bg-button rounded-full p-[10px]">
                <img
                  src="../public/svg/ic_add.svg"
                  alt="icon add"
                  class="size-[24px]"
                />
              </button>
            </div>
            <div class="profile-desc">
              <span
                class="text-text-light text-sm/6 line-clamp-2 pl-[56px] opacity-80 md:hidden"
                >Turning coffee into code and ideas into interfaces.</span
              >
            </div>
          </div>`;
}
