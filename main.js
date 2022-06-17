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
    projectId: 0,
    projectName: 'Multi-Post Stores',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    projectFeaturedImage: './images/hype-project.png',
    projectTechnologies: ['css', 'html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },

  {
    projectId: 1,
    projectNameM: 'Professional Art Printing Data',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard.",
    projectFeaturedImage: '',
    projectTechnologiesM: ['css', 'html', 'bootstrap'],
    projectTechnologiesD: ['html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },

  {
    projectId: 2,
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
    projectId: 3,
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
    projectId: 1,
    projectNameM: 'Professional Art Printing Data',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard.",
    projectFeaturedImage: '',
    projectTechnologiesM: ['css', 'html', 'bootstrap'],
    projectTechnologiesD: ['html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },

  {
    projectId: 2,
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
    projectId: 3,
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
const workSection = document.querySelector('.testNet'); // To be changed later
const projectDetails = document.createElement('div');
projectDetails.className = 'project-details';
for (let work = 0; work < projectInfo.length; work += 1) {
  const projectContainer = document.createElement('div');
  // projectDetails.appendChild(projectContainer);
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
    projectDetails.appendChild(buttonBg);

    const buttonSubmit = document.createElement('button');
    buttonSubmit.type = 'submit';
    buttonSubmit.textContent = 'See Project';
    buttonBg.appendChild(buttonSubmit);
  }
  workSection.appendChild(projectDetails);
  projectDetails.appendChild(projectContainer);
}