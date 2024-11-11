if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    setup();
}

const profileContainer = document.getElementById("profile-container");
const sidebar = document.getElementById("sidebar");

function setup() {
    console.log(window.location.pathname);

    if (window.location.pathname === "/src/profile_user_view.html") {
        //Open edit profile
        const btnEditProfile = document.getElementById("btn-edit-profile");
        btnEditProfile.addEventListener("click", openEditProfile);

        //Open view followers
        const btnViewFollowers = document.getElementById("btn_view_followers");
        btnViewFollowers.addEventListener("click", guessViewFollowers);
    } else if (window.location.pathname === "/src/profile_guess_view.html") {
        //Open more options
        const btnMoreOptions = document.getElementById("btn-more-option");
        btnMoreOptions.addEventListener("click", openMoreOptions);

        //Open view followers
        const btnViewFollowers = document.getElementById("btn_view_followers");
        btnViewFollowers.addEventListener("click", userViewFollowers);
    }
}

function guessViewFollowers() {
    profileContainer.style.display = "none";
    sidebar.insertAdjacentHTML("afterend", userViewFollowersContainer());

    const toggleItems = document.querySelectorAll("#toggle-group .toggle-item");

    toggleItems.forEach((item) => {
        item.addEventListener("click", handleToggleClick);
    });

    //Set on click back to profile
    const btnBack = document.getElementById("btn-back");
    btnBack.addEventListener("click", function () {
        window.location.reload();
    });
}

function userViewFollowers() {
    profileContainer.style.display = "none";
    sidebar.insertAdjacentHTML("afterend", guessViewFollowersContainer());
    const toggleItems = document.querySelectorAll("#toggle-group .toggle-item");

    toggleItems.forEach((item) => {
        item.addEventListener("click", handleToggleClick);
    });

    //Set on click back to profile
    const btnBack = document.getElementById("btn-back");
    btnBack.addEventListener("click", function () {
        window.location.reload();
    });
}

function handleToggleClick(event) {
    const parent = event.target.parentElement;

    const btnClicked = event.target;

    const siblingItems = parent.querySelectorAll(".toggle-item");

    siblingItems.forEach((item) => {
        if (document.getElementById(item.innerText.toLowerCase())) {
            document.getElementById(item.innerText.toLowerCase()).style.display =
                "none";
        }
        item.classList.remove("active");
    });
    btnClicked.classList.add("active");

    const tabName = btnClicked.innerText.toLowerCase();
    if (document.getElementById(btnClicked.innerText.toLowerCase())) {
        switch (tabName) {
            case "media":
                document.getElementById("media").style.display = "grid";
                break;
            default:
                document.getElementById(tabName).style.display = "flex";
                break;
        }
    }
}

function openEditProfile() {
    const sectionChild = profileContainer.querySelectorAll("section");
    sectionChild.forEach((item) => {
        item.style.display = "none";
    });
    profileContainer.innerHTML = editProfileContainer();

    //Set on click back to profile
    const btnBack = document.getElementById("btn-back-view-profile");
    btnBack.addEventListener("click", function () {
        window.location.reload();
    });
}
function openMoreOptions(event) {
    event.stopPropagation();
    const moreOptionsContainer = document.getElementsByTagName("more-option")[0];

    moreOptionsContainer.classList.toggle("hidden");
    moreOptionsContainer.classList.toggle("flex");
}

