if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
const chatContainer = document.getElementById("conversation-detail");
const conversationSidebar = document.getElementById("conversation-sidebar");

function ready() {
  setup();
}

function setup() {
  //Mock data
  for (let i = 0; i < 3; i++) {
    const conversationContainer = document.getElementById(
      "conversation-container"
    );
    if (conversatons[i].online === true) {
      conversationContainer.insertAdjacentHTML(
        "afterbegin",
        conversationItem(conversatons[i], "")
      );
    } else {
      conversationContainer.insertAdjacentHTML(
        "afterbegin",
        conversationItem(conversatons[i], "hidden")
      );
    }
  }

  //Open chat
  const conversationItems = document.querySelectorAll(
    "#conversation-container .conversation-item"
  );
  conversationItems.forEach((item) => {
    item.addEventListener("click", handleOpenChat);
  });

  //Back to conversation list
  const backBtn = document.querySelector("#conversation-detail .btn-close");
  backBtn.addEventListener("click", handleBackConversationList);
}

function handleOpenChat(event) {
  const conversationItem = event.target.closest(".conversation-item");

  if (!conversationItem) return;

  const siblingItems =
    conversationItem.parentElement.querySelectorAll(".conversation-item");

  siblingItems.forEach((item) => {
    item.classList.remove("active");
  });

  conversationItem.classList.add("active");
  chatContainer.style.display = "block";
  nav.style.display = "none";

  if (window.innerWidth < 1024) {
    conversationSidebar.style.display = "none";
  }
}

function handleBackConversationList() {
  nav.style.display = "none";
  chatContainer.style.display = "none";
  conversationSidebar.style.display = "flex";
  if (window.innerWidth <= 375) {
    nav.style.display = "flex";
  }
}

function handleSentMessage(event) {
  event.preventDefault();
  const messageContent = document.querySelector("#chat-input form input").value;
  const chatContainer = document.getElementById("chat-container");
  const time = new Date().toLocaleTimeString("vn-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  console.log(time);

  chatContainer.insertAdjacentHTML(
    "beforeend",
    newMessage(messageContent, time)
  );

  chatContainer.scrollTop = chatContainer.scrollHeight;
  document.querySelector("#chat-input form input").value = "";
}

function newMessage(messageContent, time) {
  return `
  <div class="message-item w-full flex items-start gap-5 rounded-[1.25rem] p-3 bg-neutral-22">
    <img src="https://i.pinimg.com/originals/4a/7e/74/4a7e7438c14c2807c81cba4a99e4cec2.jpg" alt="avatar-user"
        class="avatar-user rounded-full min-w-[44px] size-[44px]" />
    <div class="message-content flex flex-col gap-2">
        <div class="header-content flex justify-items-auto items-center">
            <h3
                class="base text-text-primary text-sm font-medium justify-self-start opacity-80 mr-4">
                Moyo
                Shiro
            </h3>
            <span
                class="caption text-text-light text-xs font-normal justify-self-start grow opacity-45">${time}</span>
        </div>
        <span class="text-sm text-text-secondary opacity-80 self-stretch">${messageContent}</span>
    </div>
  </div>`;
}

function conversationItem(conversation, status) {
  return `
  <div
      class="conversation-item relative bg-neutral-22 rounded-[1.25rem] p-3 flex justify-center items-start gap-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          class="absolute top-[0.5rem] right-[0.5rem] ${status}">
          <circle cx="12" cy="12" r="6" fill="#55F08B" />
      </svg>
      <div id="avatar-user" class="relative">
          <div
              class="absolute size-[1.25rem] -left-1 -top-1 rounded-full bg-[#F8F8F8] border-[3px] border-[#323232]">
          </div>
          <img src="${conversation.user.avatar}"
              alt="avatar" class="rounded-full min-w-[44px] size-[44px]" />
      </div>
      <div class="conversation-detail flex flex-col items-start justify-center gap-1">
          <span
              class="user-name base text-sm font-semibold text-text-primary opacity-80 mr-6 after:content-['1m'] after:ml-2 after:base after:text-sm after:text-text-light after:opacity-50 after:font-normal ">${conversation.user.name} </span>

          <span
              class="user-note-text caption text-xs text-text-light col-span-2 opacity-80 mr-6 line-clamp-1">${conversation.content}</span>
      </div>
  </div>
  `;
}
