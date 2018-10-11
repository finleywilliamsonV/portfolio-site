// initialize modal?
const modal = $('#project-modal').modal({show: false});

// var for referencing image arrays
let modalImages;

// image object of all image arrays
const images = {
  loremImages: ['../img/LoremIpsum3x2.png'],
  todoImages: ['../img/ToDoList3x2.png'],
  kanbanImages: ['../img/placeholder3x2.png'],
  emojiImages: ['../img/EmojisInSpace3x2.png', '../img/EmojisInSpace3x2.png'],
  dungeonImages: ['../img/DungeonMasters3x2.png'],
};

// onclick
$('.overlay').click((e)=> {
  // 1. store target
  let target = e.target;
  let imageName;

  // 2. store which image was clicked
  if (target.classList.contains('overlay-text')) {
    imageName = target.parentNode.id.substring(8);
  } else if (target.classList.contains('project-image')) {
    imageName = target.id.substring(6);
  } else {
    imageName = target.id.substring(8);
  }
  console.log('image name:', imageName);

  // 3. show modal
  $('#project-modal').modal('show');

  // 4. set modal images to respective array
  modalImages = images[imageName + 'Images'];

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
});

