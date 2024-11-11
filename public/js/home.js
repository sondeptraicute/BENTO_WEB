if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

const modal = document.getElementById("modal");

const mainContainer = document.getElementById("main-container");

function ready() {
    setup();
}

function setup() {
    //Mock data
    for (let i = 0; i < 3; i++) {
        const postContainer = document.getElementById("post-container");
        postContainer.insertAdjacentHTML("afterbegin", postItem(posts[i]));
    }

    //Open post detail
    const postHeader = document.querySelectorAll(
        "#post-container .post .post-header"
    );
    postHeader.forEach((item) => {
        item.addEventListener("click", handleViewPostDetail);
    });
    //React post
    const btnReactPost = document.querySelectorAll(".post-action div svg");
    btnReactPost.forEach((item) => {
        item.addEventListener("click", handleReactPost);
    });

    //Modal
    const btnCloseModal = document.getElementById("btn-close-modal");
    const btnOpenModal = document.querySelector("#create-post-container input");
    btnCloseModal.addEventListener("click", handleCloseModal);
    btnOpenModal.addEventListener("click", handleOpenModal);
}

function handleViewPostDetail() {
    const sectionChild = mainContainer.querySelectorAll("section");
    sectionChild.forEach((item) => {
        item.style.display = "none";
    });

    mainContainer.innerHTML = sectionPostDetail();

    //Expand post detail
    const btnExlandPostDetail = document.getElementById("btn-expland");
    btnExlandPostDetail.addEventListener("click", explandPostDetail);

    //Back to home
    const backBtn = document.getElementById("btn-back");
    backBtn.addEventListener("click", handleBackHome);

    //Focus input
    const replyContainer = document.getElementById("reply-container");
    const inputReply = document.getElementById("input-reply");
    inputReply.addEventListener("input", handleFocusInput);
    function handleFocusInput() {
        replyContainer.classList.add("typing-comment");
    }
    replyContainer.scrollTop = replyContainer.scrollHeight;
}

function handleBackHome() {
    window.location.reload();
}

function handleReactPost(event) {
    const btnClicked = event.target.closest("svg");
    // console.log(btnReactPost.classList);

    switch (btnClicked.classList[1]) {
        case "like":
            btnClicked.classList.toggle("liked-post");
            break;
        case "repost":
            btnClicked.classList.toggle("reposted-post");
            break;
        case "comment":
            btnClicked.classList.toggle("commented-post");
            break;
        default:
            break;
    }
}

function explandPostDetail() {
    container.classList.toggle("expanded-post-detail");
}

function handleCloseModal() {
    modal.style.display = "none";
}

function handleOpenModal() {
    modal.style.display = "block";
    document.querySelector("#post-modal input").focus();

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            handleCloseModal();
        }
    });
}

function handleSubmitPost(event) {
    event.preventDefault();
    const postContent = document.querySelector(
        "#form-create-post #post-content input"
    ).value;

    const postContainer = document.getElementById("post-container");
    const postSimple = posts[0];

    postContainer.insertAdjacentHTML(
        "afterbegin",
        newPost(postSimple, postContent)
    );

    handleCloseModal();

    document.querySelector("#form-create-post #post-content input").value = "";

    const btnReactPost = document.querySelectorAll(".post-action div svg");
    console.log(btnReactPost);

    document.querySelectorAll(".post-action div svg").forEach((item) => {
        item.addEventListener("click", handleReactPost);
    });
}

