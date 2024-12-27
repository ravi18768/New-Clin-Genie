const languages = [
  {
    name: "Czech",
    code: "cz",
    flag: "https://flagcdn.com/w40/cz.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/cs_sample_speach.mp3",
  },
  {
    name: "Danish",
    code: "da-DK",
    flag: "https://flagcdn.com/w40/dk.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/da-DK_sample_speach.mp3",
  },
  {
    name: "Dutch",
    code: "nl",
    flag: "https://flagcdn.com/w40/nl.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/nl_sample_speach.mp3",
  },
  {
    name: "English",
    code: "en-GB",
    flag: "https://flagcdn.com/w40/gb.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/en_sample_speach.mp3",
  },
  {
    name: "French",
    code: "fr",
    flag: "https://flagcdn.com/w40/fr.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/fr_sample_speach.mp3",
  },
  {
    name: "German",
    code: "de",
    flag: "https://flagcdn.com/w40/de.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/de_sample_speach.mp3",
  },
  {
    name: "Greek",
    code: "el",
    flag: "https://flagcdn.com/w40/gr.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/gr_sample_speach.mp3",
  },
  {
    name: "Hindi",
    code: "hi",
    flag: "https://flagcdn.com/w40/in.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/hi_sample_speach.mp3",
  },
  {
    name: "Italian",
    code: "it",
    flag: "https://flagcdn.com/w40/it.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/id_sample_speach.mp3",
  },
  {
    name: "Japanese",
    code: "jp",
    flag: "https://flagcdn.com/w40/jp.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/it_sample_speach.mp3",
  },
  {
    name: "Korean",
    code: "ko",
    flag: "https://flagcdn.com/w40/kr.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/ko_sample_speach.mp3",
  },
  {
    name: "Indonesian",
    code: "id",
    flag: "https://flagcdn.com/w40/id.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/pl_sample_speach.mp3",
  },
  {
    name: "Norwegian",
    code: "no",
    flag: "https://flagcdn.com/w40/no.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/no_sample_speach.mp3",
  },
  {
    name: "Polish",
    code: "pl",
    flag: "https://flagcdn.com/w40/pl.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/pl_sample_speach.mp3",
  },
  {
    name: "Portuguese",
    code: "pt",
    flag: "https://flagcdn.com/w40/pt.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/pt_sample_speach.mp3",
  },
  {
    name: "Russian",
    code: "ru",
    flag: "https://flagcdn.com/w40/ru.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/ru_sample_speach.mp3",
  },
  {
    name: "Spanish",
    code: "es",
    flag: "https://flagcdn.com/w40/es.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/es_sample_speach.mp3",
  },
  {
    name: "Swedish",
    code: "sv",
    flag: "https://flagcdn.com/w40/se.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/sv_sample_speach.mp3",
  },
  {
    name: "Turkish",
    code: "tr",
    flag: "https://flagcdn.com/w40/tr.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/sv_sample_speach.mp3",
  },
  {
    name: "Ukrainian",
    code: "uk",
    flag: "https://flagcdn.com/w40/ua.png",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/uk_sample_speach.mp3",
  },
];

// Array of random texts for the button
const randomTexts = [
  "Better trial outcomes",
  "Reduce recruitment cost",
  "Faster patient enrollment",
  "Increase show-up rate",
  "Automate patient engagement",
];

