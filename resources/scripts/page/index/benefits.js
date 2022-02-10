document.addEventListener('DOMContentLoaded', function () {

  document.addEventListener('click', function (e) {
    const newBtn = e.target.closest('.benefits-tabs-head .tabs-button:not(.active)');

    if (!newBtn) return true;

    const oldBtn = document.querySelector('.benefits-tabs-head .tabs-button.active');
    const oldTab = document.querySelector(`.benefits-tabs-body-${oldBtn.dataset.tab}`);
    const newTab = document.querySelector(`.benefits-tabs-body-${newBtn.dataset.tab}`);

    oldBtn.classList.remove('active');
    oldTab.classList.add('hidden');

    newBtn.classList.add('active');
    newTab.classList.remove('hidden');
  });

});