function sectionPostDetail() {
    return `
            <section id="header-container" class="mt-[3rem] md:mt-0 mb-3 flex justify-between items-center">
                <button id="btn-back" class="md:bg-button rounded-full p-[10px]">
                    <img src="../public/svg/ic_arrow_back.svg" alt="icon back" class="size-[24px]" />
                </button>
                <button id="btn-expland" class="hidden lg:block md:bg-button rounded-full p-[10px]">
                    <img src="../public/svg/ic_expland.svg" alt="icon exland post" class="size-[24px]" />
                </button>
            </section>
            <section id="post-detail-container" class="flex flex-col gap-2 items-center">
                <div class="post w-full bg flex flex-col justify-between rounded-[1.25rem] p-3 bg-neutral-25 gap-3">
                    <div class="post-header flex items-start gap-5">
                        <img src="https://i.pinimg.com/originals/4a/7e/74/4a7e7438c14c2807c81cba4a99e4cec2.jpg" alt="avatar-user"
                            class="avatar-user-post rounded-full min-w-[44px] size-[44px]" />
                        <div class="post-content flex flex-col gap-2">
                            <div class="header-content flex justify-items-auto items-center">
                                <h3
                                    class="base text-text-primary text-sm font-medium justify-self-start opacity-80 mr-4">
                                    Moyo
                                    Shiro
                                </h3>
                                <span
                                    class="caption text-text-light text-xs font-normal justify-self-start grow opacity-45">09:00
                                    AM</span>
                                <img src="../public/svg/ic_more.svg" alt="more" loading="lazy"
                                    class="size-[24px] justify-self-end" />
                            </div>
                            <span class="text-sm text-text-secondary opacity-80 self-stretch">Just launched my
                                new
                                portfolio
                                website! 🚀
                                Check out
                                these 15 standout
                                examples of
                                creative, sleek, and interactive portfolio designs that inspired me. Which one's
                                your
                                favorite? #WebDesign #PortfolioInspiration
                            </span>

                            <img src="https://i.pinimg.com/originals/a4/72/10/a47210899e2f804d4f4aead44adaefe0.jpg" loading="lazy"
                                class="max-h-[33rem] w-full md: rounded-[1.5rem] object-cover">
                        </div>
                    </div>

                    <div class="post-action flex justify-end items-center md:justify-start md:pl-[48px]">
                        <div class="flex items-center gap-1.5 px-3 py-1.5">
                            <img src="../public/svg/ic_like.svg" alt="like" class="size-[24px]" />
                            <span class="opacity-80 caption text-xs font-semibold text-text-secondary">12</span>
                        </div>

                        <div class="flex items-center gap-1.5 px-3 py-1.5">
                            <img src="../public/svg/ic_repost.svg" alt="repost" class="size-[24px]" />
                            <span class="opacity-80 caption text-xs font-semibold text-text-secondary">12</span>
                        </div>

                        <div class="flex items-center gap-1.5 px-3 py-1.5">
                            <img src="../public/svg/ic_comment.svg" alt="comment" class="size-[24px]" />
                            <span class="opacity-80 caption text-xs font-semibold text-text-secondary">12</span>
                        </div>

                        <div class="flex items-center md:grow justify-end gap-2">
                            <img src="../public/svg/ic_bookmark.svg" alt="bookmark" class="size-[24px] m-2" />
                            <img src="../public/svg/ic_share.svg" alt="share" class="size-[24px] m-2 hidden md:block" />
                        </div>
                    </div>
                </div>
                <section id="commet-container"
                    class="w-full grow flex flex-col justify-between items-start gap-2 bg-neutral-22 rounded-[1.25rem] mb-3">
                    <div class="list-post w-full fex-col items-center">
                        <div class="post p-3 flex flex-col gap-3 relative">
                            <div class="post-header flex justify-start items-start gap-5">
                                <img src="https://i.pinimg.com/originals/4a/7e/74/4a7e7438c14c2807c81cba4a99e4cec2.jpg" alt="avatar-user"
                                    class="avatar-user-post rounded-full min-w-[44px] size-[44px]" />
                                <div class="post-content flex flex-col gap-2 grow">
                                    <div class="header-content flex items-center">
                                        <h3
                                            class="base text-text-primary text-sm font-medium justify-self-start opacity-80 mr-4">
                                            Moyo
                                            Shiro
                                        </h3>
                                        <span
                                            class="caption text-text-light text-xs font-normal justify-self-start grow opacity-45">2h
                                            ago</span>
                                        <img src="../public/svg/ic_more.svg" alt="more" loading="lazy"
                                            class="size-[24px] justify-self-end" />
                                    </div>
                                    <span class="text-sm text-text-secondary opacity-80 self-stretch">Hi
                                    </span>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="58" viewBox="0 0 2 58" fill="none"
                                class="absolute left-[2.125rem] bottom-0">
                                <path d="M1 1V57" stroke="#F8F8F8" stroke-opacity="0.1" stroke-width="1.5"
                                    stroke-linecap="round" />
                            </svg>
                            <div class="post-action flex justify-end items-center md:justify-start md:pl-[48px]">
                                <div class="flex items-center gap-1.5 px-3 py-1.5">
                                    <img src="../public/svg/ic_like.svg" alt="like" class="size-[24px]" />
                                    <span class="opacity-80 caption text-xs font-semibold text-text-secondary">12</span>
                                </div>

                                <div class="flex items-center gap-1.5 px-3 py-1.5">
                                    <img src="../public/svg/ic_repost.svg" alt="repost" class="size-[24px]" />
                                    <span class="opacity-80 caption text-xs font-semibold text-text-secondary">12</span>
                                </div>

                                <div class="flex items-center gap-1.5 px-3 py-1.5">
                                    <img src="../public/svg/ic_comment.svg" alt="comment" class="size-[24px]" />
                                    <span class="opacity-80 caption text-xs font-semibold text-text-secondary">12</span>
                                </div>

                                <div class="flex items-center md:grow justify-end gap-2">
                                    <img src="../public/svg/ic_bookmark.svg" alt="bookmark" class="size-[24px] m-2" />
                                    <img src="../public/svg/ic_share.svg" alt="share"
                                        class="size-[24px] m-2 hidden md:block" />
                                </div>
                            </div>
                        </div>
                        <div class="post flex flex-col p-3 gap-3">
                            <div class="post-header flex justify-start items-start gap-5">
                                <img src="https://i.pinimg.com/originals/4a/7e/74/4a7e7438c14c2807c81cba4a99e4cec2.jpg" alt="avatar-user"
                                    class="avatar-user-post rounded-full min-w-[44px] size-[44px]" />
                                <div class="post-content flex flex-col gap-2 grow">
                                    <div class="header-content flex items-center">
                                        <h3
                                            class="base text-text-primary text-sm font-medium justify-self-start opacity-80 mr-4">
                                            Moyo
                                            Shiro
                                        </h3>
                                        <span
                                            class="caption text-text-light text-xs font-normal justify-self-start grow opacity-45">2h
                                            ago</span>
                                        <img src="../public/svg/ic_more.svg" alt="more" loading="lazy"
                                            class="size-[24px] justify-self-end" />
                                    </div>
                                    <span class="text-sm text-text-secondary opacity-80 self-stretch">Hi
                                    </span>
                                </div>
                            </div>
                            <div class="post-action flex justify-end items-center md:justify-start md:pl-[48px]">
                                <div class="flex items-center gap-1.5 px-3 py-2">
                                    <img src="../public/svg/ic_like.svg" alt="like" class="size-[24px]" />
                                    <span class="opacity-80 caption text-xs font-semibold text-text-secondary">12</span>
                                </div>

                                <div class="flex items-center gap-1.5 px-3 py-1.5">
                                    <img src="../public/svg/ic_repost.svg" alt="repost" class="size-[24px]" />
                                    <span class="opacity-80 caption text-xs font-semibold text-text-secondary">12</span>
                                </div>

                                <div class="flex items-center gap-1.5 px-3 py-1.5">
                                    <img src="../public/svg/ic_comment.svg" alt="comment" class="size-[24px]" />
                                    <span class="opacity-80 caption text-xs font-semibold text-text-secondary">12</span>
                                </div>

                                <div class="flex items-center md:grow justify-end gap-2">
                                    <img src="../public/svg/ic_bookmark.svg" alt="bookmark" class="size-[24px] m-2" />
                                    <img src="../public/svg/ic_share.svg" alt="share"
                                        class="size-[24px] m-2 hidden md:block" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <section id="reply-container"
                        class="w-full flex items-center justify-between p-3 bottom-0 bg-neutral-370 rounded-[1.25rem]">
                        <div id="reply-content" class="w-full flex justify-between items-center gap-3">
                            <img src="https://i.pinimg.com/originals/d3/6f/ef/d36fef4f4885354afcfd3753dee95741.jpg" alt="avatar" class="rounded-full size-[44px]" />
                            <input type="text" placeholder="Post your reply..." id="input-reply"
                                class="!bg-transparent placeholder:text-text-hind text-base font-normal grow focus:outline-none focus:bg-transparent" />
                        </div>
                        <div id="reply-action" class="flex items-center justify-start">
                            <div id="tool-reply" class="hidden gap-1 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <g opacity="0.8">
                                            <path
                                                d="M17.5 12C17.5 15.0376 15.0376 17.5 12 17.5C8.96243 17.5 6.5 15.0376 6.5 12M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
                                                stroke="#F8F8F8" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path
                                                d="M11 9C11 9.82843 10.3284 10.5 9.5 10.5C8.67157 10.5 8 9.82843 8 9C8 8.17157 8.67157 7.5 9.5 7.5C10.3284 7.5 11 8.17157 11 9Z"
                                                fill="#F8F8F8" fill-opacity="0.7" />
                                            <path
                                                d="M16 9C16 9.82843 15.3284 10.5 14.5 10.5C13.6716 10.5 13 9.82843 13 9C13 8.17157 13.6716 7.5 14.5 7.5C15.3284 7.5 16 8.17157 16 9Z"
                                                fill="#F8F8F8" fill-opacity="0.7" />
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <g opacity="0.8">
                                            <path
                                                d="M5.87868 14.1213L6.40901 14.6517L6.40901 14.6517L5.87868 14.1213ZM6.75 4.5H17.25V3H6.75V4.5ZM19.5 6.75V17.25H21V6.75H19.5ZM4.28033 16.7803L6.40901 14.6517L5.34835 13.591L3.21967 15.7197L4.28033 16.7803ZM4.5 17.25V16.25H3V17.25H4.5ZM4.5 16.25V6.75H3V16.25H4.5ZM9.59099 14.6517L15.7197 20.7803L16.7803 19.7197L10.6517 13.591L9.59099 14.6517ZM17.25 19.5H16.25V21H17.25V19.5ZM16.25 19.5H6.75V21H16.25V19.5ZM6.40901 14.6517C7.28769 13.773 8.71231 13.773 9.59099 14.6517L10.6517 13.591C9.18718 12.1265 6.81282 12.1265 5.34835 13.591L6.40901 14.6517ZM3 17.25C3 19.3211 4.67893 21 6.75 21V19.5C5.50736 19.5 4.5 18.4926 4.5 17.25H3ZM19.5 17.25C19.5 18.4926 18.4926 19.5 17.25 19.5V21C19.3211 21 21 19.3211 21 17.25H19.5ZM17.25 4.5C18.4926 4.5 19.5 5.50736 19.5 6.75H21C21 4.67893 19.3211 3 17.25 3V4.5ZM6.75 3C4.67893 3 3 4.67893 3 6.75H4.5C4.5 5.50736 5.50736 4.5 6.75 4.5V3ZM15.75 9.5C15.75 10.1904 15.1904 10.75 14.5 10.75V12.25C16.0188 12.25 17.25 11.0188 17.25 9.5H15.75ZM14.5 10.75C13.8096 10.75 13.25 10.1904 13.25 9.5H11.75C11.75 11.0188 12.9812 12.25 14.5 12.25V10.75ZM13.25 9.5C13.25 8.80964 13.8096 8.25 14.5 8.25V6.75C12.9812 6.75 11.75 7.98122 11.75 9.5H13.25ZM14.5 8.25C15.1904 8.25 15.75 8.80964 15.75 9.5H17.25C17.25 7.98122 16.0188 6.75 14.5 6.75V8.25Z"
                                                fill="#f8f8f8" fill-opacity="0.5" />
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <g opacity="0.8">
                                            <path
                                                d="M5.75 12.3676C5.75 14.0113 6.70955 15 8.34036 15C9.79045 15 10.7672 14.138 10.7672 12.8662V12.5155C10.7672 11.9789 10.5176 11.738 9.94966 11.738H8.89544C8.51678 11.738 8.31454 11.9113 8.31454 12.2282C8.31454 12.5493 8.52108 12.7268 8.89544 12.7268H9.4247V12.9718C9.4247 13.5 9.01162 13.8549 8.3963 13.8549C7.60456 13.8549 7.16997 13.3268 7.16997 12.3634V11.6662C7.16997 10.6901 7.59596 10.1789 8.40921 10.1789C8.96429 10.1789 9.287 10.5085 9.63554 10.8507C9.76033 10.9732 9.88941 11.0282 10.0572 11.0282C10.3972 11.0282 10.6338 10.8 10.6338 10.4662C10.6338 10.1324 10.3799 9.76901 9.99268 9.49437C9.56239 9.17746 8.97289 9 8.30594 9C6.72246 9 5.75 10.0014 5.75 11.5986V12.3676Z"
                                                fill="#F8F8F8" fill-opacity="0.5" />
                                            <path
                                                d="M12.3894 14.9155C12.8412 14.9155 13.0951 14.6451 13.0951 14.1634V9.81549C13.0951 9.33803 12.8369 9.06338 12.3808 9.06338C11.9247 9.06338 11.6708 9.3338 11.6708 9.81549V14.1634C11.6708 14.6408 11.9333 14.9155 12.3894 14.9155Z"
                                                fill="#F8F8F8" fill-opacity="0.5" />
                                            <path
                                                d="M14.9626 14.9155C15.4101 14.9155 15.6596 14.6451 15.6596 14.1634V12.7014H17.4669C17.8025 12.7014 18.0306 12.4817 18.0306 12.1563C18.0306 11.831 17.8068 11.6113 17.4669 11.6113H15.6596V10.2254H17.6863C18.0133 10.2254 18.25 9.99718 18.25 9.67183C18.25 9.34225 18.0133 9.10563 17.6863 9.10563H15.0572C14.5237 9.10563 14.2354 9.38873 14.2354 9.90423V14.1634C14.2354 14.6366 14.5022 14.9155 14.9626 14.9155Z"
                                                fill="#F8F8F8" fill-opacity="0.5" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75ZM6.75 4.5C5.50736 4.5 4.5 5.50736 4.5 6.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V6.75C19.5 5.50736 18.4926 4.5 17.25 4.5H6.75Z"
                                                fill="#F8F8F8" fill-opacity="0.5" />
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <g opacity="0.8">
                                            <path
                                                d="M16.8684 19.8667C15.4543 20.7437 13.7863 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 13.9797 20.2662 16.0242 17.9715 15.8156C16.0837 15.644 14.7249 13.9258 14.993 12.0492L15.5226 8.40278M14.9375 12.4805C14.63 14.6681 12.8291 16.2235 10.9149 15.9544C9.00068 15.6854 7.69817 13.6939 8.00562 11.5063C8.31308 9.31862 10.1141 7.76327 12.0283 8.03229C13.9424 8.30131 15.245 10.2928 14.9375 12.4805Z"
                                                stroke="#F8F8F8" stroke-opacity="0.5" stroke-width="1.5"
                                                stroke-linecap="round" />
                                        </g>
                                    </svg>
                                </div>
                            </div>

                            <button
                                class="bg-button px-[1.5rem] py-[0.75rem] rounded-[2rem] base text-sm font-semibold text-text-secondary">
                                Reply
                            </button>
                        </div>
                    </section>
                </section>
            </section>`;
}

