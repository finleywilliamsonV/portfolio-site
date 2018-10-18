// initialize modal
$('#project-modal').modal({show: false});

// var for referencing image arrays
let modalImages;

// object containing text files and tags for projects
const projectData = {
  lorem: {
    title: 'Lorem Ipsum Generator',
    tags: ['Node', 'Express', 'MongoDB'],
    description: `Generate Lorem Ipsum text in a variety of styles. This site uses Express for routing, MongoDB for data used in generation, pug for a views engine, and Bootstrap for styling.`,
    images: ['../img/LoremIpsum3x2.png'],
    linkText: 'Live Site',
    link: '/lorem',
    githubLink: 'https://github.com/finleywilliamsonV/lorem-express',
  },
  todo: {
    title: 'ToDo List',
    tags: ['Node'],
    description: `A simple to-do list. I use vanilla JS for routing and views handling, store & retrieve user list data in local storage, and use Bootstrap for styling.`,
    images: ['../img/ToDoList3x2.png'],
    linkText: 'Live Site',
    link: '/todo',
    githubLink: 'https://github.com/finleywilliamsonV/To-Do-VanillaJS',
  },
  kanban: {
    title: 'Kanban',
    tags: ['Node', 'React'],
    description: 'Organize your tasks with kanban.',
    images: ['../img/placeholder3x2.png'],
    linkText: 'Coming Soon',
    link: '',
    githubLink: 'https://github.com/verydanny/kanban',
  },
  emoji: {
    title: 'Emojis in Space',
    tags: ['AS3'],
    description: `A retro-themed, top-down shooter pitting Clyde Panther against a raucous horde of emojis. My first commercial game! Download free on ios and Google Play.`,
    images: ['../img/EmojisInSpace3x2.png', '../img/EmojisInSpace3x2.png'],
    linkText: 'Visit Site',
    link: 'http://emojisin.space',
    githubLink: 'https://github.com/finleywilliamsonV/EmojisInSpace',
  },
  dungeon: {
    title: 'Dungeon Masters (in progress)',
    tags: ['AS3'],
    description: `Build your own dungeon, fill it with monsters, and defend against endless waves of adventurers. Implements a D&D style combat system.`,
    images: ['../img/DungeonMasters3x2.png'],
    linkText: 'Coming Soon',
    link: '',
    githubLink: 'https://github.com/finleywilliamsonV/DungeonMasters',
  },
};

