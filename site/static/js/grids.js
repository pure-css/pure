(function (window, document) {

    var unitsToggle     = document.querySelector('.grids-show-all'),
        notReducedUnits = document.querySelectorAll('.grids-unit-not-reduced');

    unitsToggle.onclick = function (e) {
        [].slice.call(notReducedUnits).forEach(function (unit) {
            if (e.target.checked) {
                unit.removeAttribute('hidden');
            } else {
                unit.setAttribute('hidden');
            }
        });
    };

}(this, this.document));
