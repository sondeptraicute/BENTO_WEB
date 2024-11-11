document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  // Function to hide all tabs and remove active classes
  function hideAllTabs() {
    tabContents.forEach((content) => content.classList.add("hidden"));
    tabButtons.forEach((button) =>
      button.classList.remove(
        "bg-gradient-to-br",
        "from-[#525252]",
        "to-[#393939]",
        "rounded-full",
        "active",
        "shadow-toggle"
      )
    );
  }

  // Function to show the selected tab content
  function showTab(tabId, activeButton) {
    hideAllTabs();
    document.getElementById(tabId).classList.remove("hidden");
    document.getElementById(tabId).classList.add("flex");
    document.getElementById(`tab-${tabId.split("-")[1]}`);

    // activeButton.classList.add('bg-gradient-to-br', 'from-[#525252]', 'to-[#393939]','rounded-full','active','shadow-toggle');
    activeButton.classList.add("active");

    // activeButton.classList.remove('border-transparent', 'text-gray-400');
  }

  // Add click event listeners to each tab button
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = `content-${button.id.split("-")[1]}`;
      showTab(tabId, button);
    });
  });

  // Set default active tab
  showTab("content-all", document.getElementById("tab-all"));
});

function ResetPasswordModal() {
  return `
  
  <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true"></div>
  
  `;
}