function postItem(post) {
    return `
  <div class="post w-full bg flex flex-col rounded-[1.25rem] p-3 bg-neutral-22 gap-3">
    <div class="post-header flex items-start gap-5">
        <img src="${post.user.avatar}" alt="avatar-user"
            class="avatar-user-post rounded-full min-w-[44px] size-[44px] object-cover" />
        <div class="post-content w-full flex flex-col gap-2">
            <div class="header-content flex justify-items-auto items-center">
                <h3
                    class="base text-text-primary text-sm font-medium justify-self-start opacity-80 mr-4"> ${post.user.name}
                </h3>
                <span
                    class="caption text-text-light text-xs font-normal justify-self-start grow opacity-45">${post.user.time}</span>
                <img src="../public/svg/ic_more.svg" alt="more" loading="lazy"
                    class="size-[24px] justify-self-end" />
            </div>
            <span class="text-sm text-text-secondary opacity-80 self-stretch">${post.content.text}
            </span>

            <img src="${post.content.image}" loading="lazy"
                class="max-h-[20rem] md:max-h-[22.5rem] w-full md: rounded-[1.5rem] object-cover">
        </div>
    </div>

    <div class="post-action flex justify-end items-center md:justify-start md:pl-[48px]">
      <div class="flex items-center gap-1.5 px-3 py-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" class="btn-react like">
              <g opacity="0.8">
                  <path
                      d="M12 5.57193C18.3331 -0.86765 29.1898 11.0916 12 20.75C-5.18982 11.0916 5.66687 -0.867651 12 5.57193Z"
                      stroke="#F8F8F8" stroke-opacity="0.5" stroke-width="1.5"
                      stroke-linejoin="round" />
              </g>
          </svg>
          <span class="opacity-80 caption text-xs font-semibold text-text-secondary">${post.interactions.likes}</span>
      </div>

      <div class="flex items-center gap-1.5 px-3 py-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
              fill="none" class="btn-react repost">
              <g opacity="0.8">
                  <path
                      d="M5.4165 13.25V8.75C5.4165 7.09315 6.75965 5.75 8.4165 5.75H15.7736M13.3122 2.75L16.4194 5.75L13.3122 8.75M19.9165 10.75V15.25C19.9165 16.9069 18.5734 18.25 16.9165 18.25H9.55936M12.0208 21.25L8.91365 18.25L12.0208 15.25"
                      stroke="#F8F8F8" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
              </g>
          </svg>
          <span class="opacity-80 caption text-xs font-semibold text-text-secondary">${post.interactions.reposts}</span>
      </div>

      <div class="flex items-center gap-1.5 px-3 py-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
              fill="none" class="btn-react comment">
              <g opacity="0.8">
                  <path
                      d="M20.5859 6.75C20.5859 5.09315 19.2428 3.75 17.5859 3.75H7.08594C5.42908 3.75 4.08594 5.09315 4.08594 6.75V21.75L7.84274 19.402C8.00167 19.3027 8.18531 19.25 8.37273 19.25H17.5859C19.2428 19.25 20.5859 17.9069 20.5859 16.25V6.75Z"
                      stroke="#F8F8F8" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="square"
                      stroke-linejoin="round" />
              </g>
          </svg>
          <span class="opacity-80 caption text-xs font-semibold text-text-secondary">${post.interactions.comments}</span>
      </div>

      <div class="flex items-center md:grow justify-end gap-2">
          <img src="../public/svg/ic_bookmark.svg" alt="bookmark" class="size-[24px] m-2" />
          <img src="../public/svg/ic_share.svg" alt="share" class="size-[24px] m-2 hidden md:block" />
      </div>
    </div>
  </div>`;
}

