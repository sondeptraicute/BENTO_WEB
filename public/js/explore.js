const tagsList = document.getElementById("tags-list");
const goLeft = document.getElementById("go-left");
const goRight = document.getElementById("go-right");
const tags = document.querySelectorAll(".tag-card");
const profileCard = document.querySelectorAll(".profile-card");
const trendingPostsCont = document.getElementById("trending-post-container");

// Function to handle the tag selection
tags.forEach((tag) => {
  tag.addEventListener("click", function () {
    // Remove 'active' class from all tags
    tags.forEach((t) => t.classList.remove("active"));

    // Add 'active' class to the clicked tag
    tag.classList.add("active");
  });
});

function getScrollDistance() {
  const containerWidth = tagsList.offsetWidth; // Get the width of the tag list container
  const scrollDistance = containerWidth - 70; // Subtract 70px to match 'calc(100% - 70px)'
  return scrollDistance;
}

// Scroll to the left when the left button is clicked
goLeft.addEventListener("click", function () {
  tagsList.scrollBy({
    left: -getScrollDistance(), // Use the computed scroll distance
    behavior: "smooth", // Smooth scrolling effect
  });
});

// Scroll to the right when the right button is clicked
goRight.addEventListener("click", function () {
  tagsList.scrollBy({
    left: getScrollDistance(), // Use the computed scroll distance
    behavior: "smooth", // Smooth scrolling effect
  });
});

profileCard.forEach((card) => {
  card.addEventListener("click", () => {
    // Redirect to the URL stored in the data-url attribute
    const url = "./profile_guess_view.html";
    window.location.href = url;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const numSections = 6;

  if (trendingPostsCont) {
    let sectionsHtml = "";
    for (let i = 0; i < numSections; i++) {
      sectionsHtml += sectionTrendingPostDetail();
    }
    trendingPostsCont.innerHTML = sectionsHtml;
    const trendingPosts = document.querySelectorAll(".trending-post");
    trendingPosts.forEach((post) => {
      post.addEventListener("click", () => {
        // Redirect to the URL stored in the data-url attribute
        const url = "./trending_topic_detail.html";
        window.location.href = url;
      });
    });
  }
});

function sectionTrendingPostDetail() {
  return `<div 
            class="group trending-post w-full bg flex flex-col rounded-[20px] p-3 bg-neutral-22 gap-3 md:items-center md:justify-center md:hover:bg-[#f8f8f81a]"
          >
            <img
              src="https://i.pinimg.com/originals/d3/6f/ef/d36fef4f4885354afcfd3753dee95741.jpg"
              alt="avatar"
              class="rounded-xl gap-2 justify-start items-center max-h-[212px] w-full object-cover"
            />
            <div
              class="trending-content grow flex flex-col gap-2 mx-2 md:justify-start md:items-start"
            >
              <span class="text-text-primary text-sm font-medium line-clamp-1"
                >SpaceX Launches Largest Satellite Constellation</span
              >
              <span class="text-text-light text-xs font-normal line-clamp-2"
                >So Apple announced the new features coming in iOS18 and it’s
                just over a couple of weeks since the beta version was
                released.</span
              >
            </div>

            <div
              id="trending-footer"
              class="flex w-full justify-start items-center mt-1 ml-3 mb-2"
            >
              <img
                src="https://i.pinimg.com/originals/d3/6f/ef/d36fef4f4885354afcfd3753dee95741.jpg"
                alt="Avatar 3"
                class="group-hover:border-[#444444] border-[#2e2e2e] border-[2px] w-[20px] h-[20px] object-cover rounded-full"
              />
              <img
                src="https://i.pinimg.com/originals/4a/7e/74/4a7e7438c14c2807c81cba4a99e4cec2.jpg"
                alt="Avatar 5"
                class="group-hover:border-[#444444] border-[#2e2e2e] border-[2px] w-[20px] h-[20px] ml-[-11px] object-cover rounded-full"
              />
              <img
                src="https://i.pinimg.com/originals/14/ab/f1/14abf1f58ea5686cf9e24ec22a099892.jpg"
                alt="Avatar 9"
                class="group-hover:border-[#444444] border-[#2e2e2e] border-[2px] w-[20px] h-[20px] ml-[-11px] object-cover rounded-full"
              />
              <img
                src="https://i.pinimg.com/originals/d3/6f/ef/d36fef4f4885354afcfd3753dee95741.jpg"
                alt="Avatar 9"
                class="group-hover:border-[#444444] border-[#2e2e2e] border-[2px] w-[20px] h-[20px] ml-[-11px] object-cover rounded-full"
              />
              <span
                class="ml-3 mr-3 items-end font-normal text-text-primary text-[10px] opacity-45"
                >Trending now</span
              >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="8"
                viewBox="0 0 9 8"
                fill="none"
              >
                <circle cx="4.375" cy="4" r="4" fill="#B587FF" />
              </svg>

              <span
                class="items-end text-text-primary text-[10px] p-2 font-semibold"
                >Technology</span
              >
            </div>
          </div>`;
}
