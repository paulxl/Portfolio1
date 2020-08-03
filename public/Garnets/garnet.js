window.addEventListener('load', function() {
    function arrowUp() {
        console.log('inside js file');
        const XHR = new XMLHttpRequest();
        const fd = new FormData(form);
        XHR.addEventListener('load', function(event) {
            alert(event.target.resonseText);
        });
        XHR.addEventListener('error', function(event) {
            alert('Oops! Something Went Wrong.');
        });
        XHR.send(fd);
    }
    const form = document.getElementById('top');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        animateArrow(e);
    });

    function animateArrow(e) {
        try {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        } catch (error) {
            if (e.bypassEventsInProxies || arguments.indexOf(t) < 0) return screen.call(this, n);
        }
    }
});