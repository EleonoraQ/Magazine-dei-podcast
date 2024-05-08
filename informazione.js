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
        var dropdowns = document.querySelectorAll('.dropdown-toggle');
    
        dropdowns.forEach(function(dropdown) {
            dropdown.addEventListener('click', function(event) {
                var dropdownMenu = this.nextElementSibling;
    
                // Se il dropdown è già aperto, chiudilo
                if (dropdownMenu.classList.contains('show')) {
                    dropdownMenu.classList.remove('show');
                } else {
                    // Chiudi tutti gli altri dropdown aperti
                    dropdowns.forEach(function(otherDropdown) {
                        var otherDropdownMenu = otherDropdown.nextElementSibling;
                        if (otherDropdownMenu !== dropdownMenu) {
                            otherDropdownMenu.classList.remove('show');
                        }
                    });
    
                    // Apri il dropdown attuale
                    dropdownMenu.classList.add('show');
    
                    // Nascondi i sotto-testi degli altri dropdown
                    dropdowns.forEach(function(otherDropdown) {
                        var otherDropdownMenu = otherDropdown.nextElementSibling;
                        if (otherDropdownMenu !== dropdownMenu) {
                            otherDropdownMenu.querySelectorAll('li').forEach(function(subItem) {
                                subItem.classList.add('hidden');
                            });
                        }
                    });
    
                    // Mostra i sotto-testi del dropdown attuale
                    dropdownMenu.querySelectorAll('li').forEach(function(subItem) {
                        subItem.classList.remove('hidden');
                    });
                }
    
                // Impedisci la propagazione del click al di fuori del dropdown
                event.stopPropagation();
            });
        });
    
        // Chiudi tutti i dropdown quando si fa clic al di fuori di essi
        window.addEventListener('click', function() {
            dropdowns.forEach(function(dropdown) {
                dropdown.nextElementSibling.classList.remove('show');
            });
        });
    });