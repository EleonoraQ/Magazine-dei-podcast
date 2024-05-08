const switcher = document.querySelector('.button');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('light-theme')
    document.body.classList.toggle('dark-theme')
    const className = document.body.className;
    if(className == 'light-theme'){
        this.textContent = 'Notte'
    }
    else{
        this.textContent = 'Giorno'
    }
})

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
