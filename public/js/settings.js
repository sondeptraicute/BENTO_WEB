document.addEventListener("DOMContentLoaded", init);

function init() {
  const settingButtons = document.querySelectorAll(".trigger");
  const firstSetting = settingButtons[0];
  const view = firstSetting.getAttribute("dataValue");
  if (view) {
    loadView(view);
  }
  handleActiveButton(firstSetting);

  windows.addEventListener("resize", viewShowing);
}

function viewShowing() {
  const haveActiveView = document.querySelectorAll(".activeButton").length > 0;
  const settingList = document.getElementById("settings");
  const settingView = document.getElementById("setting-detail-view");

  if (haveActiveView) {
    settingList.classList.remove("flex");
    settingList.classList.add("hidden");
    settingView.classList.remove("hidden");
    settingView.classList.add("block");
  } else {
    settingList.classList.remove("hidden");
    settingList.classList.add("flex");
    settingView.classList.remove("block");
    settingView.classList.add("hidden");
  }
}

const settingButtons = document.querySelectorAll(".trigger");
const settingView = document.getElementById("setting-detail-view");

const views = {
  "account-setting": `
           <div
            id="account-setting"
            class="flex w-full h-full overflow-auto flex-col gap-3 p-3"
          >
            <!-- appbar -->
            <div id="appbar" class="flex justify-between items-center mb-3">
              <div class="flex items-center justify-start">
                <!-- back button -->
                <button
                  onclick="settingsBack()"
                  class=" md:hidden relative p-[1.5px] bg-neutral3-70 hover:bg-linear-hover rounded-full before:content-[''] before:absolute before:inset-0 before:opacity-25 before:bg-linear-card before:rounded-full after:content-[''] after:absolute after:inset-[1.5px] after:bg-[#313131] after:rounded-full after:backdrop-blur-50 after:shadow-button"
                >
                  <div
                    class="relative z-10 inline-flex gap-2.5 p-2.5 bg-neutral3-70 justify-center items-center rounded-full backdrop-blur-50 shadow-button stroke-text-secondary hover:bg-linear-hover hover:stroke-text-primary"
                  >
                    <!-- arrow icon -->
                    <svg
                      class="h-6 w-6"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="arrow-left" opacity="0.8">
                        <path
                          id="Icon"
                          d="M8.75345 18.2461L4.62478 14.1174C3.4532 12.9459 3.4532 11.0464 4.62477 9.87479L8.75345 5.74609M4.25345 11.9961L20.2535 11.9961"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </div>
                </button>

                <h2 class="title text-text-secondary mx-3">Account settings</h2>
              </div>
              <!-- save button -->
              <div
                class="relative p-[1.5px] bg-neutral3-70 hover:bg-linear-hover rounded-full before:content-[''] before:absolute before:inset-0 before:opacity-25 before:bg-linear-card before:rounded-full after:content-[''] after:absolute after:inset-[1.5px] after:bg-[#313131] after:rounded-full after:backdrop-blur-50 after:shadow-button"
              >
                <div
                  class="relative z-10 inline-flex gap-2.5 py-3 px-6 bg-neutral3-70 justify-center items-center rounded-full backdrop-blur-50 shadow-button text-text-secondary hover:bg-linear-hover hover:text-text-primary font-rubik font-semibold text-sm"
                >
                  Save
                </div>
              </div>
            </div>
            <!-- account setting container -->

            <section
              class="relative z-0 before:content-[''] before:absolute before:inset-0 before:z-1 before:opacity-15 before:bg-linear-card before:rounded-[20px] after:content-[''] after:absolute after:inset-[1.5px] after:z-1 after:bg-[#313131] after:rounded-[18.5px]"
            >
              <div
                id="avatar-wrapper"
                class="flex flex-col gap-7 items-center justify-center bg-neutral2-2 relative z-9 rounded-[20px] p-8"
              >
               <div class="inline-block relative rounded-full">
               <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 right-0 transform -translate-x-4 translate-y-6" width="94" height="79" viewBox="0 0 94 79" fill="none">
<circle opacity="0.5" cx="67.6044" cy="46.6994" r="0.5" transform="rotate(36.5125 67.6044 46.6994)" fill="url(#paint0_linear_12214_113049)"/>
<circle opacity="0.5" cx="56.6044" cy="70.6994" r="0.5" transform="rotate(36.5125 56.6044 70.6994)" fill="url(#paint1_linear_12214_113049)"/>
<circle opacity="0.5" cx="79.6044" cy="3.69936" r="0.5" transform="rotate(36.5125 79.6044 3.69936)" fill="url(#paint2_linear_12214_113049)"/>
<circle opacity="0.5" cx="37.6044" cy="37.6994" r="0.5" transform="rotate(36.5125 37.6044 37.6994)" fill="url(#paint3_linear_12214_113049)"/>
<circle opacity="0.5" cx="69.6044" cy="77.6994" r="0.5" transform="rotate(36.5125 69.6044 77.6994)" fill="url(#paint4_linear_12214_113049)"/>
<circle opacity="0.5" cx="84" cy="53.5" r="2.5" fill="url(#paint5_linear_12214_113049)"/>
<circle opacity="0.5" cx="21.5" cy="10" r="4" fill="url(#paint6_linear_12214_113049)"/>
<circle opacity="0.5" cx="66.5" cy="61" r="2" fill="url(#paint7_linear_12214_113049)"/>
<circle cx="35.5" cy="6" r="1" fill="url(#paint8_linear_12214_113049)"/>
<circle opacity="0.5" cx="65.9099" cy="18.8899" r="1" transform="rotate(-49.4658 65.9099 18.8899)" fill="url(#paint9_linear_12214_113049)"/>
<circle opacity="0.5" cx="91.9099" cy="26.8899" r="1" transform="rotate(-49.4658 91.9099 26.8899)" fill="url(#paint10_linear_12214_113049)"/>
<circle opacity="0.5" cx="1.90992" cy="55.8899" r="1" transform="rotate(-49.4658 1.90992 55.8899)" fill="url(#paint11_linear_12214_113049)"/>
<circle opacity="0.5" cx="57.7087" cy="54.3987" r="1" transform="rotate(36.5125 57.7087 54.3987)" fill="url(#paint12_linear_12214_113049)"/>
<circle opacity="0.5" cx="36.7087" cy="54.3987" r="1" transform="rotate(36.5125 36.7087 54.3987)" fill="url(#paint13_linear_12214_113049)"/>
<circle opacity="0.5" cx="47.5" cy="22" r="1" fill="url(#paint14_linear_12214_113049)"/>
<circle opacity="0.5" cx="75.5" cy="32" r="1" fill="url(#paint15_linear_12214_113049)"/>
<circle opacity="0.5" cx="62.8261" cy="3.47071" r="2.5" transform="rotate(55.9888 62.8261 3.47071)" fill="url(#paint16_linear_12214_113049)"/>
<circle cx="64" cy="32.5" r="1.5" fill="url(#paint17_linear_12214_113049)"/>
<defs>
<linearGradient id="paint0_linear_12214_113049" x1="67.9377" y1="45.866" x2="67.3544" y2="47.116" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint1_linear_12214_113049" x1="56.9377" y1="69.866" x2="56.3544" y2="71.116" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint2_linear_12214_113049" x1="79.9377" y1="2.86603" x2="79.3544" y2="4.11603" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint3_linear_12214_113049" x1="37.9377" y1="36.866" x2="37.3544" y2="38.116" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint4_linear_12214_113049" x1="69.9377" y1="76.866" x2="69.3544" y2="78.116" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint5_linear_12214_113049" x1="85.6667" y1="51" x2="81.5" y2="56.8333" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.3"/>
<stop offset="0.826694" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_12214_113049" x1="24.1667" y1="6" x2="17.5" y2="15.3333" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.3"/>
<stop offset="0.826694" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_12214_113049" x1="67.8333" y1="57.6667" x2="65.5" y2="62.6667" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.3"/>
<stop offset="0.826694" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint8_linear_12214_113049" x1="36.1667" y1="4.33333" x2="35" y2="6.83333" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint9_linear_12214_113049" x1="66.5766" y1="17.2232" x2="65.4099" y2="19.7232" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint10_linear_12214_113049" x1="92.5766" y1="25.2232" x2="91.4099" y2="27.7232" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint11_linear_12214_113049" x1="2.57659" y1="54.2232" x2="1.40992" y2="56.7232" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint12_linear_12214_113049" x1="58.3754" y1="52.7321" x2="57.2087" y2="55.2321" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint13_linear_12214_113049" x1="37.3754" y1="52.7321" x2="36.2087" y2="55.2321" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint14_linear_12214_113049" x1="48.1667" y1="20.3333" x2="47" y2="22.8333" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint15_linear_12214_113049" x1="76.1667" y1="30.3333" x2="75" y2="32.8333" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint16_linear_12214_113049" x1="64.4927" y1="0.970708" x2="60.3261" y2="6.80404" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.3"/>
<stop offset="0.826694" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint17_linear_12214_113049" x1="65" y1="30" x2="63.25" y2="33.75" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.3"/>
<stop offset="0.826694" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
               <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 right-0 transform -translate-x-10 -translate-y-10 " width="145" height="65" viewBox="0 0 145 65" fill="none">
<circle opacity="0.5" cx="17.3956" cy="37.3006" r="0.5" transform="rotate(-143.487 17.3956 37.3006)" fill="url(#paint0_linear_12214_113068)"/>
<circle opacity="0.5" cx="59.3956" cy="3.30064" r="0.5" transform="rotate(-143.487 59.3956 3.30064)" fill="url(#paint1_linear_12214_113068)"/>
<circle opacity="0.5" cx="140.5" cy="39" r="4" transform="rotate(180 140.5 39)" fill="url(#paint2_linear_12214_113068)"/>
<circle cx="60.5" cy="35" r="1" transform="rotate(180 60.5 35)" fill="url(#paint3_linear_12214_113068)"/>
<circle opacity="0.5" cx="31.0901" cy="22.1101" r="1" transform="rotate(130.534 31.0901 22.1101)" fill="url(#paint4_linear_12214_113068)"/>
<circle opacity="0.5" cx="4.09008" cy="14.1101" r="1" transform="rotate(130.534 4.09008 14.1101)" fill="url(#paint5_linear_12214_113068)"/>
<circle opacity="0.5" cx="49.5" cy="19" r="1" transform="rotate(180 49.5 19)" fill="url(#paint6_linear_12214_113068)"/>
<circle opacity="0.5" cx="20.5" cy="9" r="1" transform="rotate(180 20.5 9)" fill="url(#paint7_linear_12214_113068)"/>
<circle opacity="0.5" cx="4.17393" cy="61.5293" r="2.5" transform="rotate(-124.011 4.17393 61.5293)" fill="url(#paint8_linear_12214_113068)"/>
<circle cx="32" cy="8.5" r="1.5" transform="rotate(180 32 8.5)" fill="url(#paint9_linear_12214_113068)"/>
<defs>
<linearGradient id="paint0_linear_12214_113068" x1="17.729" y1="36.4673" x2="17.1456" y2="37.7173" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint1_linear_12214_113068" x1="59.729" y1="2.4673" x2="59.1456" y2="3.7173" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint2_linear_12214_113068" x1="143.167" y1="35" x2="136.5" y2="44.3333" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.3"/>
<stop offset="0.826694" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_12214_113068" x1="61.1667" y1="33.3333" x2="60" y2="35.8333" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint4_linear_12214_113068" x1="31.7567" y1="20.4435" x2="30.5901" y2="22.9435" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint5_linear_12214_113068" x1="4.75675" y1="12.4435" x2="3.59008" y2="14.9435" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint6_linear_12214_113068" x1="50.1667" y1="17.3333" x2="49" y2="19.8333" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint7_linear_12214_113068" x1="21.1667" y1="7.33333" x2="20" y2="9.83333" gradientUnits="userSpaceOnUse">
<stop offset="0.173306" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint8_linear_12214_113068" x1="5.8406" y1="59.0293" x2="1.67393" y2="64.8626" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.3"/>
<stop offset="0.826694" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint9_linear_12214_113068" x1="33" y1="6" x2="31.25" y2="9.75" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.3"/>
<stop offset="0.826694" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
               <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 right-0 transform -translate-x-[70px] -translate-y-12" width="201" height="176" viewBox="0 0 201 176" fill="none">
  <circle cx="100.5" cy="76" r="99.25" stroke="#F8F8F8" stroke-opacity="0.01" stroke-width="1.5"/>
</svg>
               <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 right-0 transform -translate-x-7 -translate-y-7" width="117" height="116" viewBox="0 0 117 116" fill="none">
<circle cx="58.5" cy="58" r="57.25" stroke="#F8F8F8" stroke-opacity="0.02" stroke-width="1.5"/>
</svg>
                 <div class="absolute inset-0 right-0 transform -translate-x-1 -translate-y-1 ">
    <svg xmlns="http://www.w3.org/2000/svg" width="73" height="72" viewBox="0 0 73 72" fill="none">
<g filter="url(#filter0_i_12214_113087)">
<circle cx="36.5" cy="36" r="36" fill="#F8F8F8" fill-opacity="0.01"/>
</g>
<defs>
<filter id="filter0_i_12214_113087" x="0.5" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_12214_113087"/>
</filter>
</defs>
</svg>
  </div>
                <img
                  id="avatar"
                  src="../public/img/avatar-7.png"
                  alt=""
                  class="rounded-full h-16 w-16 relative z-10"
                />
               </div>
                <span class="flex flex-col items-center gap-2">
                  <p
                    class="font-rubik font-medium text-title text-text-primary self-center"
                  >
                    Moyo Shiro
                  </p>
                  <p class="text-text-tertiary opacity-80">
                    moyoshiro@email.com
                  </p>
                </span>
              </div>
            </section>
            <!--  -->
            <section
              id="account"
              class="relative z-0 before:content-[''] before:absolute before:inset-0 before:z-1 before:opacity-15 before:bg-linear-card before:rounded-[20px] after:content-[''] after:absolute after:inset-[1.5px] after:z-1 after:bg-[#313131] after:rounded-[18.5px]"
            >
              <div
                class="relative z-9 flex flex-col items-start self-stretch rounded-[20px] bg-neutral2-2"
              >
                <div class="flex w-full px-4 py-2.5 items-center">
                  <span
                    class="flex-1 font-inter font-normal text-hairline1 text-text-tertiary"
                    >ACCOUNT</span
                  >
                  <svg
                    class="h-6 w-6 stroke-text-tertiary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g opacity="0.5">
                      <path
                        d="M8 14L10.9393 11.0607C11.5251 10.4749 12.4749 10.4749 13.0607 11.0607L16 14"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <div
                  after="Change email"
                  class="relative flex w-full p-4 border-t border-t-neutral2-2 hover:bg-neutral2-2 gap-3 items-center after:absolute after:right-4 after:content-[attr(after)] after:hidden after:text-sm after:text-text-secondary after:opacity-80 hover:after:block"
                >
                  <svg
                    class="h-6 w-6 fill-text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4.38803 18.923L4.72852 18.2548H4.72852L4.38803 18.923ZM3.07698 17.612L2.40873 17.9525H2.40873L3.07698 17.612ZM20.923 17.612L21.5913 17.9525L20.923 17.612ZM19.612 18.923L19.2715 18.2548V18.2548L19.612 18.923ZM20.923 6.38803L21.5913 6.04754V6.04754L20.923 6.38803ZM19.612 5.07698L19.2715 5.74524V5.74524L19.612 5.07698ZM3.07698 6.38803L3.74524 6.72852L3.07698 6.38803ZM4.38803 5.07698L4.72852 5.74524L4.38803 5.07698ZM13.8418 11.5675L13.3814 10.9755V10.9755L13.8418 11.5675ZM10.1582 11.5675L9.69772 12.1595L10.1582 11.5675ZM20.5 9.55V14.45H22V9.55H20.5ZM16.45 18.5H7.55V20H16.45V18.5ZM3.5 14.45V9.55H2V14.45H3.5ZM7.55 5.5H16.45V4H7.55V5.5ZM7.55 18.5C6.69755 18.5 6.10331 18.4994 5.64068 18.4616C5.1868 18.4245 4.92604 18.3554 4.72852 18.2548L4.04754 19.5913C4.49175 19.8176 4.97189 19.912 5.51853 19.9566C6.05641 20.0006 6.7223 20 7.55 20V18.5ZM2 14.45C2 15.2777 1.99942 15.9436 2.04336 16.4815C2.08803 17.0281 2.18238 17.5082 2.40873 17.9525L3.74524 17.2715C3.6446 17.074 3.57546 16.8132 3.53838 16.3593C3.50058 15.8967 3.5 15.3025 3.5 14.45H2ZM4.72852 18.2548C4.30516 18.0391 3.96095 17.6948 3.74524 17.2715L2.40873 17.9525C2.76825 18.6581 3.34193 19.2317 4.04754 19.5913L4.72852 18.2548ZM20.5 14.45C20.5 15.3025 20.4994 15.8967 20.4616 16.3593C20.4245 16.8132 20.3554 17.074 20.2548 17.2715L21.5913 17.9525C21.8176 17.5082 21.912 17.0281 21.9566 16.4815C22.0006 15.9436 22 15.2777 22 14.45H20.5ZM16.45 20C17.2777 20 17.9436 20.0006 18.4815 19.9566C19.0281 19.912 19.5082 19.8176 19.9525 19.5913L19.2715 18.2548C19.074 18.3554 18.8132 18.4245 18.3593 18.4616C17.8967 18.4994 17.3025 18.5 16.45 18.5V20ZM20.2548 17.2715C20.039 17.6948 19.6948 18.0391 19.2715 18.2548L19.9525 19.5913C20.6581 19.2317 21.2317 18.6581 21.5913 17.9525L20.2548 17.2715ZM22 9.55C22 8.7223 22.0006 8.05641 21.9566 7.51853C21.912 6.97189 21.8176 6.49175 21.5913 6.04754L20.2548 6.72852C20.3554 6.92604 20.4245 7.1868 20.4616 7.64068C20.4994 8.10331 20.5 8.69755 20.5 9.55H22ZM16.45 5.5C17.3025 5.5 17.8967 5.50058 18.3593 5.53838C18.8132 5.57546 19.074 5.6446 19.2715 5.74524L19.9525 4.40873C19.5082 4.18238 19.0281 4.08803 18.4815 4.04336C17.9436 3.99942 17.2777 4 16.45 4V5.5ZM21.5913 6.04754C21.2317 5.34193 20.6581 4.76825 19.9525 4.40873L19.2715 5.74524C19.6948 5.96095 20.039 6.30516 20.2548 6.72852L21.5913 6.04754ZM3.5 9.55C3.5 8.69755 3.50058 8.10331 3.53838 7.64068C3.57546 7.1868 3.6446 6.92604 3.74524 6.72852L2.40873 6.04754C2.18238 6.49175 2.08803 6.97189 2.04336 7.51853C1.99942 8.05641 2 8.7223 2 9.55H3.5ZM7.55 4C6.7223 4 6.05641 3.99942 5.51853 4.04336C4.97189 4.08803 4.49175 4.18238 4.04754 4.40873L4.72852 5.74524C4.92604 5.6446 5.1868 5.57546 5.64068 5.53838C6.10331 5.50058 6.69755 5.5 7.55 5.5V4ZM3.74524 6.72852C3.96095 6.30516 4.30516 5.96095 4.72852 5.74524L4.04754 4.40873C3.34193 4.76825 2.76825 5.34193 2.40873 6.04754L3.74524 6.72852ZM20.5395 5.40799L13.3814 10.9755L14.3023 12.1595L21.4605 6.59201L20.5395 5.40799ZM10.6186 10.9755L3.46046 5.40799L2.53954 6.59201L9.69772 12.1595L10.6186 10.9755ZM13.3814 10.9755C12.5689 11.6074 11.4311 11.6074 10.6186 10.9755L9.69772 12.1595C11.0519 13.2127 12.9481 13.2127 14.3023 12.1595L13.3814 10.9755Z"
                    />
                  </svg>

                  <span class="inline-flex gap-2">
                    <p
                      class="text-text-secondary font-rubik text-sm opacity-80"
                    >
                      Email
                    </p>
                    <span
                      class="flex-1 text-base2 text-text-tertiary opacity-80"
                      >moyoshiro@email.com</span
                    >
                  </span>
                </div>
                <div
                  class="flex w-full p-4 border-t border-t-neutral2-2 hover:bg-neutral2-2 justify-between items-center group/item"
                >
                  <span class="inline-flex gap-3 items-center">
                    <svg
                      class="h-6 w-6 stroke-text-secondary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.25 9.75H7.75M16.25 9.75C17.9069 9.75 19.25 11.0931 19.25 12.75V18.25C19.25 19.9069 17.9069 21.25 16.25 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V12.75C4.75 11.0931 6.09315 9.75 7.75 9.75M16.25 9.75V7.25C16.25 4.90279 14.3472 3 12 3C9.65279 3 7.75 4.90279 7.75 7.25V9.75M12 14V17"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p
                      class="text-text-secondary font-rubik text-sm opacity-80"
                    >
                      Password
                    </p>
                  </span>
                  <button
                    id="openForgotPassModal"
                    onclick="createForgotPasswordModal();"
                    class="text-text-secondary font-rubik text-sm opacity-80 group-hover/item:opacity-100 "
                  >
                    Change
                  </button>
                </div>
                <div
                  class="flex w-full p-4 border-t border-t-neutral2-2 hover:bg-neutral2-2 items-center justify-between"
                >
                  <span class="inline-flex gap-3 items-center">
                    <svg
                      class="h-6 w-6 fill-text-secondary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 6.75C3 4.67893 4.67893 3 6.75 3H7.25C9.32107 3 11 4.67893 11 6.75V7.25C11 9.32107 9.32107 11 7.25 11H6.75C4.67893 11 3 9.32107 3 7.25V6.75ZM6.75 4.5C5.50736 4.5 4.5 5.50736 4.5 6.75V7.25C4.5 8.49264 5.50736 9.5 6.75 9.5H7.25C8.49264 9.5 9.5 8.49264 9.5 7.25V6.75C9.5 5.50736 8.49264 4.5 7.25 4.5H6.75ZM13 6.75C13 4.67893 14.6789 3 16.75 3H17.25C19.3211 3 21 4.67893 21 6.75V7.25C21 9.32107 19.3211 11 17.25 11H16.75C14.6789 11 13 9.32107 13 7.25V6.75ZM16.75 4.5C15.5074 4.5 14.5 5.50736 14.5 6.75V7.25C14.5 8.49264 15.5074 9.5 16.75 9.5H17.25C18.4926 9.5 19.5 8.49264 19.5 7.25V6.75C19.5 5.50736 18.4926 4.5 17.25 4.5H16.75ZM3 16.75C3 14.6789 4.67893 13 6.75 13H7.25C9.32107 13 11 14.6789 11 16.75V17.25C11 19.3211 9.32107 21 7.25 21H6.75C4.67893 21 3 19.3211 3 17.25V16.75ZM6.75 14.5C5.50736 14.5 4.5 15.5074 4.5 16.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H7.25C8.49264 19.5 9.5 18.4926 9.5 17.25V16.75C9.5 15.5074 8.49264 14.5 7.25 14.5H6.75Z"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.75 13C14.1642 13 14.5 13.3358 14.5 13.75V15.5H16.25C16.6642 15.5 17 15.8358 17 16.25C17 16.6642 16.6642 17 16.25 17H13.75C13.3358 17 13 16.6642 13 16.25V13.75C13 13.3358 13.3358 13 13.75 13ZM17 13.75C17 13.3358 17.3358 13 17.75 13H20.25C20.6642 13 21 13.3358 21 13.75C21 14.1642 20.6642 14.5 20.25 14.5H17.75C17.3358 14.5 17 14.1642 17 13.75ZM17 17.75C17 17.3358 17.3358 17 17.75 17H20.25C20.6642 17 21 17.3358 21 17.75C21 18.1642 20.6642 18.5 20.25 18.5H18.5V20.25C18.5 20.6642 18.1642 21 17.75 21C17.3358 21 17 20.6642 17 20.25V17.75Z"
                      />
                      <path
                        d="M13 20C13 19.4477 13.4477 19 14 19C14.5523 19 15 19.4477 15 20C15 20.5523 14.5523 21 14 21C13.4477 21 13 20.5523 13 20Z"
                      />
                    </svg>
                    <p
                      class="text-text-secondary font-rubik text-sm opacity-80"
                    >
                      2FA
                    </p>
                  </span>
                 <label class="switch inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer">
              <div class="relative w-11 h-6 p-1 bg-neutral2-5 rounded-full peer peer-checked:after:translate-x-[20px] rtl:peer-checked:after:-translate-x-[20px]  after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-neutral2-30 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral3-50 peer-checked:after:bg-linear-object"></div>
            </label> 
                </div>
                <button
                  class="flex w-full p-4 border-t border-t-neutral2-2 hover:bg-neutral2-2 items-center gap-3"
                >
                  <svg
                    class="h-6 w-6 stroke-text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5.75 5.75V18.25C5.75 19.9069 7.09315 21.25 8.75 21.25H15.25C16.9069 21.25 18.25 19.9069 18.25 18.25V5.75M5.75 5.75H18.25M5.75 5.75H3.75M18.25 5.75H20.25M14 10.75V16.25M10 10.75V16.25M9 5.75C9 4.09315 10.3431 2.75 12 2.75C13.6569 2.75 15 4.09315 15 5.75"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p class="text-text-secondary font-rubik text-sm opacity-80">
                    Delete account
                  </p>
                </button>
              </div>
            </section>
            <section
              id="privacy"
              class="relative z-0 before:content-[''] before:absolute before:inset-0 before:z-1 before:opacity-15 before:bg-linear-card before:rounded-[20px] after:content-[''] after:absolute after:inset-[1.5px] after:z-1 after:bg-[#313131] after:rounded-[18.5px]"
            >
              <div
                class="flex flex-col items-start self-stretch rounded-[20px] bg-neutral2-2 relative z-9"
              >
                <div class="flex w-full px-4 py-2.5 items-center">
                  <span
                    class="flex-1 font-inter font-normal text-hairline1 text-text-tertiary"
                    >PRIVACY</span
                  >
                  <svg
                    class="h-6 w-6 stroke-text-tertiary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g opacity="0.5">
                      <path
                        d="M8 14L10.9393 11.0607C11.5251 10.4749 12.4749 10.4749 13.0607 11.0607L16 14"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <div
                  class="flex w-full p-4 border-t border-t-neutral2-2 hover:bg-neutral2-2 items-center justify-between"
                >
                  <span class="inline-flex gap-3 items-center">
                    <svg
                      class="h-6 w-6 stroke-text-secondary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.25 9.75H7.75M16.25 9.75C17.9069 9.75 19.25 11.0931 19.25 12.75V18.25C19.25 19.9069 17.9069 21.25 16.25 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V12.75C4.75 11.0931 6.09315 9.75 7.75 9.75M16.25 9.75V7.25C16.25 4.90279 14.3472 3 12 3C9.65279 3 7.75 4.90279 7.75 7.25V9.75M12 14V17"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p
                      class="text-text-secondary font-rubik text-sm opacity-80"
                    >
                      Private profile
                    </p>
                  </span>
                   <label class="switch inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer">
              <div class="relative w-11 h-6 p-1 bg-neutral2-5 rounded-full peer peer-checked:after:translate-x-[20px] rtl:peer-checked:after:-translate-x-[20px]  after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-neutral2-30 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral3-50 peer-checked:after:bg-linear-object"></div>
            </label>  
                </div>
                <div
                  class="flex w-full p-4 border-t border-t-neutral2-2  hover:bg-neutral2-2 justify-between items-center group/item"
                >
                  <span class="inline-flex gap-3 items-center">
                    <svg
                      class="h-6 w-6 stroke-text-secondary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9.25 11.4998L11 13.2498L14.75 9.49983M20.25 11.9122V6.94135C20.25 6.08049 19.6991 5.31621 18.8825 5.04398L12.9487 3.06606C12.3329 2.86079 11.6671 2.86079 11.0513 3.06606L5.11754 5.04398C4.30086 5.31621 3.75 6.08049 3.75 6.94135V11.9122C3.75 16.8846 8 19.2498 12 21.4077C16 19.2498 20.25 16.8846 20.25 11.9122Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p
                      class="text-text-secondary font-rubik text-sm opacity-80"
                    >
                      Cookie settings
                    </p>
                  </span>
                  <span class="flex gap-1 opacity-80 items-center">
                    <p class="text-text-tertiary font-rubik text-sm group-hover/item:text-text-secondary">
                      Customize
                    </p>
                    <svg
                      class="h-6 w-6 stroke-text-tertiary group-hover/item:stroke-text-secondary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M8 8.99981L11.1161 5.88369C11.6043 5.39554 12.3957 5.39554 12.8839 5.8837L16 8.99981M16 14.9998L12.8839 18.1159C12.3957 18.6041 11.6043 18.6041 11.1161 18.1159L8 14.9998"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                <div
                  class="flex w-full p-4 border-t border-t-neutral2-2  hover:bg-neutral2-2 justify-between items-center group/item"
                >
                  <span class="inline-flex gap-3 items-center">
                    <svg
                      class="h-6 w-6 stroke-text-secondary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9.25 11.4998L11 13.2498L14.75 9.49983M20.25 11.9122V6.94135C20.25 6.08049 19.6991 5.31621 18.8825 5.04398L12.9487 3.06606C12.3329 2.86079 11.6671 2.86079 11.0513 3.06606L5.11754 5.04398C4.30086 5.31621 3.75 6.08049 3.75 6.94135V11.9122C3.75 16.8846 8 19.2498 12 21.4077C16 19.2498 20.25 16.8846 20.25 11.9122Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p
                      class="text-text-secondary font-rubik text-sm opacity-80"
                    >
                      Direct messages
                    </p>
                  </span>
                  <span class="flex gap-1 opacity-80 items-center">
                    <p class="text-text-tertiary font-rubik text-sm group-hover/item:text-text-secondary">
                      Everyone
                    </p>
                    <svg
                      class="h-6 w-6 stroke-text-tertiary group-hover/item:stroke-text-secondary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M8 8.99981L11.1161 5.88369C11.6043 5.39554 12.3957 5.39554 12.8839 5.8837L16 8.99981M16 14.9998L12.8839 18.1159C12.3957 18.6041 11.6043 18.6041 11.1161 18.1159L8 14.9998"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </section>
          </div>
    `,
  "notification-setting": `
    <div
            id="notification-setting"
            class="w-full h-full flex flex-col gap-3 p-3"
          >
            <div id="appbar" class="flex justify-between items-center mb-3">
              <div class="flex items-center justify-start">
                <!-- rounded secondary button style -- back button -->
                <button
                  onclick="settingsBack()"
                  class=" md:hidden relative p-[1.5px] bg-neutral3-70 hover:bg-linear-hover rounded-full before:content-[''] before:absolute before:inset-0 before:opacity-25 before:bg-linear-card before:rounded-full after:content-[''] after:absolute after:inset-[1.5px] after:bg-[#313131] after:rounded-full after:backdrop-blur-50 after:shadow-button"
                >
                  <div
                    class="relative z-10 inline-flex gap-2.5 p-2.5 bg-neutral3-70 justify-center items-center rounded-full backdrop-blur-50 shadow-button stroke-text-secondary hover:bg-linear-hover hover:stroke-text-primary"
                  >
                    <!-- arrow icon -->
                    <svg
                      class="h-6 w-6"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="arrow-left" opacity="0.8">
                        <path
                          id="Icon"
                          d="M8.75345 18.2461L4.62478 14.1174C3.4532 12.9459 3.4532 11.0464 4.62477 9.87479L8.75345 5.74609M4.25345 11.9961L20.2535 11.9961"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </div>
                </button>

                <h2 class="title text-text-secondary mx-3">
                  Notification settings
                </h2>
              </div>
              <!-- save button -->
              <div
                class="relative p-[1.5px] bg-neutral3-70 hover:bg-linear-hover rounded-full before:content-[''] before:absolute before:inset-0 before:opacity-25 before:bg-linear-card before:rounded-full after:content-[''] after:absolute after:inset-[1.5px] after:bg-[#313131] after:rounded-full after:backdrop-blur-50 after:shadow-button"
              >
                <div
                  class="relative z-10 inline-flex gap-2.5 py-3 px-6 bg-neutral3-70 justify-center items-center rounded-full backdrop-blur-50 shadow-button text-text-secondary hover:bg-linear-hover hover:text-text-primary font-rubik font-semibold text-sm"
                >
                  Save
                </div>
              </div>
            </div>

            <!--banner container -->
            <section
              id="banner"
              class="relative z-0 before:content-[''] before:absolute before:inset-0 before:z-1 before:opacity-15 before:bg-linear-card before:rounded-[20px] after:content-[''] after:absolute after:inset-[1px] after:z-1 after:bg-[#313131] after:rounded-[19px]"
            >
              <div
                class="relative z-9 flex p-4 gap-5 justify-center items-center rounded-[20px] bg-neutral2-2"
              >
                <span class="absolute top-2 right-2">
                  <button
                    onclick="document.getElementById('banner').style.display = 'none'"
                    class="relative z-0 cursor-pointer before:content-[''] before:absolute before:inset-0 before:z-1 before:opacity-25 before:bg-linear-card before:rounded-[20px] after:content-[''] after:absolute after:inset-[1px] after:z-1 after:bg-[#313131] after:rounded-[19px] after:backdrop-blur-16"
                  >
                    <div class="p-1.5 rounded-full relative z-9 bg-neutral3-50">
                      <svg
                        class="h-3 w-3 stroke-text-secondary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <g opacity="0.8">
                          <path
                            d="M2.375 2.375L9.625 9.625M9.625 2.375L2.375 9.625"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </g>
                      </svg>
                    </div>
                  </button>
                </span>
                <img
                  src="../public/img/laptop.png"
                  alt=""
                  class="w-[104px] h-[90px]"
                />
                <div class="flex-1 flex-col flex mr-6 gap-3">
                  <span class="gap-1 flex flex-col">
                    <p
                      class="base2-m opacity-80 text-text-primary self-stretch"
                    >
                      Browser notifications are off.
                    </p>
                    <p class="caption text-text-tertiary self-stretch">
                      Turn on notifications to get notified of new responses on
                      your device.
                    </p>
                  </span>
                  <p
                    class="font-rubik text-caption underline text-text-primary"
                  >
                    Turn on now
                  </p>
                </div>
              </div>
            </section>

            <!-- section1  -->
            <section
              class="relative z-0 before:content-[''] before:absolute before:inset-0 before:z-1 before:opacity-15 before:bg-linear-card before:rounded-[20px] after:content-[''] after:absolute after:inset-[1px] after:z-1 after:bg-[#313131] after:rounded-[19px]"
            >
              <div
                class="relative z-9 flex flex-col items-start self-stretch rounded-[20px] bg-neutral2-2"
              >
                <!-- email -->
                <div
                  class="flex w-full p-4 border-t border-t-neutral2-2 hover:bg-neutral2-2 items-center justify-between"
                >
                  <span class="inline-flex gap-3 items-center">
                    <svg
                      class="h-6 w-6 fill-text-secondary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4.38803 18.923L4.72852 18.2548H4.72852L4.38803 18.923ZM3.07698 17.612L2.40873 17.9525H2.40873L3.07698 17.612ZM20.923 17.612L21.5913 17.9525L20.923 17.612ZM19.612 18.923L19.2715 18.2548V18.2548L19.612 18.923ZM20.923 6.38803L21.5913 6.04754V6.04754L20.923 6.38803ZM19.612 5.07698L19.2715 5.74524V5.74524L19.612 5.07698ZM3.07698 6.38803L3.74524 6.72852L3.07698 6.38803ZM4.38803 5.07698L4.72852 5.74524L4.38803 5.07698ZM13.8418 11.5675L13.3814 10.9755V10.9755L13.8418 11.5675ZM10.1582 11.5675L9.69772 12.1595L10.1582 11.5675ZM20.5 9.55V14.45H22V9.55H20.5ZM16.45 18.5H7.55V20H16.45V18.5ZM3.5 14.45V9.55H2V14.45H3.5ZM7.55 5.5H16.45V4H7.55V5.5ZM7.55 18.5C6.69755 18.5 6.10331 18.4994 5.64068 18.4616C5.1868 18.4245 4.92604 18.3554 4.72852 18.2548L4.04754 19.5913C4.49175 19.8176 4.97189 19.912 5.51853 19.9566C6.05641 20.0006 6.7223 20 7.55 20V18.5ZM2 14.45C2 15.2777 1.99942 15.9436 2.04336 16.4815C2.08803 17.0281 2.18238 17.5082 2.40873 17.9525L3.74524 17.2715C3.6446 17.074 3.57546 16.8132 3.53838 16.3593C3.50058 15.8967 3.5 15.3025 3.5 14.45H2ZM4.72852 18.2548C4.30516 18.0391 3.96095 17.6948 3.74524 17.2715L2.40873 17.9525C2.76825 18.6581 3.34193 19.2317 4.04754 19.5913L4.72852 18.2548ZM20.5 14.45C20.5 15.3025 20.4994 15.8967 20.4616 16.3593C20.4245 16.8132 20.3554 17.074 20.2548 17.2715L21.5913 17.9525C21.8176 17.5082 21.912 17.0281 21.9566 16.4815C22.0006 15.9436 22 15.2777 22 14.45H20.5ZM16.45 20C17.2777 20 17.9436 20.0006 18.4815 19.9566C19.0281 19.912 19.5082 19.8176 19.9525 19.5913L19.2715 18.2548C19.074 18.3554 18.8132 18.4245 18.3593 18.4616C17.8967 18.4994 17.3025 18.5 16.45 18.5V20ZM20.2548 17.2715C20.039 17.6948 19.6948 18.0391 19.2715 18.2548L19.9525 19.5913C20.6581 19.2317 21.2317 18.6581 21.5913 17.9525L20.2548 17.2715ZM22 9.55C22 8.7223 22.0006 8.05641 21.9566 7.51853C21.912 6.97189 21.8176 6.49175 21.5913 6.04754L20.2548 6.72852C20.3554 6.92604 20.4245 7.1868 20.4616 7.64068C20.4994 8.10331 20.5 8.69755 20.5 9.55H22ZM16.45 5.5C17.3025 5.5 17.8967 5.50058 18.3593 5.53838C18.8132 5.57546 19.074 5.6446 19.2715 5.74524L19.9525 4.40873C19.5082 4.18238 19.0281 4.08803 18.4815 4.04336C17.9436 3.99942 17.2777 4 16.45 4V5.5ZM21.5913 6.04754C21.2317 5.34193 20.6581 4.76825 19.9525 4.40873L19.2715 5.74524C19.6948 5.96095 20.039 6.30516 20.2548 6.72852L21.5913 6.04754ZM3.5 9.55C3.5 8.69755 3.50058 8.10331 3.53838 7.64068C3.57546 7.1868 3.6446 6.92604 3.74524 6.72852L2.40873 6.04754C2.18238 6.49175 2.08803 6.97189 2.04336 7.51853C1.99942 8.05641 2 8.7223 2 9.55H3.5ZM7.55 4C6.7223 4 6.05641 3.99942 5.51853 4.04336C4.97189 4.08803 4.49175 4.18238 4.04754 4.40873L4.72852 5.74524C4.92604 5.6446 5.1868 5.57546 5.64068 5.53838C6.10331 5.50058 6.69755 5.5 7.55 5.5V4ZM3.74524 6.72852C3.96095 6.30516 4.30516 5.96095 4.72852 5.74524L4.04754 4.40873C3.34193 4.76825 2.76825 5.34193 2.40873 6.04754L3.74524 6.72852ZM20.5395 5.40799L13.3814 10.9755L14.3023 12.1595L21.4605 6.59201L20.5395 5.40799ZM10.6186 10.9755L3.46046 5.40799L2.53954 6.59201L9.69772 12.1595L10.6186 10.9755ZM13.3814 10.9755C12.5689 11.6074 11.4311 11.6074 10.6186 10.9755L9.69772 12.1595C11.0519 13.2127 12.9481 13.2127 14.3023 12.1595L13.3814 10.9755Z"
                      />
                    </svg>
                    <p
                      class="text-text-secondary font-rubik text-sm opacity-80"
                    >
                      Email
                    </p>
                  </span>
                   <label class="switch inline-flex items-center cursor-pointer">
              <input type="checkbox" checked value="" class="sr-only peer">
              <div class="relative w-11 h-6 p-1 bg-neutral2-5 rounded-full peer peer-checked:after:translate-x-[20px] rtl:peer-checked:after:-translate-x-[20px]  after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-neutral2-30 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral3-50 peer-checked:after:bg-linear-object"></div>
            </label>  
                </div>
                <!-- sms -->
                <div
                  class="flex w-full p-4 border-t border-t-neutral2-2 hover:bg-neutral2-2 items-center justify-between"
                >
                  <span class="inline-flex gap-3 items-center">
                    <svg
                      class="h-6 w-6 stroke-text-secondary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9.75 19.25H14.25M8.75 22.25H15.25C16.9069 22.25 18.25 20.9069 18.25 19.25V4.75C18.25 3.09315 16.9069 1.75 15.25 1.75H8.75C7.09315 1.75 5.75 3.09315 5.75 4.75V19.25C5.75 20.9069 7.09315 22.25 8.75 22.25Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p
                      class="text-text-secondary font-rubik text-sm opacity-80"
                    >
                      SMS
                    </p>
                  </span>
                   <label class="switch inline-flex items-center cursor-pointer">
              <input type="checkbox" checked value="" class="sr-only peer">
              <div class="relative w-11 h-6 p-1 bg-neutral2-5 rounded-full peer peer-checked:after:translate-x-[20px] rtl:peer-checked:after:-translate-x-[20px]  after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-neutral2-30 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral3-50 peer-checked:after:bg-linear-object"></div>
            </label>  
                </div>
                <!-- browser -->
                <div
                  class="flex w-full p-4 border-t border-t-neutral2-2 hover:bg-neutral2-2 items-center justify-between"
                >
                  <span class="inline-flex gap-3 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3 10.75H21M5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25Z"
                        stroke="#F8F8F8"
                        stroke-opacity="0.7"
                        stroke-width="1.5"
                        stroke-linecap="square"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.25 7.75C6.25 8.02614 6.02614 8.25 5.75 8.25C5.47386 8.25 5.25 8.02614 5.25 7.75C5.25 7.47386 5.47386 7.25 5.75 7.25C6.02614 7.25 6.25 7.47386 6.25 7.75Z"
                        fill="#F8F8F8"
                        fill-opacity="0.7"
                      />
                      <path
                        d="M8.75 7.75C8.75 8.02614 8.52614 8.25 8.25 8.25C7.97386 8.25 7.75 8.02614 7.75 7.75C7.75 7.47386 7.97386 7.25 8.25 7.25C8.52614 7.25 8.75 7.47386 8.75 7.75Z"
                        fill="#F8F8F8"
                        fill-opacity="0.7"
                      />
                      <path
                        d="M11.25 7.75C11.25 8.02614 11.0261 8.25 10.75 8.25C10.4739 8.25 10.25 8.02614 10.25 7.75C10.25 7.47386 10.4739 7.25 10.75 7.25C11.0261 7.25 11.25 7.47386 11.25 7.75Z"
                        fill="#F8F8F8"
                        fill-opacity="0.7"
                      />
                      <path
                        d="M5.75 8.375C6.09518 8.375 6.375 8.09518 6.375 7.75C6.375 7.40482 6.09518 7.125 5.75 7.125C5.40482 7.125 5.125 7.40482 5.125 7.75C5.125 8.09518 5.40482 8.375 5.75 8.375ZM8.25 8.375C8.59518 8.375 8.875 8.09518 8.875 7.75C8.875 7.40482 8.59518 7.125 8.25 7.125C7.90482 7.125 7.625 7.40482 7.625 7.75C7.625 8.09518 7.90482 8.375 8.25 8.375ZM10.75 8.375C11.0952 8.375 11.375 8.09518 11.375 7.75C11.375 7.40482 11.0952 7.125 10.75 7.125C10.4048 7.125 10.125 7.40482 10.125 7.75C10.125 8.09518 10.4048 8.375 10.75 8.375Z"
                        stroke="#F8F8F8"
                        stroke-opacity="0.7"
                        stroke-width="0.25"
                      />
                    </svg>
                    <p
                      class="text-text-secondary font-rubik text-sm opacity-80"
                    >
                      Browser
                    </p>
                  </span>
                    <label class="switch inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer">
              <div class="relative w-11 h-6 p-1 bg-neutral2-5 rounded-full peer peer-checked:after:translate-x-[20px] rtl:peer-checked:after:-translate-x-[20px]  after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-neutral2-30 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral3-50 peer-checked:after:bg-linear-object"></div>
            </label>  
                </div>
              </div>
            </section>

            <!-- section2 -->
            <section
              class="relative z-0 before:content-[''] before:absolute before:inset-0 before:z-1 before:opacity-15 before:bg-linear-card before:rounded-[20px] after:content-[''] after:absolute after:inset-[1px] after:z-1 after:bg-[#313131] after:rounded-[19px]"
            >
              <div
                class="relative z-9 flex flex-col items-start self-stretch rounded-[20px] bg-neutral2-2"
              >
                <!--  News ands Programs -->
                <div
                  class="flex w-full p-4 border-t border-t-neutral2-2 hover:bg-neutral2-2 items-center justify-between"
                >
                  <span class="inline-flex gap-3 items-center">
                    <svg
                      class="stroke-text-secondary h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.2093 15.25H18.25C16.5931 15.25 15.25 16.5931 15.25 18.25V20.2093M20.2093 15.25C20.2362 15.0882 20.25 14.9235 20.25 14.7574V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H14.7574C14.9235 20.25 15.0882 20.2362 15.25 20.2093M20.2093 15.25C20.1072 15.8629 19.8164 16.4336 19.3713 16.8787L16.8787 19.3713C16.4336 19.8164 15.8629 20.1072 15.25 20.2093M8.75 8.75H15.25M8.75 12.75H11.25"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p
                      class="text-text-secondary font-rubik text-sm opacity-80"
                    >
                      News ands Programs
                    </p>
                  </span>
                   <label class="switch inline-flex items-center cursor-pointer">
              <input type="checkbox" checked value="" class="sr-only peer">
              <div class="relative w-11 h-6 p-1 bg-neutral2-5 rounded-full peer peer-checked:after:translate-x-[20px] rtl:peer-checked:after:-translate-x-[20px]  after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-neutral2-30 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral3-50 peer-checked:after:bg-linear-object"></div>
            </label>  
                </div>
                <!-- Product updates -->
                <div
                  class="flex w-full p-4 border-t border-t-neutral2-2 hover:bg-neutral2-2 items-center justify-between"
                >
                  <span class="inline-flex gap-3 items-center">
                    <svg
                      class="h-6 w-6 fill-text-secondary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4.06095 14.7723L3.32052 14.6529L4.06095 14.7723ZM19.9391 14.7723L20.6795 14.6529L19.9391 14.7723ZM18.9554 8.67346L18.215 8.79289L18.9554 8.67346ZM5.04464 8.67346L5.78507 8.79289L5.04464 8.67346ZM1.6616 7.04456C1.54794 7.44288 1.77869 7.85792 2.177 7.97158C2.57531 8.08525 2.99036 7.8545 3.10402 7.45618L1.6616 7.04456ZM5.63108 3.29186C5.93142 3.00661 5.94365 2.53189 5.6584 2.23155C5.37315 1.93121 4.89843 1.91898 4.59809 2.20423L5.63108 3.29186ZM19.402 2.20423C19.1016 1.91898 18.6269 1.93121 18.3417 2.23155C18.0564 2.53189 18.0686 3.00661 18.369 3.29186L19.402 2.20423ZM20.896 7.45618C21.0097 7.8545 21.4248 8.08525 21.8231 7.97158C22.2214 7.85792 22.4521 7.44288 22.3385 7.04456L20.896 7.45618ZM18.215 8.79289L19.1987 14.8917L20.6795 14.6529L19.6959 8.55404L18.215 8.79289ZM16.9774 17.5H7.02267V19H16.9774V17.5ZM4.80138 14.8917L5.78507 8.79289L4.3042 8.55404L3.32052 14.6529L4.80138 14.8917ZM7.02267 17.5C5.63708 17.5 4.58075 16.2597 4.80138 14.8917L3.32052 14.6529C2.9528 16.9328 4.71335 19 7.02267 19V17.5ZM19.1987 14.8917C19.4193 16.2597 18.363 17.5 16.9774 17.5V19C19.2867 19 21.0473 16.9328 20.6795 14.6529L19.1987 14.8917ZM12 3.50002C15.0899 3.50002 17.723 5.74246 18.215 8.79289L19.6959 8.55404C19.0866 4.77677 15.8261 2.00002 12 2.00002V3.50002ZM12 2.00002C8.17395 2.00002 4.91344 4.77677 4.3042 8.55404L5.78507 8.79289C6.27707 5.74246 8.91018 3.50002 12 3.50002V2.00002ZM15.2992 17.9828C14.7146 19.5162 13.4201 20.5 12 20.5V22C14.1582 22 15.9389 20.5156 16.7008 18.5172L15.2992 17.9828ZM12 20.5C10.58 20.5 9.28543 19.5162 8.70082 17.9828L7.29924 18.5172C8.06116 20.5156 9.84184 22 12 22V20.5ZM3.10402 7.45618C3.56335 5.84659 4.44848 4.41506 5.63108 3.29186L4.59809 2.20423C3.22558 3.5078 2.19623 5.17112 1.6616 7.04456L3.10402 7.45618ZM18.369 3.29186C19.5516 4.41506 20.4367 5.84659 20.896 7.45618L22.3385 7.04456C21.8038 5.17112 20.7745 3.5078 19.402 2.20423L18.369 3.29186Z"
                      />
                    </svg>
                    <p
                      class="text-text-secondary font-rubik text-sm opacity-80"
                    >
                      Product updates
                    </p>
                  </span>
                   <label class="switch inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer">
              <div class="relative w-11 h-6 p-1 bg-neutral2-5 rounded-full peer peer-checked:after:translate-x-[20px] rtl:peer-checked:after:-translate-x-[20px]  after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-neutral2-30 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral3-50 peer-checked:after:bg-linear-object"></div>
            </label>  
                </div>
              </div>
            </section>
          </div>
    `,
};

