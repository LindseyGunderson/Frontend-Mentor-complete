const   openMenu = document.querySelector('#openMenu'),
        closeMenu = document.querySelector('#closeMenu'),
        mobileNavContainer = document.querySelector('.mobile__sidebar-container');

    function toggleMenu() {

        mobileNavContainer.classList.toggle('active');

    }

    openMenu.addEventListener('click', toggleMenu);

    closeMenu.addEventListener('click', toggleMenu);