function editProfileContainer() {
    return `
    <section id="profile-header" class="w-full absolute flex items-center gap-2 p-3 z-10">
        <button id="btn-back-view-profile" class="bg-button rounded-full p-[10px]">
            <img src="../public/svg/ic_arrow_back.svg" alt="back" class="size-[24px]" />
        </button>
        <span class="grow"></span>
        <button id="btn-delete" class="bg-button rounded-full p-[10px]">
            <img src="../public/svg/ic_delete.svg" alt="delete" class="size-[24px]" />
        </button>
        <button id="btn-capture-screen" class="bg-button rounded-full p-[10px]">
            <img src="../public/svg/ic_camera.svg" alt="capture" class="size-[24px]" />
        </button>
        <div class="bg-button rounded-full px-6 py-3">
            <span class="base text-sm font-semibold text-text-secondary">Save</span>
        </div>
    </section>
    <section id="profile-cover" class="w-full">
        <!-- Banner -->
        <section id="profile-header" class="relative">
            <img src="https://i.pinimg.com/originals/d3/6f/ef/d36fef4f4885354afcfd3753dee95741.jpg" class="max-h-[11.25rem] w-full object-cover" alt="Banner" />

            <input type="file" id="upload-avatar"
                class="absolute left-6 -bottom-[2.5rem] opacity-0 w-20 h-20 rounded-full focus:opacity-0 z-20">
            <div
                class="absolute w-20 h-20 left-6 -bottom-[2.5rem] border-[0.25rem] border-[#2B2B2B] rounded-full z-[15] bg-neutral-460 flex flex-col justify-center items-center ">
                <img src="../public/svg/ic_camera.svg" alt="camera" class="size-6" />
            </div>
            <img src="https://i.pinimg.com/originals/a4/72/10/a47210899e2f804d4f4aead44adaefe0.jpg" alt="avatar"
                class="border-[0.25rem] border-[#2B2B2B] absolute w-20 h-20 rounded-full z-10 left-6 -bottom-[2.5rem]">
            </input>
        </section>
    </section>
    <section id="edit-profile-container" class="w-full h-full mt-[4rem] p-3">
        <div class="flex flex-col rounded-[2rem] bg-neutral-22 ">
            <div id="edit-profile-header" class="w-full px-4 py-3">
                <span
                    class="hairline text-xs/[1.25rem] font-semibold tracking-[0.0375rem] uppercase opacity-60">edit
                    profile</span>
            </div>
            <ul id="edit-profile-items" class="w-full">
                <li class="edit-item">
                    <span class="base text-text-secondary text-sm opacity-80 flex items-center gap-3">
                        <img src="../public/svg/ic_avatar.svg" alt="edit" class="size-6" />Name
                    </span>
                    <div class="flex justify-between items-center">
                        <input type="text" class="grow text-text-primary text-sm opacity-80"
                            value="Moyo Shiro" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none">
                            <g opacity="0.5">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.5805 9.97493C15.8428 9.65434 15.7955 9.18183 15.4749 8.91953C15.1543 8.65724 14.6818 8.70449 14.4195 9.02507L10.4443 13.8837L9.03033 12.4697C8.73744 12.1768 8.26256 12.1768 7.96967 12.4697C7.67678 12.7626 7.67678 13.2374 7.96967 13.5303L9.96967 15.5303C10.1195 15.6802 10.3257 15.7596 10.5374 15.7491C10.749 15.7385 10.9463 15.6389 11.0805 15.4749L15.5805 9.97493Z"
                                    fill="#F8F8F8" fill-opacity="0.7" />
                            </g>
                        </svg>
                    </div>
                </li>
                <li class=" edit-item">
                    <span class="base text-text-secondary text-sm opacity-80 flex items-center gap-3">
                        <img src="../public/svg/ic_tag.svg" alt="edit" class="size-6" />Username
                    </span>
                    <div class="flex justify-between items-center">
                        <input type="text" class="grow text-text-primary text-sm opacity-80"
                            value="@moyoshiro" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none">
                            <path
                                d="M15 9.5L10.5 15L8.5 13M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
                                stroke="#F8F8F8" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </li>
                <li class="edit-item">
                    <span class="base text-text-secondary text-sm opacity-80 flex items-center gap-3">
                        <img src="../public/svg/ic_edit.svg" alt="edit" class="size-6" />Bio
                    </span>
                    <textarea type="text"
                        class="grow min-h-[8.75rem] max-h-[8.75rem] bg-transparent focus:outline-none text-text-primary text-sm opacity-80">🎨 UI/UX Designer | 💡 Crafting seamless digital experiences🚀 Designing user-centric interfaces📍 NYC | Post on #Design #UX #UI
                </textarea>
                </li>
                <li class="edit-item">
                    <span class="base text-text-secondary text-sm opacity-80 flex items-center gap-3">
                        <img src="../public/svg/ic_link.svg" alt="edit" class="size-6" />Link
                    </span>
                    <input type="text" class="grow text-text-primary text-sm opacity-80"
                        value="https://200lab.io/" />
                </li>
                <li class="edit-item flex-row items-center justify-between md:justify-start">
                    <span
                        class="base text-text-secondary text-sm opacity-80 flex items-center gap-3 grow md:grow-0">
                        <img src="../public/svg/ic_security.svg" alt="edit" class="size-6" />Private profile
                    </span>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <button class="grow flex justify-end">
                        <img src="../public/svg/ic_info.svg" alt="info" class="size-6" />
                    </button>
                </li>
                <li
                    class="edit-item flex-row items-center justify-between p-4 border-t-[1px] border-neutral-22 gap-2.5 md:justify-start">
                    <span class="base text-text-secondary text-sm opacity-80 flex items-center gap-3">
                        <img src="../public/svg/ic_earth.svg" alt="edit" class="size-6" />Location
                    </span>
                    <span class="base text-text-primary text-sm opacity-80">
                        Ho Chi Minh, Viet Nam
                    </span>
                </li>
            </ul>
        </div>
  </section>
  `;
}

