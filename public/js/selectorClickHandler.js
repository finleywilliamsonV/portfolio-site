const $selectors = document.querySelectorAll('.selector-btn');
console.log('selectors:', $selectors);

const projectData = {
  lorem: {
    tags: ['node'],
  },
  todo: {
    tags: ['node'],
  },
  kanban: {
    tags: ['node', 'react'],
  },
  emoji: {
    tags: ['as3'],
  },
  dungeon: {
    tags: ['as3'],
  },
};

$selectors.forEach((selector) => {
  selector.addEventListener('click', (e) => {
    const target = e.target;
    console.log('selector target:', target);
    const tag = target.id.substring(7);
    console.log('selector tag:', tag);

    if (target.classList.contains('active')) {
      target.classList.remove('active');
    } else {
      target.classList.add('active');
    }

    updateProjectDisplay();
  });
});

/**
 * Update which projects are showing
 */
function updateProjectDisplay() {
  console.log('\n\n ~ START UPDATE PROJECT DISPLAY ~ \n\n');

  // store selected buttons
  const $selectedButtons = document.querySelectorAll('.selector-btn.active');

  // loop over each project
  Object.keys(projectData).forEach( (key) => {

    // store column corresponding to project key
    $currentProjectColumn = document.getElementById('col-' + key);

    // var for determining display
    let shouldDisplay;

    // if no selected buttons, display by default
    $selectedButtons.length === 0 ?
      shouldDisplay = true
      : shouldDisplay = false;

    // loop over selected buttons
    $selectedButtons.forEach((selected) => {
      // store tag of current selected button
      const tag = selected.id.substring(7);

      // check project data for selected key
      if (projectData[key].tags.indexOf(tag) >= 0) {
        shouldDisplay = true;
      }
    });

    if (shouldDisplay) {
      $currentProjectColumn.style.display = 'block';
    } else {
      $currentProjectColumn.style.display = 'none';
    }
  });
}