function loadView(index) {
  settingView.innerHTML = views[index]; // Replace the content inside settingView
}

// Add click event listener to each button
settingButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const index = event.currentTarget.getAttribute("dataValue");
    if (index) {
      loadView(index); // Load the view corresponding to the clicked button
      handleActiveButton(event.currentTarget); // Handle the active state of the button
    } else {
    }
  });
});

function handleActiveButton(button) {
  settingButtons.forEach((btn) => btn.classList.remove("activeButton"));
  button.classList.add("activeButton");
  viewShowing();
}

function settingsBack() {
  settingButtons.forEach((btn) => btn.classList.remove("activeButton"));
  viewShowing();
}

// Get elements
// const openForgotPassModal = document.getElementById('openForgotPassModal');
// const closeModal = document.getElementById('closeModal');
// const modal = document.getElementById('modal');
// const closeModalBtn = document.getElementById('closeModalBtn');

const container = document.getElementById("container");
const openModal = document.getElementById("openForgotPassModal");

const createForgotPasswordModal = () => {
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  modalDiv.className =
    "fixed inset-0 z-99 bg-background bg-opacity-50 flex items-center justify-center";
  modalDiv.innerHTML = `
      <div class="bg-background p-10 w-[400px] rounded-[32px] backdrop-blur-50 shadow-button relative">
       <button
          id="closeModal" 
                class="absolute top-3 right-3 p-[1.5px] bg-neutral3-70 hover:bg-linear-hover rounded-full before:content-[''] before:absolute before:inset-0 before:opacity-25 before:bg-linear-card before:rounded-full after:content-[''] after:absolute after:inset-[1.5px] after:bg-[#313131] after:rounded-full after:backdrop-blur-50 after:shadow-button"
              >
                <div
                  class="relative z-10 inline-flex gap-2.5 p-3 bg-neutral3-70 justify-center items-center rounded-full backdrop-blur-50 shadow-button text-text-secondary hover:bg-linear-hover hover:text-text-primary font-rubik font-semibold text-sm"
                >
                   <svg
                        class="h-3 w-3 stroke-text-secondary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <g opacity="0.8">
                          <path
                            d="M2.375 2.375L9.625 9.625M9.625 2.375L2.375 9.625"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </g>
                      </svg>
                </div>
              </button>
        </button>
        <h2 class="text-2xl font-bold mb-4">Change Password</h2>
        <input
          type="password"
          placeholder="Password"
          class="w-full p-[14px] pl-5 mb-4 bg-neutral2-2 rounded-xl bg-neutral2-5 text-text-primary text-base2"></input>
          <input
          type="password"
          placeholder="New password"
          class="w-full p-[14px] pl-5 mb-4 bg-neutral2-2 rounded-xl bg-neutral2-5 text-text-primary text-base2"></input>
          <input
          type="password"
          placeholder="Confirm password"
          class="w-full p-[14px] pl-5 mb-4 bg-neutral2-2 rounded-xl bg-neutral2-5 text-text-primary text-base2"></input>
         <button
         id="closeModalBtn"
                class="relative p-[1.5px] w-full bg-neutral3-70 hover:bg-linear-hover rounded-full before:content-[''] before:absolute before:inset-0 before:opacity-25 before:bg-linear-card before:rounded-full after:content-[''] after:absolute after:inset-[1.5px] after:bg-[#313131] after:rounded-full after:backdrop-blur-50 after:shadow-button"
              >
                <div
                  class="relative z-10 w-full inline-flex gap-2.5 py-3 px-6 bg-neutral3-70 justify-center items-center rounded-full backdrop-blur-50 shadow-button text-text-secondary hover:bg-linear-hover hover:text-text-primary font-rubik font-semibold text-sm"
                >
                  Send
                </div>
              </button>
      </div>
    `;

  // Append modal to container
  container.appendChild(modalDiv);

  // Add event listener to close modal
  const closeModal = modalDiv.querySelector("#closeModal");
  const closeModalBtn = modalDiv.querySelector("#closeModalBtn");

  const closeModalFunc = () => {
    // Remove modal from DOM
    container.removeChild(modalDiv);
  };

  closeModal.addEventListener("click", closeModalFunc);
  closeModalBtn.addEventListener("click", closeModalFunc);

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === modalDiv) {
      closeModalFunc();
    }
  });
};