function userViewFollowersContainer() {
    return `
        <section id="follower-following-container"
            class="main-container w-full relative flex flex-col gap-3 items-center bg-surface min-h-svh p-3 md:ml-[4.5rem] lg:mr-[21.25rem] xl:mr-[30rem] transition-all duration-[0.5s]">
            <section id="profile-header" class="w-full flex items-center justify-bet gap-2 z-10">
                <button id="btn-back" class="bg-button rounded-full p-[10px]">
                    <img src="../public/svg/ic_arrow_back.svg" alt="back" class="size-[24px]" />
                </button>
                </a>
                <span class="title font-medium text-xl text-text-secondary grow">Moyo Shiro</span>
                <button id="btn-share-profile"
                    class="bg-button rounded-full p-[0.53125rem] text-[#F8F8F8B2] md:px-6 md:py-3">
                    <span class="base text-sm font-semibold text-text-secondary">Share profile</span>
                </button>
                <button class="bg-button rounded-full p-[10px] bg-neutral-21">
                    <img src="../public/svg/ic_add.svg" alt="add" class="size-[24px]" />
                </button>
            </section>

            <section id="toggle-group"
                class="w-full p-1 flex justify-between items-center bg-neutral-36 rounded-[100px]">
                <button
                    class="toggle-item flex-1 px-6 py-2 text-text-secondary text-sm font-semibold active">Followers</button>
                <button
                    class=" toggle-item flex-1 px-6 py-2 text-text-secondary text-sm font-semibold">Following</button>
            </section>

            <section id="followers" class="w-full flex flex-col gap-2">
                <div class="profile-card bg-neutral-22 rounded-[1.25rem] p-3 flex flex-col gap-3 hover:bg-neutral-25">
                    <div class="profile-info flex items-end gap-3">
                        <div id="avatar-user" class="relative">
                            <div
                                class="absolute size-[1.25rem] -left-1 -top-1 rounded-full bg-[#F8F8F8] border-[3px] border-[#323232]">
                            </div>

                            <img src="https://i.pinimg.com/originals/d3/6f/ef/d36fef4f4885354afcfd3753dee95741.jpg" alt="avatar"
                                class="rounded-full min-w-[44px] size-[44px]" />
                        </div>
                        <div class="profile-content grow flex flex-col gap-2">
                            <span class="text-text-primary text-sm font-medium">Moyo Shiro</span>
                            <span class="text-text-light text-xs font-normal">@moyo_shiro</span>
                        </div>

                        <button class="btn-add bg-button rounded-full p-[10px] bg-neutral-21">
                            <img src="../public/svg/ic_check.svg" alt="check" class="size-[24px]" />
                        </button>

                        <button class="bg-button rounded-full p-[10px]">
                            <img src="../public/svg/ic_more.svg" alt="more" class="size-[24px]" />
                        </button>
                    </div>
                    <div class="profile-desc ">
                        <span class="text-text-light text-sm/6 line-clamp-2 pl-[56px] opacity-80">I design digital
                            products and
                            ventures.</span>
                    </div>
                </div>
            </section>

            <section id="following" class="w-full flex-col gap-2 hidden hover:bg-neutral-25">
                <div class="profile-card bg-neutral-22 rounded-[1.25rem] p-3 flex flex-col gap-3">
                    <div class="profile-info flex items-end gap-3">
                        <div id="avatar-user" class="relative">
                            <div
                                class="absolute size-[1.25rem] -left-1 -top-1 rounded-full bg-[#F8F8F8] border-[3px] border-[#323232]">
                            </div>

                            <img src="https://i.pinimg.com/originals/d3/6f/ef/d36fef4f4885354afcfd3753dee95741.jpg" alt="avatar"
                                class="rounded-full min-w-[44px] size-[44px]" />
                        </div>
                        <div class="profile-content grow flex flex-col gap-2">
                            <span class="text-text-primary text-sm font-medium">Moyo Shiro</span>
                            <span class="text-text-light text-xs font-normal">@moyo_shiro</span>
                        </div>

                        <button class="bg-button rounded-full p-[10px] bg-neutral-21">
                            <img src="../public/svg/ic_check.svg" alt="check" class="size-[24px]" />
                        </button>
                    </div>
                    <div class="profile-desc ">
                        <span class="text-text-light text-sm/6 line-clamp-2 pl-[56px] opacity-80">I design digital
                            products and
                            ventures.</span>
                    </div>
                </div>
            </section>

            <section id="no-followers" class="hidden w-full grow flex-col justify-end items-center gap-3 py-[1.75rem]">
                <img src="../public/svg/automated_customer_support.svg" alt="no followers"
                    class="w-full object-cover mb-[1.57rem]" />
                <span class="text-text-primary text-xl/[1.5rem] font-medium title opacity-60">No followers yet</span>
                <span class="text-text-secondary text-sm font-normal base opacity-50">Share your amazing content and
                    grow your
                    following.</span>
            </section>
        </section>
    `;
}