const voiceArr = [
  {
    profile_pic: "./assets/images/profile1.png",
    name: "Study Recruitment",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/da-DK_sample_speach.mp3",
    description:
      "Prescreening Facilitates participant onboarding by screening and recruiting for studies.",
  },
  {
    profile_pic: "./assets/images/profile2.png",
    name: "Smart Qualification",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/cs_sample_speach.mp3",
    description:
      "Uses AI to qualify patients effectively based on predefined criteria.",
  },
  {
    profile_pic: "./assets/images/profile1.png",
    name: "Appointment Management",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/nl_sample_speach.mp3",
    description: "Schedules, reschedules, or cancels appointments efficiently.",
  },
  {
    profile_pic: "./assets/images/profile2.png",
    name: "Appointment Confirmation",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/fr_sample_speach.mp3",
    description:
      "Confirms appointments with participants via automated processes.",
  },
  {
    profile_pic: "./assets/images/profile1.png",
    name: "Multilingual Support",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/da-DK_sample_speach.mp3",
    description:
      "Provides support in multiple languages to ensure inclusivity and accessibility.",
  },
  {
    profile_pic: "./assets/images/profile2.png",
    name: "Leave Voicemails",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/cs_sample_speach.mp3",
    description:
      "Allows automated or manual voicemail drops for important updates.",
  },
  {
    profile_pic: "./assets/images/profile1.png",
    name: "Smooth Human Transfer",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/nl_sample_speach.mp3",
    description: "Transfers calls seamlessly to a human agent when necessary.",
  },
  {
    profile_pic: "./assets/images/profile2.png",
    name: "Inbound Management",
    audio:
      "https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/audio_samples/fr_sample_speach.mp3",
    description:
      "Handles inbound calls with AI to manage queries and provide accurate responses.",
  },
];

// Function to create a typewriter effect with a blinking cursor
function typewriterEffect(element, text, delay, callback) {
  let currentText = "";
  let currentIndex = 0;
  let cursorVisible = true; // Toggle cursor visibility
  const cursor = "|"; // Cursor character

  // Function to toggle cursor visibility
  function toggleCursor() {
    cursorVisible = !cursorVisible;
    element.textContent = currentText + (cursorVisible ? cursor : "");
  }

  // Typing the current text
  function updateText() {
    if (currentIndex < text.length) {
      currentText += text[currentIndex];
      element.textContent = currentText + cursor; // Append cursor
      currentIndex++;
      setTimeout(updateText, delay);
    } else {
      clearInterval(cursorInterval); // Stop blinking cursor
      element.textContent = currentText; // Final text without cursor
      if (callback) callback(); // Call the callback when done
    }
  }

  const cursorInterval = setInterval(toggleCursor, 100); // Cursor blinks every 100ms
  updateText(); // Start the typing effect
}

// Function to update the text content randomly after previous typing is done
let randomIndex = 0;
function updateRandomText() {
  const newText = randomTexts[randomIndex];
  randomIndex = randomTexts.length - 1 != randomIndex ? randomIndex + 1 : 0;
  const btn1Element = document.querySelector(".random-text");
  btn1Element.style.textTransform = "capitalize";

  typewriterEffect(btn1Element, newText, 30, function () {
    setTimeout(updateRandomText, 2000); // Wait 2 seconds before next text
  });
}

// Start the first random text update
updateRandomText();

// audio player
const currentPlayingState = {
  currentPlaying: null,
  currentButton: null,
};

function initializeWaveSurfer(
  item,
  index,
  container,
  btn,
  currentPlayingState
) {
  const randomNumbers = Array.from(
    { length: 60 },
    () => Math.floor(Math.random() * 9) + 2
  );
  const playButton = document.getElementById(`${btn}`);
  let isPlaying = false;

  // Create a new WaveSurfer instance
  const wavesurfer = WaveSurfer.create({
    container: `#${container}`,
    waveColor: "#D9D9D9",
    progressColor: "#242731",
    cursorWidth: 0,
    barWidth: 2,
    barGap: 3,
    barRadius: 2,
    barHeight: 0.3,
    responsive: true,
    url: item?.audio,
    peaks: [randomNumbers], // Add peaks to waveform
  });

  // Add event listener to play/pause button
  playButton.addEventListener("click", () => {
    const playIcon = "./assets/images/play.svg"; // Path to your play icon image
    const pauseIcon = "./assets/images/pause.svg"; // Path to your pause icon image

    // Pause any currently playing audio
    if (
      currentPlayingState.currentPlaying &&
      currentPlayingState.currentPlaying !== wavesurfer
    ) {
      currentPlayingState.currentPlaying.pause();
      document
        .querySelector(".play-btn img.playing")
        ?.classList.remove("playing");
      document
        .querySelector(".play-btn img.paused")
        ?.classList.remove("paused");
      playButton.querySelector("img").src = playIcon; // Set to play icon
    }

    // Toggle play/pause for this instance
    isPlaying ? wavesurfer.pause() : wavesurfer.play();
    playButton.querySelector("img").src = isPlaying ? playIcon : pauseIcon; // Set appropriate icon
    isPlaying = !isPlaying;
    currentPlayingState.currentPlaying = wavesurfer;
    currentPlayingState.currentButton = null;
  });

  wavesurfer.on("pause", () => {
    const playIcon = "./assets/images/play.svg"; // Path to your play icon image
    playButton.querySelector("img").src = playIcon; // Set to play icon
  });

  // Reset state when playback finishes
  wavesurfer.on("finish", () => {
    const playIcon = "./assets/images/play.svg"; // Path to your play icon image
    playButton.querySelector("img").src = playIcon; // Set to play icon;
    isPlaying = false;
  });
}

