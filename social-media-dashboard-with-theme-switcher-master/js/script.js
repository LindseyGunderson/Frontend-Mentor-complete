const toggleBtn = document.querySelector('#toggle-btn');
let theme = toggleBtn.getAttribute('theme');

// load the default as dark theme
loadTheme('dark');

// load function to set the theme choice
function loadTheme(theme) {

    const root = document.querySelector(':root');

    root.setAttribute('color-scheme', `${theme}`);

}

// add event listener for click on toggle option
toggleBtn.addEventListener('click', () => {

    // determine which theme is currently set
    theme === 'dark' ? theme = 'light' : theme = 'dark';

    // set the theme
    loadTheme(theme);

});