function guessViewFollowersContainer() {
    return `
    <section id="follower-following-container"
      class="main-container w-full relative flex flex-col gap-3 items-center bg-surface min-h-svh p-3 md:ml-[4.5rem] lg:mr-[21.25rem] xl:mr-[30rem] transition-all duration-[0.5s]">
        <section id="profile-header" class="w-full flex items-center justify-bet gap-2 z-10">
            <button id="btn-back" class="bg-button rounded-full p-[10px]">
            <img src="../public/svg/ic_arrow_back.svg" alt="back" class="size-[24px]" />
            </button>
            </a>
            <span class="title font-medium text-xl text-text-secondary grow">Moyo Shiro</span>
        </section>

        <section id="toggle-group" class="w-full p-1 flex justify-between items-center bg-neutral-36 rounded-[100px]">
            <button class="toggle-item flex-1 px-6 py-2 text-text-secondary text-sm font-semibold active">Followers</button>
            <button class=" toggle-item flex-1 px-6 py-2 text-text-secondary text-sm font-semibold">Following</button>
        </section>

        <section id="followers" class="hidden w-full flex flex-col gap-2">
            <div class="profile-card bg-neutral-22 rounded-[1.25rem] p-3 flex flex-col gap-3 hover:bg-neutral-25">
                <div class="profile-info flex items-end gap-3">
                    <div id="avatar-user" class="relative">
                        <div
                            class="absolute size-[1.25rem] -left-1 -top-1 rounded-full bg-[#F8F8F8] border-[3px] border-[#323232]">
                        </div>

                        <img src="https://i.pinimg.com/originals/d3/6f/ef/d36fef4f4885354afcfd3753dee95741.jpg" alt="avatar"
                            class="rounded-full min-w-[44px] size-[44px]" />
                    </div>
                    <div class="profile-content grow flex flex-col gap-2">
                        <span class="text-text-primary text-sm font-medium">Moyo Shiro</span>
                        <span class="text-text-light text-xs font-normal">@moyo_shiro</span>
                    </div>

                    <button class="btn-add bg-button rounded-full p-[10px] bg-neutral-21">
                        <img src="../public/svg/ic_check.svg" alt="check" class="size-[24px]" />
                    </button>

                    <button class="bg-button rounded-full p-[10px]">
                        <img src="../public/svg/ic_more.svg" alt="more" class="size-[24px]" />
                    </button>
                </div>
                <div class="profile-desc ">
                    <span class="text-text-light text-sm/6 line-clamp-2 pl-[56px] opacity-80">I design digital
                        products and
                        ventures.</span>
                </div>
            </div>
        </section>

        <section id="following" class="hidden w-full flex-col gap-2 hidden hover:bg-neutral-25">
            <div class="profile-card bg-neutral-22 rounded-[1.25rem] p-3 flex flex-col gap-3">
                <div class="profile-info flex items-end gap-3">
                    <div id="avatar-user" class="relative">
                        <div
                            class="absolute size-[1.25rem] -left-1 -top-1 rounded-full bg-[#F8F8F8] border-[3px] border-[#323232]">
                        </div>

                        <img src="https://i.pinimg.com/originals/d3/6f/ef/d36fef4f4885354afcfd3753dee95741.jpg" alt="avatar"
                            class="rounded-full min-w-[44px] size-[44px]" />
                    </div>
                    <div class="profile-content grow flex flex-col gap-2">
                        <span class="text-text-primary text-sm font-medium">Moyo Shiro</span>
                        <span class="text-text-light text-xs font-normal">@moyo_shiro</span>
                    </div>

                    <button class="bg-button rounded-full p-[10px] bg-neutral-21">
                        <img src="../public/svg/ic_check.svg" alt="check" class="size-[24px]" />
                    </button>
                </div>
                <div class="profile-desc ">
                    <span class="text-text-light text-sm/6 line-clamp-2 pl-[56px] opacity-80">I design digital
                        products and
                        ventures.</span>
                </div>
            </div>
        </section>

        <section id="no-followers" class="w-full grow flex-col justify-end items-center gap-3 py-[1.75rem]">
            <img src="../public/svg/ai_data_consolidation.svg" alt="no followers"
            class="w-full object-cover mb-[1.75rem]" />
            <span class="text-text-primary text-xl/[1.5rem] font-medium title opacity-60">No followers yet</span>
            <span class="text-text-secondary text-sm font-normal base opacity-50">Share your amazing content and
            grow your
            following.</span>
        </section>
    </section>
`;
}
