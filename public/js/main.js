const container = document.getElementById("container");
const nav = document.getElementById("nav");

const toggleItems = document.querySelectorAll("#toggle-group .toggle-item");

const navItems = document.querySelectorAll("#nav .nav-item");

const inputInForm = document.querySelectorAll("form input");

function init() {
  setupSidebar();
  setupEventListeners();
}

function setupSidebar() {
  const moreOption = document.getElementById("options-more");

  const btnCollapseSidebar = document.getElementById("btn-collapse-control");

  const menuItems = document.querySelectorAll("#sidebar-menu .sidebar-items");

  btnCollapseSidebar.addEventListener("click", collapseSidebar);

  menuItems.forEach((item) => {
    item.addEventListener("click", handleSidebarClick);

    if (window.location.href === item.href) {
      item.classList.add("active");
    }
  });

  //Sidebar Mobile
  const btnExplandSidebar = document.getElementById("avatar-user");
  const btnCloseSidebar = document.getElementById("btn-collapse-sidebar");
  btnExplandSidebar.addEventListener("click", explandSidebarMobile);
  btnCloseSidebar.addEventListener("click", collapseSidebarMobile);

  //Open more options
  const btnMoreOptions = document.getElementsByClassName("btn-more")[0];
  btnMoreOptions.addEventListener("click", openMoreOptionsSidebar);

  function openMoreOptionsSidebar() {
    moreOption.classList.toggle("opened");
  }

  function explandSidebarMobile() {
    container.classList.add("expland-sidebar-mobile");
  }

  function collapseSidebarMobile() {
    container.classList.remove("expland-sidebar-mobile");
  }
}

function setupEventListeners() {
  navItems.forEach((item) => {
    item.addEventListener("click", handleNavClick);
  });

  toggleItems.forEach((item) => {
    item.addEventListener("click", handleToggleClick);
  });

  inputInForm.forEach((input) => {
    input.addEventListener("input", handleFormInput);
  });
}

function collapseSidebar() {
  container.classList.toggle("expand-sidebar");
}

function handleSidebarClick(event) {
  const sidebarItem = event.target.closest(".sidebar-items");
  if (!sidebarItem) return;
  const siblingItems =
    sidebarItem.parentElement.querySelectorAll(".sidebar-items");

  siblingItems.forEach((item) => {
    item.classList.remove("active");
  });
  sidebarItem.classList.add("active");
}

function handleNavClick(event) {
  const navItem = event.target.closest(".nav-item");
  if (!navItem) return;
  const siblingItems = navItem.parentElement.querySelectorAll(".nav-item");

  siblingItems.forEach((item) => {
    item.classList.remove("active");
  });
  navItem.classList.add("active");
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

function handleFormInput(event) {
  const inputField = event.target;
  const submitButton = inputField
    .closest("form")
    .querySelector('button[type="submit"]');

  if (inputField.value.trim() !== "") {
    submitButton.disabled = false;
    submitButton.classList.remove("opacity-50");
  } else {
    submitButton.disabled = true;
    submitButton.classList.add("opacity-50");
  }
}

window.onload = init;