const slider = document.querySelector(".voice-card-container");
let currentIndex = 0;
let currentPlaying = null;
function renderSlider() {
  voiceArr.forEach((item, index) => {
    const slide = document.createElement("div");
    slide.classList.add("voice-card");
    slide.innerHTML = `<div class="profile">
                          <img src=${item?.profile_pic} alt="profile" class="pro-img"/>
                          <div class="audio-wave">
                            <div id="waveform${index}" style="width:100%"></div>
                          </div>
                            <button class="play-btn" id="playButton${index}">
                                <img src="./assets/images/play.svg" alt="Play" class="play-pause-img"/>
                            </button>
                        </div>
                        <div class="details">
                            <h2>${item?.name}</h2>
                            <p>${item?.description}</p>
                        </div>
                      `;
    slider.appendChild(slide);

    //audio wave
    initializeWaveSurfer(
      item,
      index,
      `waveform${index}`,
      `playButton${index}`,
      currentPlayingState
    );
  });
}
renderSlider();

// toggle option
const toggleOptions = document.querySelectorAll(".toggle-option");
toggleOptions.forEach((option) => {
  option.addEventListener("click", () => {
    toggleOptions.forEach((o) => o.classList.remove("active"));
    option.classList.add("active");
  });
});

// List of countries with their flag emojis
fetch("./assets/JSON/countryData.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    populateCustomDropdown(data);
  })
  .catch((error) => {
    console.error("Error fetching the country data:", error);
  });

function populateCustomDropdown(countries) {
  const countrySelect = document.getElementById("country-select");
  const selectedCountryInfo = document.getElementById("selected-country-info");

  // Populate dropdown
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.code;
    option.innerHTML = `${country.flag}`;
    countrySelect.appendChild(option);
  });

  // Event listener for selection
  countrySelect.addEventListener("change", (e) => {
    const selectedCode = e.target.value;
    const selectedCountry = countries.find(
      (country) => country.code === selectedCode
    );

    if (selectedCountry) {
      selectedCountryInfo.innerHTML = `
            <h2>Selected Country</h2>
            <p>
                <strong>Name:</strong> ${selectedCountry.flag}<br>
                <strong>Country Code:</strong> ${selectedCountry.code}
            </p>
        `;
    } else {
      selectedCountryInfo.innerHTML = "";
    }
  });
}

// hamburger-menu event
document.getElementById("showButton").addEventListener("click", function () {
  const targetDiv = document.getElementById("targetDiv");
  const showButton = document.getElementById("showButton");
  if (targetDiv.classList.contains("hidden")) {
    targetDiv.classList.remove("hidden");
    targetDiv.classList.add("visible");
    showButton.textContent = "x";
  } else {
    targetDiv.classList.remove("visible");
    targetDiv.classList.add("hidden");
    showButton.textContent = "☰";
  }
});

