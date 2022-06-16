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
    projectName: 'Professional Art Printing Data',
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
    projectName: 'Professional Art Printing Data',
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
]; // End of Objects collections

// Logic Object Manipulation Starts Here:
const workSection = document.querySelector('.testNet'); // To be changed later
const projectDetails = document.createElement('div');
projectDetails.className = 'project-details';
for (let work = 0; work < projectInfo.length; work += 1) {
  const projectContainer = document.createElement('div');
  projectDetails.appendChild(projectContainer);
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
  } else {
    projectContainer.classList = 'project';

    const proLayer = document.createElement('div');
    proLayer.className = 'pro-layer';

    const buttonBg = document.createElement('div');
    buttonBg.classList.add('btn-bg', 'cursor-hover-bg');
    projectContainer.appendChild(proLayer);
    proLayer.appendChild(buttonBg);
  }

  workSection.appendChild(projectDetails);
}
