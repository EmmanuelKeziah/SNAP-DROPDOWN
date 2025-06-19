const featuresToggle =  document.getElementById('features-toggle');
const featuresMenu = document.getElementById('features-menu');

featuresToggle.addEventListener('click', () => {
    featuresMenu.classList.toggle('show');
});
