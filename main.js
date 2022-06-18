const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.desktop-nav');
const menuExit = document.querySelector('.close-nav');
const padLinks = document.querySelectorAll('a.pad-link');

menuButton.addEventListener('click', () => {
  nav.style.display = 'block';
});

menuExit.addEventListener('click', () => {
  nav.style.display = 'none';
});

padLinks.forEach((menu) => {
  menu.addEventListener('click', () => {
    nav.style.display = 'none';
  });
});

// JavaScript Objects for project pop ups //
const projectInfo = [
  {
    projectName: 'Multi-Post Stores',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    projectFeaturedImage: './images/hype-project.png',
    projectTechnologies: ['css', 'html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },

  {
    projectNameM: 'Professional Art Printing Data',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard.",
    projectFeaturedImage: '',
    projectTechnologiesM: ['css', 'html', 'bootstrap'],
    projectTechnologiesD: ['html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },

  {
    projectNameM: 'Professional Art Printing Data',
    projectNameD: 'Data Dashboard Healthcare',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard.",
    projectFeaturedImage: '',
    projectTechnologiesM: ['css', 'html', 'bootstrap'],
    projectTechnologiesD: ['html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },

  {
    projectNameM: 'Professional Art Printing Data',
    projectNameD: 'Website Portfolio',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard.",
    projectFeaturedImage: '',
    projectTechnologiesM: ['css', 'html', 'bootstrap'],
    projectTechnologiesD: ['html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },

  {
    projectNameM: 'Professional Art Printing Data',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard.",
    projectFeaturedImage: '',
    projectTechnologiesM: ['css', 'html', 'bootstrap'],
    projectTechnologiesD: ['html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },

  {
    projectNameM: 'Professional Art Printing Data',
    projectNameD: 'Data Dashboard Healthcare',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard.",
    projectFeaturedImage: '',
    projectTechnologiesM: ['css', 'html', 'bootstrap'],
    projectTechnologiesD: ['html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },

  {
    projectNameM: 'Professional Art Printing Data',
    projectNameD: 'Website Portfolio',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard.",
    projectFeaturedImage: '',
    projectTechnologiesM: ['css', 'html', 'bootstrap'],
    projectTechnologiesD: ['html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },
]; // End of Objects collection

// Logic Object Manipulation Starts Here:
const workSection = document.querySelector('#project-container');
const projectDetail = document.createElement('div');
projectDetail.className = 'project-details';
let projectContainer;
for (let work = 0; work < projectInfo.length; work += 1) {
  projectContainer = document.createElement('div');
  if (work === 0) {
    projectContainer.classList = 'multi-post';

    const hypeImage = document.createElement('img');
    hypeImage.src = projectInfo[0].projectFeaturedImage;
    hypeImage.alt = 'project sample';
    hypeImage.className = 'hype-img';
    projectContainer.appendChild(hypeImage);

    const hypeContainer = document.createElement('div');
    hypeContainer.className = 'hype-container';
    projectContainer.appendChild(hypeContainer);

    const header = document.createElement('h3');
    header.classList.add('hype-pro', 'sub-pro');
    header.textContent = projectInfo[0].projectName;
    hypeContainer.appendChild(header);

    const hypePara = document.createElement('p');
    hypePara.classList.add('normal', 'hype-pro');
    hypePara.textContent = projectInfo[0].projectSummary;
    hypeContainer.appendChild(hypePara);

    const hypeTech = document.createElement('ul');
    hypeTech.classList.add('tech', 'custom-tech');
    // --- Destructure the projectTechnologies list --- //
    const [css, html, bootstrap, ruby] = projectInfo[0].projectTechnologies;
    for (let i = 0; i < 4; i += 1) {
      const fullList = document.createElement('li');
      if (i === 0) {
        fullList.textContent += css;
      } else if (i === 1) {
        fullList.textContent += html;
      } else if (i === 2) {
        fullList.textContent += bootstrap;
      } else {
        fullList.textContent += ruby;
      }
      hypeTech.appendChild(fullList);
      hypeContainer.appendChild(hypeTech);
    }

    const hypeButton = document.createElement('button');
    hypeButton.id = 'hype-btn';
    hypeButton.type = 'submit';
    hypeButton.textContent = 'See Project';
    hypeContainer.appendChild(hypeButton);
  } else {
    projectContainer.classList.add('project');
    if (work === 1) {
      projectContainer.classList.add('one', 'card-1');
    } else if (work === 2) {
      projectContainer.classList.add('two', 'card-2');
    } else if (work === 3) {
      projectContainer.classList.add('three', 'card-3');
    } else if (work === 4) {
      projectContainer.classList.add('four', 'card-1');
    } else if (work === 5) {
      projectContainer.classList.add('five', 'card-2');
    } else if (work === 6) {
      projectContainer.classList.add('six', 'card-3');
    }
    // Pro-layer class of web
    const proLayer = document.createElement('div');
    projectContainer.appendChild(proLayer);
    proLayer.classList = 'pro-layer';
    if (work === 3 || work === 6) {
      proLayer.classList.add('web');
    }
    // Header --one all users
    const headerOne = document.createElement('h3');
    if (work === 1 || work === 4) {
      headerOne.classList.add('sub-pro');
    } else {
      headerOne.classList.add('sub-pro', 'mob-only');
    }
    headerOne.textContent = projectInfo[work].projectNameM;
    proLayer.appendChild(headerOne);

    // Header --two for large screens
    if (work === 2 || work === 3 || work === 5 || work === 6) {
      const headerTwo = document.createElement('h3');
      headerTwo.classList.add('sub-pro', 'desk-only');
      headerTwo.textContent = projectInfo[work].projectNameD;
      proLayer.appendChild(headerTwo);
    }

    let techLists;

    if (work !== 0) {
      const projectText = document.createElement('p');
      projectText.className = 'normal';
      projectText.textContent = projectInfo[work].projectSummary;
      proLayer.appendChild(projectText);

      for (let type = 0; type < 2; type += 1) {
        techLists = document.createElement('ul');
        techLists.classList = 'tech';
        if (type === 0) {
          techLists.classList.add('mob-only');
          const [css, html, bootstrap] = projectInfo[1].projectTechnologiesM;
          for (let l = 0; l < 3; l += 1) {
            const mobList = document.createElement('li');
            if (l === 0) {
              mobList.textContent += css;
            } else if (l === 1) {
              mobList.textContent += html;
            } else if (l === 2) {
              mobList.textContent += bootstrap;
            }
            techLists.appendChild(mobList);
          }
        } else {
          techLists.classList.add('desk-only');
          if (techLists.classList.contains('desk-only')) {
            const [css, html, bootstrap] = projectInfo[1].projectTechnologiesD;
            for (let li = 0; li < 3; li += 1) {
              const mobList = document.createElement('li');
              if (li === 0) {
                mobList.textContent += css;
              } else if (li === 1) {
                mobList.textContent += html;
              } else if (li === 2) {
                mobList.textContent += bootstrap;
              }
              techLists.appendChild(mobList);
            }
          }
        }
        proLayer.appendChild(techLists);
      }
    }

    // Button Background and Button Feature //
    const buttonBg = document.createElement('div');
    if (work === 3 || work === 6) {
      buttonBg.classList.add('btn-bg', 'cursor-hover-bg', 'rem');
    } else {
      buttonBg.classList.add('btn-bg', 'cursor-hover-bg');
    }
    projectContainer.appendChild(buttonBg);

    const buttonSubmit = document.createElement('button');
    buttonSubmit.type = 'submit';
    buttonSubmit.textContent = 'See Project';
    buttonBg.appendChild(buttonSubmit);
  }
  projectDetail.appendChild(projectContainer);
  workSection.appendChild(projectDetail);
}

// Project Briefs for All Screen Sizes
const modalInformation = [
  {
    projectId: 'Modal menu',
    projectNameM: 'Multi Post Stores',
    projectNameD: 'Keeping track of hundreds  of components website',
    projectSummaryM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectSummaryD: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    projectFeaturedImage: './images/modal-image.png',
    projectTechnologies: ['html', 'bootstrap', 'Ruby on rails'],
    projectLiveLink: '#',
    projectSourceRepo: 'https://www.github.com/MindPrepDev',
  },
];

// Constructing the Modal pop-up card //
// ------Modal container ------ //
const modalContainer = document.createElement('div');
modalContainer.classList = 'modal-ctn';
document.querySelector('.pop').appendChild(modalContainer);

// Header div
const modalHeader = document.createElement('div');
modalHeader.classList = 'modal-header-ctn';
modalContainer.appendChild(modalHeader);

// Iterations for two h1 to display differently big and small screens
for (let title = 0; title < 2; title += 1) {
  const modalTitle = document.createElement('h1');
  if (title < 1) {
    modalTitle.textContent = modalInformation[0].projectNameM;
    modalTitle.classList.add('title-one', 'mob-only');
  } else {
    modalTitle.textContent = modalInformation[0].projectNameD;
    modalTitle.classList.add('title-one', 'desk-only');
  }
  modalHeader.appendChild(modalTitle);
}

// // Modal exit button
const cancelBtn = document.createElement('img');
cancelBtn.classList.add('cancel-nav', 'modalExit');
cancelBtn.src = './images/cancel.svg';
cancelBtn.alt = 'exit project page';
cancelBtn.width = '12';
cancelBtn.height = '12';
modalHeader.appendChild(cancelBtn);

// Create an unordered list
const techSkills = document.createElement('ul');
techSkills.classList.add('techo', 'modal-skills');
const [html, bootstrap, Ruby] = modalInformation[0].projectTechnologies;
for (let set = 0; set < modalInformation[0].projectTechnologies.length; set += 1) {
  const skillSet = document.createElement('li');
  skillSet.classList = 'modal-list';
  if (set === 0) {
    skillSet.textContent += html;
  } else if (set === 1) {
    skillSet.textContent += bootstrap;
  } else {
    skillSet.textContent += Ruby;
  }
  techSkills.appendChild(skillSet);
  modalContainer.appendChild(techSkills);
}

// Image-Text-Button div
const modalTheme = document.createElement('div');
modalTheme.classList = 'pivot-ctn';
modalContainer.appendChild(modalTheme);

// Project Image
const modalImage = document.createElement('img');
modalImage.className = 'project-snapshot';
modalImage.src = modalInformation[0].projectFeaturedImage;
modalImage.alt = 'A reallly nice image about the project';
modalImage.width = '300';
modalImage.height = '210';
modalTheme.appendChild(modalImage);

// Both paragraphs
const projectDescription = document.createElement('p');
projectDescription.classList.add('modal-texts', 'mob-only');
projectDescription.textContent = modalInformation[0].projectSummaryM;

const projectDescriptionD = document.createElement('p');
projectDescriptionD.classList.add('modal-texts', 'desk-only');
projectDescriptionD.textContent = modalInformation[0].projectSummaryD;

// A separate div for the text and button
const textButtonCtn = document.createElement('div');
textButtonCtn.className = 'grp-textsBtn';
modalTheme.appendChild(textButtonCtn);

// Button div container
const buttonGrp = document.createElement('div');
buttonGrp.className = 'button-grp';
textButtonCtn.append(projectDescription, projectDescriptionD, buttonGrp);

// Buttons of interactivity
for (let btn = 0; btn < 2; btn += 1) {
  const projectLink = document.createElement('a');
  if (btn === 0) {
    projectLink.href = modalInformation[0].projectLiveLink;
    projectLink.innerHTML = 'See Live <img class="live-deploy" src="./images/live.png" alt="click for live version"></img>';
  } else {
    projectLink.href = modalInformation[0].projectSourceRepo;
    projectLink.innerHTML = 'See Source <img class="git-modal" src="./images/github-wht.svg" alt="github link"></img>';
  }
  buttonGrp.appendChild(projectLink);
}

// -------- Modal Toggling ---------- //
// Get the Popmodal
const popModal = document.querySelector('.pop');

// Buttons (See Project) opens the modal
const openModal = document.querySelectorAll('#project-container button');
openModal.forEach((button) => {
  button.addEventListener('click', () => {
    popModal.style.display = 'block';
  });
});

// cancelBtn closes the modal
cancelBtn.addEventListener('click', () => {
  popModal.style.display = 'none';
});

// // When the user clicks anywhere outside of the modal, close it
// window.addEventListener('click', (e) => {
//   if (e.target === popModal) {
//     popModal.style.display = 'none';
//   }
// });

// Form Validation
// document.querySelectorAll('.contact-btn').forEach((button) => {
//   button.addEventListener('click', (event) => {
//     const emailAdd = document.querySelectorAll('input[type=email').value;
//     const errorPop = document.querySelector('.error-index');
//     // Check for case validation
//     const isLowerCase = (str) => str === str.toLowerCase();
//     if (!isLowerCase(emailAdd)) {
//       event.preventDefault();
//       errorPop.innerHTML = 'Almost! Let\'s type all in lowercase this time!';
//       // Hide error after 3 seconds.
//       setTimeout(() => {
//         errorPop.innerHTML = 'Got it?';
//       }, 3000);
//     }
//   });
// })