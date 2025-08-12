// Navegación suave y efectos de scroll
document.addEventListener('DOMContentLoaded', function() {
    // Variables globales
    const header = document.querySelector('header');
    const navToggle = document.querySelector('.md\:hidden button');
    const navMenu = document.querySelector('.hidden.md\:flex');

    // Navegación suave
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }

            // Cerrar menú móvil si está abierto
            if (navMenu && navMenu.classList.contains('flex')) {
                navMenu.classList.remove('flex');
                navMenu.classList.add('hidden');
            }
        });
    });

    // Menú móvil toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            if (navMenu.classList.contains('hidden')) {
                navMenu.classList.remove('hidden');
                navMenu.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'p-4', 'space-y-2', 'border-t');
            } else {
                navMenu.classList.add('hidden');
                navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'p-4', 'space-y-2', 'border-t');
            }
        });
    }

    // Efecto de scroll en header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('bg-white/98', 'shadow-lg');
            header.classList.remove('bg-white/95');
        } else {
            header.classList.remove('bg-white/98', 'shadow-lg');
            header.classList.add('bg-white/95');
        }
    });
});