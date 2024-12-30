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

const faqListArray = [
  {
    category: "",
    items: [
      {
        title:
          "What makes ClinGenie different from other patient recruitment tools?",
        description:
          "ClinGenie uses cutting-edge AI to automate the recruitment process, from pre-screening to engagement and scheduling. Unlike traditional tools, it leverages predictive analytics, multilingual AI voice agents, and real-time monitoring to improve efficiency, accuracy, and patient engagement.",
      },
      {
        title: "Who is ClinGenie designed for?",
        description:
          "ClinGenie is ideal for clinical research organizations (CROs), sponsors, and research sites seeking to optimize recruitment workflows, reduce timelines, and increase participant enrollment rates.",
      },
      {
        title:
          "How can ClinGenie help improve patient recruitment success rates?",
        description:
          "By automating pre-screening, personalizing engagement, and streamlining workflows, ClinGenie ensures faster patient matching, better retention, and fewer missed opportunities.",
      },
      {
        title:
          "Does ClinGenie focus on specific therapeutic areas or types of clinical trials?",
        description:
          "ClinGenie is versatile and supports a wide range of therapeutic areas and trial types, from small, local studies to global, multi-center trials.",
      },
    ],
  },

  {
    category: "Features and Functionality",
    items: [
      {
        title:
          "How does AI enhance patient recruitment compared to traditional methods?",
        description:
          "AI eliminates manual inefficiencies by analyzing vast datasets in real-time to identify suitable participants. It engages patients promptly and provides accurate pre-screening, ensuring faster recruitment with fewer errors.",
      },
      {
        title:
          "Can ClinGenie handle complex inclusion/exclusion criteria during pre-screening?",
        description:
          "Yes, ClinGenie’s AI can be configured to assess detailed eligibility criteria, ensuring only qualified patients are engaged further.",
      },
      {
        title:
          "How does ClinGenie’s AI voice agent handle sensitive or complex patient questions?",
        description:
          "ClinGenie’s AI voice agents are designed with empathy and intelligence, providing clear, accurate, and patient-friendly responses. Complex queries can be escalated to human representatives if needed.",
      },
      {
        title:
          "Does ClinGenie support follow-up engagement for long-term trials?",
        description:
          "Absolutely! ClinGenie ensures ongoing engagement with automated reminders, follow-ups, and personalized outreach throughout the trial lifecycle.",
      },
      {
        title: "Can ClinGenie manage multiple trials simultaneously?",
        description:
          "Yes, ClinGenie’s robust platform allows users to manage multiple recruitment campaigns across different trials efficiently.",
      },
      {
        title:
          "Is there a way to customize recruitment workflows for specific studies?",
        description:
          "Yes, ClinGenie offers customizable workflows tailored to each trial’s unique requirements, ensuring flexibility and precision.",
      },
    ],
  },

  {
    category: "Integration and Compatibility",
    items: [
      {
        title: "What platforms does ClinGenie integrate with?",
        description:
          "ClinGenie integrates seamlessly with lead sources like Facebook, Google Ads, CRM tools, and other trial management systems, ensuring smooth data flow.",
      },
      {
        title: "How easy is it to integrate ClinGenie into existing systems?",
        description:
          "ClinGenie is designed for easy integration, with minimal setup required. Our support team ensures a hassle-free implementation process.",
      },
      {
        title:
          "Can ClinGenie integrate with electronic medical records (EMRs)?",
        description:
          "Currently, ClinGenie focuses on external lead sources and recruitment. EMR integration can be explored for specific client needs.",
      },
    ],
  },

  {
    category: "Data Privacy and Security",
    items: [
      {
        title:
          "How does ClinGenie ensure compliance with GDPR, HIPAA, or other regulations?",
        description:
          "ClinGenie is built to comply with global data protection standards, ensuring secure data handling and patient confidentiality at every step.",
      },
      {
        title: "Where is patient data stored, and how is it secured?",
        description:
          "Data is stored securely in encrypted servers, with stringent access controls and regular audits to prevent unauthorized access.",
      },
      {
        title: "How does ClinGenie ensure participant confidentiality?",
        description:
          "ClinGenie anonymizes sensitive data where necessary and adheres to strict protocols to maintain participant privacy.",
      },
    ],
  },

  {
    category: "Usability and Support",
    items: [
      {
        title:
          "How user-friendly is ClinGenie for research coordinators or site staff?",
        description:
          "ClinGenie features an intuitive interface designed for ease of use, allowing staff to focus on core responsibilities instead of administrative tasks.",
      },
      {
        title: "What kind of training or onboarding is provided?",
        description:
          "We offer comprehensive onboarding sessions, user guides, and ongoing support to ensure users are confident and effective with the platform.",
      },
      {
        title: "What happens if I face technical issues?",
        description:
          "Our dedicated support team is available 24/7 to resolve any technical challenges promptly.",
      },
      {
        title:
          "Can the AI be customized to match the tone and communication style of our organization?",
        description:
          "Yes, ClinGenie’s AI voice agents can be tailored to align with your brand’s tone and communication preferences.",
      },
    ],
  },

  {
    category: "Performance and Reporting",
    items: [
      {
        title: "How accurate is ClinGenie’s AI in matching patients to trials?",
        description:
          "ClinGenie’s AI delivers industry-leading accuracy by analyzing diverse datasets and applying predictive algorithms to match patients effectively.",
      },
      {
        title:
          "What metrics does ClinGenie provide to measure recruitment success?",
        description:
          "ClinGenie provides detailed reports on lead conversion rates, recruitment timelines, and AI efficiency, helping users track and optimize performance.",
      },
      {
        title: "Can ClinGenie provide real-time reports for sponsors and CROs?",
        description:
          "Yes, real-time dashboards and customizable reports ensure transparency and data-driven decision-making.",
      },
      {
        title: "How does ClinGenie handle no-shows or dropouts?",
        description:
          "ClinGenie minimizes no-shows with automated reminders and re-engages dropouts through targeted follow-up strategies.",
      },
    ],
  },

  {
    category: "Scalability and Flexibility",
    items: [
      {
        title: "Is ClinGenie suitable for global trials?",
        description:
          "Yes, with support for over 30 languages and robust scalability, ClinGenie is ideal for managing global, multi-site trials.",
      },
      {
        title:
          "Does the platform scale to handle large volumes of patients or campaigns?",
        description:
          "ClinGenie is built to manage high volumes of patient data and concurrent campaigns efficiently.",
      },
      {
        title: "Can ClinGenie be used for virtual or hybrid trials?",
        description:
          "Yes, ClinGenie’s AI-driven workflows are well-suited for virtual and hybrid trial models.",
      },
    ],
  },

  {
    category: "Pricing and ROI",
    items: [
      {
        title: "What is the pricing model for ClinGenie?",
        description:
          "ClinGenie offers flexible pricing tailored to your organization’s size, number of trials, and specific feature needs. Contact us for a customized quote.",
      },
      {
        title: "What is the estimated ROI for using ClinGenie?",
        description:
          "ClinGenie dramatically reduces recruitment timelines and administrative workloads, leading to significant cost savings and faster trial completion.",
      },
      {
        title:
          "Are there additional costs for features like multilingual AI agents?",
        description:
          "Multilingual support and advanced analytics are included in most plans. Specific needs may require tailored solutions at an additional cost.",
      },
    ],
  },

  {
    category: "Ethics and Patient-Centricity",
    items: [
      {
        title: "How does ClinGenie ensure patient outreach is ethical?",
        description:
          "ClinGenie adheres to strict ethical guidelines, ensuring communication is respectful, transparent, and non-intrusive.",
      },
      {
        title:
          "Does ClinGenie provide patients with trial education or consent support?",
        description:
          "Yes, ClinGenie’s AI agents can deliver educational materials and assist with consent processes to improve patient understanding and trust.",
      },
      {
        title: "Can the AI prioritize patient preferences?",
        description:
          "ClinGenie’s AI considers patient preferences such as location and availability to enhance satisfaction and retention.",
      },
    ],
  },

  {
    category: "Success Stories and Testimonials",
    items: [
      {
        title: "Are there any case studies or success stories?",
        description:
          "Yes, ClinGenie has helped numerous research sites and sponsors achieve faster recruitment and higher enrollment rates. Contact us to learn more.",
      },
      {
        title: "What recruitment timelines have users achieved with ClinGenie?",
        description:
          "Users have reported significant reductions in recruitment timelines, enabling them to meet or exceed enrollment goals efficiently.",
      },
      {
        title: "What feedback have patients given about ClinGenie?",
        description:
          "Patients appreciate ClinGenie’s clear communication, prompt responses, and seamless engagement throughout the trial process.",
      },
    ],
  },
];

