(function (window, document) {

    // Expose as `Pure.trackDownload()`
    (window.Pure || (window.Pure = {})).trackDownload = trackDownload;

    var HAS_DOWNLOAD_ATTR = 'download' in document.createElement('a');

    function trackDownload(category, name) {
        var ga   = window.ga,
            link = this;

        // Quit early if Google Analytics isn't on the page.
        if (!ga) { return; }

        // Fire off the GA ping to track the download event.
        ga('send', 'event', category, 'download', name);

        // If the browser does not support the HTML5 `download` attribute give
        // the GA ping some time to complete before starting the download.
        if (!HAS_DOWNLOAD_ATTR) {
            setTimeout(function () {
                window.location.href = link.href;
            }, 100);

            // Prevent default.
            return false;
        }
    }

}(this, this.document));
