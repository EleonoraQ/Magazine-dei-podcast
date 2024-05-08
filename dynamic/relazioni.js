const carousel = document.querySelector('.carousel');
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselWidth = carousel.offsetWidth;

    let currentIndex = 0;

    // Imposta larghezza della carousel-inner in base al numero di card
    carouselInner.style.width = `${carouselItems.length * (carouselWidth + 10)}px`;

    // Funzione per spostarsi alla prossima card
    function next() {
        if (currentIndex < carouselItems.length - 1) {
            currentIndex++;
            carouselInner.style.transform = `translateX(-${currentIndex * (carouselWidth + 10)}px)`;
        }
    }

    // Funzione per spostarsi alla card precedente
    function prev() {
        if (currentIndex > 0) {
            currentIndex--;
            carouselInner.style.transform = `translateX(-${currentIndex * (carouselWidth + 10)}px)`;
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        document.addEventListener('click', function(event) {
            const dropdown = event.target.closest('.dropdown-toggle');
            const dropdownMenu = dropdown.nextElementSibling;
    
            if (dropdown && dropdownMenu) {
                if (dropdownMenu.classList.contains('show')) {
                    dropdownMenu.classList.remove('show');
                } else {
                    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
                        if (menu !== dropdownMenu) {
                            menu.classList.remove('show');
                        }
                    });
    
                    dropdownMenu.classList.add('show');
                }
                event.stopPropagation();
            } else {
                document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
                    menu.classList.remove('show');
                });
            }
        });
    
        // Chiudi tutti i dropdown quando si fa clic al di fuori di essi
        window.addEventListener('click', function() {
            document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
                menu.classList.remove('show');
            });
        });
    });