// onclick, create the modal
$('.overlay').click((e)=> {
  // 1. store target
  let target = e.target;
  let projectName;

  // 2. store which image was clicked
  if (target.classList.contains('overlay-text')) {
    projectName = target.parentNode.id.substring(8);
  } else if (target.classList.contains('project-image')) {
    projectName = target.id.substring(6);
  } else {
    projectName = target.id.substring(8);
  }

  // 3. show modal
  $('#project-modal').modal('show');

  // 4. set modal images to respective array
  modalImages = projectData[projectName].images;

  // 5. store parent carousel div and create carousel inner
  const $carouselDiv = document.getElementById('project-carousel');
  // 5.1 clear contents of carousel div
  $carouselDiv.innerHTML = '';
  // 5.2 create carousel inner div
  const $carouselInner = document.createElement('div');
  $carouselInner.classList += 'carousel-inner';
  // 5.3 append carousel inner to carousel div
  $carouselDiv.appendChild($carouselInner);

  // 6. loop through image array and create dom nodes for each slide
  for (let i = 0; i < modalImages.length; i++) {
    // 6.1 create carousel item
    const $carouselItem = document.createElement('div');
    $carouselItem.className += 'carousel-item';

    // 6.2 create carousel image
    const $carouselImage = document.createElement('img');
    $carouselImage.className += 'd-block w-100';
    $carouselImage.setAttribute('alt', `image #${i+1}`);
    $carouselImage.setAttribute('src', modalImages[i]);

    // 6.3 add active to first item
    if (i === 0) {
      $carouselItem.className += ' active';
    }

    // 6.4 append image to item
    $carouselItem.appendChild($carouselImage);

    // 6.5 append item to main div
    $carouselInner.appendChild($carouselItem);
  }

  // 7. if more than one image in modal images, create and add controls
  if (modalImages.length > 1) {
    // 7.1 create previous button
    const $previousButton = document.createElement('a');
    $previousButton.className += 'carousel-control-prev';
    $previousButton.setAttribute('href', '#project-carousel');
    $previousButton.setAttribute('role', 'button');
    $previousButton.setAttribute('data-slide', 'prev');

    // 7.2 create previous icon span
    const $previousIcon = document.createElement('span');
    $previousIcon.className += 'carousel-control-prev-icon';
    $previousIcon.setAttribute('aria-hidden', true);

    // 7.3 create previous screen reader span
    const $previousSR = document.createElement('span');
    $previousSR.className += 'sr-only';
    $previousSR.innerText = 'Previous';

    // 7.4 append icon and sr to button, append button to parent carousel div
    $previousButton.appendChild($previousIcon);
    $previousButton.appendChild($previousSR);
    $carouselDiv.appendChild($previousButton);

    // 7.5 create next button
    const $nextButton = document.createElement('a');
    $nextButton.className += 'carousel-control-next';
    $nextButton.setAttribute('href', '#project-carousel');
    $nextButton.setAttribute('role', 'button');
    $nextButton.setAttribute('data-slide', 'next');

    // 7.6 create next icon span
    const $nextIcon = document.createElement('span');
    $nextIcon.className += 'carousel-control-next-icon';
    $nextIcon.setAttribute('aria-hidden', true);

    // 7.7 create next screen reader span
    const $nextSR = document.createElement('span');
    $nextSR.className += 'sr-only';
    $nextSR.innerText = 'Next';

    // 7.8 append icon and sr to button, append button to parent carousel div
    $nextButton.appendChild($nextIcon);
    $nextButton.appendChild($nextSR);
    $carouselDiv.appendChild($nextButton);
  }

  // 8. fill modal with project data
  // 8.1 add title
  document.getElementById('modal-title').innerText
    = projectData[projectName].title;

  // 8.2 add tags
  const modalTags = document.getElementById('modal-tags');
  modalTags.innerText = '';

  let tagText = '';
  const currentTags = projectData[projectName].tags;
  for (let i = 0; i < currentTags.length; i++) {
    let tag = currentTags[i];

    if (tag === 'Node') {
      tag = 'Node.js';
    } else if (tag === 'AS3') {
      tag = 'ActionScript 3';
    }

    tagText += tag;

    if (currentTags.length >= 2) {
      if (i === currentTags.length - 2) {
        tagText += ', & ';
      } else if (i != currentTags.length - 1) {
        tagText += ', ';
      }
    }
  }

  modalTags.innerText = tagText;

  // 8.3 add description
  document.getElementById('modal-description').innerText
    = projectData[projectName].description;

  // 8.4 add button
  // 8.4.1 store button div and clear inner html
  const buttonDiv = document.getElementById('modal-button-div');
  buttonDiv.innerHTML = '';
  // 8.4.2 create link
  const link = document.createElement('a');
  link.setAttribute('href', projectData[projectName].link);
  link.setAttribute('target', '_blank');
  buttonDiv.appendChild(link);
  // 8.4.3 create link button
  const linkButton = document.createElement('button');
  linkButton.className = 'btn btn-primary body-copy';
  linkButton.setAttribute('type', 'button');
  linkButton.setAttribute('id', 'modal-button');
  linkButton.innerHTML = projectData[projectName].linkText;
  if (projectData[projectName].linkText === 'Coming Soon') {
    linkButton.setAttribute('disabled', true);
  }
  link.appendChild(linkButton);
});

