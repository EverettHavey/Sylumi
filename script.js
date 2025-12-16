document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const userActions = document.querySelector('.user-actions');

    menuToggle.addEventListener('click', function() {
        // Toggle the visibility of the navigation links and user action buttons
        const isVisible = navLinks.style.display === 'flex';
        navLinks.style.display = isVisible ? 'none' : 'flex';
        userActions.style.display = isVisible ? 'none' : 'flex';

        // Add CSS for mobile display
        if (!isVisible) {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '60px'; /* Adjust based on header height */
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.padding = '10px 0';
            navLinks.style.boxShadow = '0 4px 8px rgba(0,0,0,0.05)';

            userActions.style.flexDirection = 'column';
            userActions.style.position = 'absolute';
            userActions.style.top = `${60 + (navLinks.children.length * 40)}px`; /* Below nav links */
            userActions.style.left = '0';
            userActions.style.width = '100%';
            userActions.style.backgroundColor = 'white';
            userActions.style.padding = '10px 0';

            // Center all links/buttons when mobile menu is open
            Array.from(navLinks.children).forEach(link => {
                link.style.margin = '10px 0';
                link.style.textAlign = 'center';
            });
            Array.from(userActions.children).forEach(btn => {
                btn.style.margin = '5px auto';
                btn.style.width = '80%';
            });

        } else {
            // Reset to default on close or larger screen
             navLinks.style.cssText = '';
             userActions.style.cssText = '';
        }
    });

    // Simple check to hide menu on resize back to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.style.cssText = '';
            userActions.style.cssText = '';
        }
    });
});