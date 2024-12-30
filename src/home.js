export const makeDefaultDom = (() => {
    const defaultContainer = document.createElement('div');
    defaultContainer.classList.add('default-container');

    const defaultTitle = document.createElement('h1');
    defaultTitle.classList.add('default-title');
    defaultTitle.textContent = "Default Project"

})();