const faqBlock = document.getElementById("faq-block");

// Create a list
const faqList = document.createElement("ul");
faqList.style.listStyle = "none";
faqList.style.padding = "0";

// Variable to keep track of the currently open description
let openDescription = null;
let openParentDiv = null;
let openToggleButton = null;
let openTitle = null;

// Create divider element function
const createDivider = () => {
  const divider = document.createElement("hr");
  divider.style.cssText = `
    border: none;
    height: 1px;
    background-color: #E5E5E5;
    margin: 20px 0;
    width: 100%;
  `;
  return divider;
};

// Loop through the faqListArray to create list items dynamically
faqListArray.forEach((categoryGroup, categoryIndex) => {
  // Create a container for each category
  const categoryContainer = document.createElement("div");

  // Create category title if it exists
  if (categoryGroup.category) {
    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = categoryGroup.category;
    categoryTitle.className = "category-title";
    categoryContainer.appendChild(categoryTitle);
  }

  // Loop through items in each category
  categoryGroup.items.forEach((feature) => {
    // Create the parent div
    const parentDiv = document.createElement("div");
    parentDiv.style.borderRadius = "15px";
    parentDiv.style.transition = "all 0.3s ease";
    parentDiv.style.padding = "5px";
    parentDiv.style.marginBottom = "10px";

    // Create the list item
    const li = document.createElement("li");
    li.style.position = "relative";
    li.style.cursor = "pointer";

    // Create the title paragraph
    const title = document.createElement("p");
    title.textContent = feature.title;
    title.style.cssText = `
      background-color: #F8F8F8;
      padding: 20px 50px 20px 20px;
      border-radius: 12px;
      margin: 0;
      cursor: pointer;
      transition: all 0.3s ease;
    `;

    // Create a description paragraph
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = feature.description;
    description.style.cssText = `
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.6s ease, opacity 0.3s ease;
      margin-top: 10px;
      padding: 0 20px;
      opacity: 0;
    `;

    // Create the toggle button
    const toggleButton = document.createElement("span");
    toggleButton.textContent = "+";
    toggleButton.style.cssText = `
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      font-size: 30px;
      color: #B4BBC5;
      transition: all 0.3s ease;
    `;

    const resetStyles = (element) => {
      if (!element) return;

      if (element === openTitle) {
        element.style.cssText = `
          background-color: #F8F8F8;
          padding: 20px 50px 20px 20px;
          border-radius: 12px;
          margin: 0;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #061c3d;
        `;
      } else if (element === openDescription) {
        element.style.cssText = `
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.6s ease, opacity 0.3s ease;
          margin-top: 10px;
          padding: 0 20px;
          opacity: 0;
        `;
      } else if (element === openToggleButton) {
        element.style.cssText = `
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          font-size: 30px;
          color: #B4BBC5;
          transition: all 0.3s ease;
        `;
        element.textContent = "+";
      }

      if (openParentDiv) {
        openParentDiv.style.backgroundColor = "";
      }
    };

    const toggleDescription = () => {
      const isOpen = openDescription === description;

      // Reset previously open elements
      resetStyles(openTitle);
      resetStyles(openDescription);
      resetStyles(openToggleButton);

      if (!isOpen) {
        // Open the new description
        description.style.maxHeight = `${description.scrollHeight}px`;
        description.style.opacity = "1";

        title.style.cssText = `
          background-color: transparent;
          padding: 20px 50px 20px 20px;
          border-radius: 12px;
          margin: 0;
          cursor: pointer;
          transition: all 0.3s ease;
          color: white;
        `;

        description.style.color = "white";

        toggleButton.style.cssText = `
          position: absolute;
          right: 20px;
          top: 30px;
          transform: translateY(-50%);
          cursor: pointer;
          font-size: 35px;
          color: white;
          transition: all 0.3s ease;
        `;
        toggleButton.textContent = "×";

        parentDiv.style.backgroundColor = "#0A0A0A";

        // Update the references
        openDescription = description;
        openParentDiv = parentDiv;
        openToggleButton = toggleButton;
        openTitle = title;
      } else {
        // Reset all references if the same item is toggled
        openDescription = null;
        openParentDiv = null;
        openToggleButton = null;
        openTitle = null;
      }
    };

    // Add click event listeners
    const handleClick = (e) => {
      e.stopPropagation();
      toggleDescription();
    };

    toggleButton.addEventListener("click", handleClick);
    title.addEventListener("click", handleClick);

    // Append elements
    li.appendChild(title);
    li.appendChild(toggleButton);
    li.appendChild(description);
    parentDiv.appendChild(li);
    categoryContainer.appendChild(parentDiv);
  });

  // Append the category container to the FAQ list
  faqList.appendChild(categoryContainer);

  // Add divider after each category except the last one
  if (categoryIndex < faqListArray.length - 1) {
    faqList.appendChild(createDivider());
  }
});

// Append the FAQ list to the FAQ block container
faqBlock.appendChild(faqList);