function newPost(post, content) {
    return `
    <div class="post w-full bg flex flex-col rounded-[1.25rem] p-3 bg-neutral-22 gap-3">
      <div class="post-header flex items-start gap-5">
          <img src="${post.user.avatar}" alt="avatar-user"
              class="avatar-user-post rounded-full min-w-[44px] size-[44px]" />
          <div class="post-content w-full flex flex-col gap-2">
              <div class="header-content flex justify-items-auto items-center">
                  <h3
                      class="base text-text-primary text-sm font-medium justify-self-start opacity-80 mr-4"> ${post.user.name}
                  </h3>
                  <span
                      class="caption text-text-light text-xs font-normal justify-self-start grow opacity-45">Just now</span>
                  <img src="../public/svg/ic_more.svg" alt="more" loading="lazy"
                      class="size-[24px] justify-self-end" />
              </div>
              <span class="text-sm text-text-secondary opacity-80 self-stretch">${content}
              </span>
  
              <img src="${post.content.image}" loading="lazy"
                  class="max-h-[22.5rem] w-full md: rounded-[1.5rem] object-cover">
          </div>
      </div>
  
      <div class="post-action flex justify-end items-center md:justify-start md:pl-[48px]">
        <div class="flex items-center gap-1.5 px-3 py-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" class="btn-react like">
                <g opacity="0.8">
                    <path
                        d="M12 5.57193C18.3331 -0.86765 29.1898 11.0916 12 20.75C-5.18982 11.0916 5.66687 -0.867651 12 5.57193Z"
                        stroke="#F8F8F8" stroke-opacity="0.5" stroke-width="1.5"
                        stroke-linejoin="round" />
                </g>
            </svg>
            <span class="opacity-80 caption text-xs font-semibold text-text-secondary">${post.interactions.likes}</span>
        </div>
  
        <div class="flex items-center gap-1.5 px-3 py-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                fill="none" class="btn-react repost">
                <g opacity="0.8">
                    <path
                        d="M5.4165 13.25V8.75C5.4165 7.09315 6.75965 5.75 8.4165 5.75H15.7736M13.3122 2.75L16.4194 5.75L13.3122 8.75M19.9165 10.75V15.25C19.9165 16.9069 18.5734 18.25 16.9165 18.25H9.55936M12.0208 21.25L8.91365 18.25L12.0208 15.25"
                        stroke="#F8F8F8" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </g>
            </svg>
            <span class="opacity-80 caption text-xs font-semibold text-text-secondary">${post.interactions.reposts}</span>
        </div>
  
        <div class="flex items-center gap-1.5 px-3 py-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                fill="none" class="btn-react comment">
                <g opacity="0.8">
                    <path
                        d="M20.5859 6.75C20.5859 5.09315 19.2428 3.75 17.5859 3.75H7.08594C5.42908 3.75 4.08594 5.09315 4.08594 6.75V21.75L7.84274 19.402C8.00167 19.3027 8.18531 19.25 8.37273 19.25H17.5859C19.2428 19.25 20.5859 17.9069 20.5859 16.25V6.75Z"
                        stroke="#F8F8F8" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="square"
                        stroke-linejoin="round" />
                </g>
            </svg>
            <span class="opacity-80 caption text-xs font-semibold text-text-secondary">${post.interactions.comments}</span>
        </div>
  
        <div class="flex items-center md:grow justify-end gap-2">
            <img src="../public/svg/ic_bookmark.svg" alt="bookmark" class="size-[24px] m-2" />
            <img src="../public/svg/ic_share.svg" alt="share" class="size-[24px] m-2 hidden md:block" />
        </div>
      </div>
    </div>`;
}
