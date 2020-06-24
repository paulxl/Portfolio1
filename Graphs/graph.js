console.warn('got to JS');

window.addEventListener('load', function() {
    function randomGraph() {
        console.log('inside js file');
        const XHR = new XMLHttpRequest();
        const fd = new FormData(form);
        XHR.addEventListener('load', function(event) {
            alert(event.target.resonseText);
            alert('Oops! Something Went Wrong.');
        });
        XHR.send(fd);
    }
    const form = document.getElementById('getRandomNum');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        getRandom();
    });
    const form2 = document.getElementById('getRandomNumBottom');
    form2.addEventListener('submit', function(event) {
        event.preventDefault();
        getRandom();
    });
});
let randomDigits = [];

function getRandom() {
    let c1 = 0,
        c2 = 0,
        c3 = 0,
        c4 = 0,
        c5 = 0,
        c6 = 0,
        c7 = 0,
        c8 = 0,
        c9 = 0,
        c10 = 0;

    randomDigits.length = 0;

    let numLength = 100;
    for (let i = 0; i < numLength; i++) {
        randomDigits.push(Math.floor(Math.random() * 10) + 1);

        if (randomDigits[i] == 1) {
            c1++;
        } else if (randomDigits[i] == 2) {
            c2++;
        } else if (randomDigits[i] == 3) {
            c3++;
        } else if (randomDigits[i] == 4) {
            c4++;
        } else if (randomDigits[i] == 5) {
            c5++;
        } else if (randomDigits[i] == 6) {
            c6++;
        } else if (randomDigits[i] == 7) {
            c7++;
        } else if (randomDigits[i] == 8) {
            c8++;
        } else if (randomDigits[i] == 9) {
            c9++;
        } else if (randomDigits[i] == 10) {
            c10++;
        }
    }
    graphThem();

    function lineChart() {
        let ctx = document.getElementById("canvas1").getContext("2d");
        let chart1 = new Chart(ctx, {
            type: "line",
            data: {
                labels: ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                ],
                datasets: [{
                    label: '100 Random Digit Calls',
                    data: randomDigits,
                    borderColor: 'rgba(75,192,1,1)',
                    backgroundColor: 'rgba(75,192,1,0.2)',
                    showLines: true,
                }],
            },
            options: {
                title: {
                    display: true,
                    text: '100 Random Numbers Generated',
                    position: 'bottom'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            max: 12,
                        }
                    }],
                },
            },
        });
    }

    function barChart() {
        let ctx = document.getElementById("canvas2").getContext("2d");
        let chart2 = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
                ],
                datasets: [{
                    label: '100 Random Digit Calls',
                    data: randomDigits,
                    backgroundColor: 'rgba(0,0,51,1)',
                    showLines: true,
                }],
            },
            options: {
                title: {
                    display: true,
                    text: '100 Random Numbers Generated',
                    position: 'bottom'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            max: 12,
                        }
                    }]
                }
            },
        });
    }

    function polarChart() {
        let ctx = document.getElementById("canvas3").getContext("2d");
        let chart3 = new Chart(ctx, {
            type: "polarArea",
            data: {
                labels: ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes', 'sevens', 'eights', 'nines', 'tens'],
                datasets: [{
                    label: '100 Random Digit Calls',
                    data: [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10],
                    backgroundColor: [
                        'rgba(0,204,255,0.5)',
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                        'rgba(51,153,51,1)',
                        'rgba(204,255,51,1)',
                        'rgba(255,102,255,0.5)',
                    ],
                    // backgroundColor: 'rgba(0,204,255,0.2)',
                    borderWidth: 1,
                }],
            },
            options: {
                title: {
                    display: true,
                    text: '100 Random Numbers Generated',
                    position: 'bottom'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            display: false,
                        }
                    }]
                }
            },
        });
    }

    function graphThem() {
        lineChart();
        barChart();
        polarChart();
    }
}