// Data for right-inbound container
const rightInboundOptions = [
  { imgSrc: "/assets/images/Sales.png", text: "Appointments" },
  { imgSrc: "/assets/images/Sales.png", text: "Product support" },
  { imgSrc: "/assets/images/Sales.png", text: "Appointments" },
  { imgSrc: "/assets/images/Sales.png", text: "Customer support" },
];

// Data for left-inbound container
const leftInboundOptions = [
  { imgSrc: "/assets/images/Sales.png", text: "Sales" },
  {
    imgSrc: "/assets/images/Surveys and feedback.png",
    text: "Surveys and feedback",
  },
  {
    imgSrc: "/assets/images/Lead pre qualification.png",
    text: "Lead pre-qualification",
  },
  {
    imgSrc: "/assets/images/Confrmations and follow-up.png",
    text: "Confirmations and follow-up",
  },
];

// Function to generate dynamic options
const renderDynamicOptions = (containerId, options) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Clear existing content
  container.innerHTML = "";

  // Create HTML for each option
  options.forEach((option) => {
    const salesCol = document.createElement("div");
    salesCol.className = "salesCol";
    salesCol.innerHTML = `
      <img src="${option.imgSrc}" class="salesImg" alt="${option.text}" />
      <div class="salesTxt">${option.text}</div>
    `;
    container.appendChild(salesCol);
  });
};

// Tab switching functionality
const initTabs = () => {
  const tabConfig = {
    outbound: {
      button: document.getElementById("outbound-btn"),
      content: document.getElementById("outbound-content"),
    },
    inbound: {
      button: document.getElementById("inbound-btn"),
      content: document.getElementById("inbound-content"),
    },
  };

  // Add click handlers to tab buttons
  Object.entries(tabConfig).forEach(([tabName, { button, content }]) => {
    button?.addEventListener("click", () => {
      Object.values(tabConfig).forEach(({ button, content }) => {
        button.classList.remove("active");
        content.classList.remove("active");
      });
      button.classList.add("active");
      content.classList.add("active");
    });
  });

  // Set default active tab
  tabConfig.outbound.button.classList.add("active");
  tabConfig.outbound.content.classList.add("active");
};

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  renderDynamicOptions("right-inbound", rightInboundOptions);
  renderDynamicOptions("left-inbound", leftInboundOptions);
});

const pricingData = [
  {
    title: "Lite",
    price: "$99",
    time: "Month",
    description:
      "Upgrade your social portfolio with a stunning profile & enhanced shots.",
    features: [
      "Create 1 voice agent",
      "400 minutes every month",
      "1 team member",
      "6 basic voices",
      "Inbound and outbound agents",
      "Call recording and transcription",
      "Automated SMS sending",
      "Voicemail detection",
      "Customer sentiment analysis",
    ],
    buttonText: "Get started with Lite →",
  },
  {
    title: "Essential",
    price: "$1,999",
    time: "Month",
    description:
      "Upgrade your social portfolio with a stunning profile & enhanced shots.",
    features: [
      "Create 1 voice agent",
      "10,000 minutes every month",
      "2 team member",
      "6 basic voices",
      "Inbound and outbound Agents",
      "Call recording and transcription",
      "Automated SMS sending",
      "Voicemail detection",
      "Customer sentiment analysis",
    ],
    buttonText: "Get started with Essential →",
  },
  {
    title: "Growth",
    price: "$4,999",
    time: "Month",
    description:
      "Upgrade your social portfolio with a stunning profile & enhanced shots.",
    features: [
      "Create 1 voice agent",
      "25,000 minutes every month",
      "2 team member",
      "6 basic voices",
      "Inbound and outbound agents",
      "Call recording and transcription",
      "Automated SMS sending",
      "Voicemail detection",
      "Customer sentiment analysis",
    ],
    buttonText: "Get started with Growth →",
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "",
    description:
      "Upgrade your social portfolio with a stunning profile & enhanced shots.",
    features: [
      "Create no limit voice agent",
      "No limits minutes every month",
      "No limits team member",
      "6 basic voices",
      "Inbound and outbound agents",
      "Call recording and transcription",
      "Call recording and transcription",
      "Call recording and transcription",
      "Call recording and transcription",
    ],
    buttonText: "Contact Sales →",
  },
];

