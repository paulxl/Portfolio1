// the floating arrow that takes you to the top BEGIN
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
// the END of code for the floating arrow 
function addPercent(value){
    return value.toFixed(0)+"%";
}
(function renderChart1(){
    let ctx = document.getElementById("eCommerce1").getContext("2d");
    let eCommerce1 = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["4Q-99", "1Q-00", "2Q-00", "3Q-00", "4Q-00", "1Q-01", "2Q-01", "3Q-01", "4Q-01", "1Q-02", "2Q-02", "3Q-02", "4Q-02", "1Q-03", "2Q-03", "3Q-03","4Q-03", "1Q-04", "2Q-04", "3Q-04", "4Q-04", "1Q-05", "2Q-05", "3Q-05", "4Q-05", "1Q-06", "2Q-06", "3Q-06", "4Q-06", "1Q-07", "2Q-07", "3Q-07","4Q-07", "1Q-08", "2Q-08", "3Q-08", "4Q-08", "1Q-09", "2Q-09", "3Q-09", "4Q-09", "1Q-10", "2Q-10", "3Q-10", "4Q-10", "1Q-11", "2Q-11", "3Q-11","4Q-11", "1Q-12", "2Q-12", "3Q-12", "4Q-12", "1Q-13", "2Q-13", "3Q-13", "4Q-13", "1Q-14", "2Q-14", "3Q-14", "4Q-14", "1Q-15", "2Q-15", "3Q-15","4Q-15", "1Q-16", "2Q-16", "3Q-16", "4Q-16", "1Q-17", "2Q-17", "3Q-17", "4Q-17", "1Q-18", "2Q-18", "3Q-18", "4Q-18", "1Q-19", "2Q-19", "3Q-19", "4Q-19", "1Q-20" ],
            datasets: [{
                label: "E-commerce as a Percent of Total U.S. Retail Sales",
                data: [0.6, 0.8, 0.9, 1.0, 1.0, 1.1, 1.1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 3.0, 3.1, 3.2, 3.4, 3.5, 3.5, 3.6, 3.6, 3.6, 3.6, 3.8, 4.0, 4.1, 4.1, 4.2, 4.4, 4.6, 4.6, 4.7, 4.8, 4.9, 5.1, 5.2, 5.3, 5.4, 5.6, 5.6, 5.8, 5.9, 6.1, 6.3, 6.4, 6.6, 6.8, 7.0, 7.2, 7.4, 7.6, 7.9, 8.1, 8.3, 8.5, 8.7, 9.0, 9.1, 9.4, 9.6, 9.8, 9.9, 10.1, 10.5, 10.8, 11.1, 11.3, 11.8],
                borderColor: "#198c19",
                backgroundColor: "#a3d1a3",
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        begineAtZero: true, 
                        callback: function(value, index, values){
                            return addPercent(value);
                        },
                        suggestedMax: 13                     
                    }
                }],
                xAxes: [{
                    ticks: {
                        begineAtZero: true, 
                        maxRotation: 90,
                        minRotation:90
                    }
                }]
            }
        },
    });
})();
