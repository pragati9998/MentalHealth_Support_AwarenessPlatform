document.querySelectorAll('.dropdown').forEach(function (dropdown) {
            dropdown.addEventListener('mouseover', function () {
                this.querySelector('.dropdown-content').style.display = 'block';
            });
            dropdown.addEventListener('mouseout', function () {
                this.querySelector('.dropdown-content').style.display = 'none';
            });
        });