function renderPricingCards() {
  pricingData.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "pricing-card";

    const h4 = document.createElement("h4");
    h4.textContent = item.title;

    const priceDiv = document.createElement("div");
    priceDiv.className = "price";
    priceDiv.textContent = item.price ? item.price : "Custom";

    const priceSpan = document.createElement("span");
    priceSpan.textContent = item.time ? ` /per ${item.time}` : "";

    priceDiv.appendChild(priceSpan);

    const desPara = document.createElement("p");
    desPara.textContent = item.description;

    const ul = document.createElement("ul");

    item.features.forEach((data, index) => {
      const li = document.createElement("li");
      li.textContent = data;
      ul.appendChild(li);
    });

    const btn = document.createElement("button");
    btn.className = "price-btn";
    btn.textContent = item.buttonText;

    card.appendChild(h4);
    card.appendChild(priceDiv);
    card.appendChild(desPara);
    card.appendChild(ul);
    card.appendChild(btn);

    const priceGrid = document.getElementById("price-main-grid");
    priceGrid.appendChild(card);
  });
}
renderPricingCards();

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");
  const displayImage = document.getElementById("display-image");

  // Set the default image
  displayImage.src = "./assets/images/three/image1.svg";

  // Add hover functionality
  menuItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const image = item.getAttribute("data-image");
      displayImage.src = image;

      // Remove active and active-child classes from all items
      menuItems.forEach((menuItem) => {
        menuItem.classList.remove("active");
        const children = menuItem.querySelectorAll("h4, p");
        children.forEach((child) => child.classList.remove("active-child"));
      });

      // Add active and active-child classes to the hovered item
      item.classList.add("active");
      const children = item.querySelectorAll("h4, p");
      children.forEach((child) => child.classList.add("active-child"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = [
    { id: "#import-leads", animation: "slide-in-right" },
    { id: "#pre-screening", animation: "slide-in-left" },
    { id: "#booking-appointment", animation: "slide-in-right" },
    { id: "#automate-engagement", animation: "slide-in-left" },
    { id: "#post-call", animation: "slide-in-right" },
    { id: "#analytics-reports", animation: "slide-in-left" },
  ];

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animation = entry.target.getAttribute("data-animation");
        entry.target.classList.remove("hidden");
        entry.target.classList.add(animation);
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach(({ id, animation }) => {
    const element = document.querySelector(id);
    if (element) {
      element.setAttribute("data-animation", animation);
      observer.observe(element);
    }
  });
});

// List of countries with their flag emojis
fetch("./assets/JSON/aboutCardData.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    populateAboutCards(data);
  })
  .catch((error) => {
    console.error("Error fetching the country data:", error);
  });

function populateAboutCards(data) {
  // Target container
  const aboutContainer = document.querySelector(".about-container");

  // Generate cards dynamically
  data.forEach((card, index) => {
    const aboutCard = document.createElement("div");
    aboutCard.classList.add("about-card");
    // Set background color based on odd/even index
    aboutCard.style.backgroundColor = index % 2 === 0 ? "#FFFCF8" : "#F7F8FC";
    aboutCard.innerHTML = `
          <img src="${card.imgSrc}" alt="${card.altText}" class="about-img" />
          <p class="about-header">${card.header}</p>
          <div class="stars">${card.stars}</div>
          <div>
              <p class="about-description">
                  <strong>${card.descriptionHeader}</strong>
                  ${card.description}
              </p>
          </div>
      `;

    const container = document.createElement("div");
    container.appendChild(aboutCard);
    aboutContainer.appendChild(container);
  });
}

const input = document.querySelector("#phone");
const iti = window.intlTelInput(input, {
  initialCountry: "us", // Default country
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // For number formatting
});
