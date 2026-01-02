// Butona tıklandığında diğer açık menüleri kapat
        document.querySelectorAll('.citizen-dropdown-details').forEach(details => {
            details.addEventListener('toggle', function() {
                if (this.open) {
                    document.querySelectorAll('.citizen-dropdown-details').forEach(otherDetails => {
                        if (otherDetails !== this && otherDetails.open) {
                            otherDetails.open = false;
                        }
                    });
                }
            });
        });
        
        // Dışarı tıklandığında menüyü kapat
        document.addEventListener('click', function(event) {
            const drawer = document.querySelector('.citizen-drawer');
            if (!drawer.contains(event.target)) {
                const details = drawer.querySelector('.citizen-dropdown-details');
                if (details.open) {
                    details.open = false;
                }
            }
        });