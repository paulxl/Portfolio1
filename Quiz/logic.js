/* dealing with the questions and results of quiz  */
/* answers to q's are as follows: 1|c   2|a    3|b   4|d   5|a    6|b    7|e    8|a    9|b   10|e    */

const radioArr = ['1a', '1b', '1c', '1d', '1e',
    '2a', '2b', '2c', '2d', '2e',
    '3a', '3b', '3c', '3d', '3e',
    '4a', '4b', '4c', '4d', '4e',
    '5a', '5b', '5c', '5d',
    '6a', '6b', '6c', '6d', '6e',
    '7a', '7b', '7c', '7d', '7e',
    '8a', '8b', '8c', '8d', '8e',
    '9a', '9b', '9c', '9d', '9e',
    '10a', '10b', '10c', '10d', '10e'
];
/* this resets the radio buttons aka clears them  */
let btn2 = document.getElementById('resetRadio');
btn2.addEventListener('click', () => {
    radioArr.forEach(function(id) {
        document.getElementById(id).checked = false;
    });
    return false;
});

let score = 0;

let btn1 = document.getElementById('getResults');
btn1.addEventListener('click', () => {

    let one = document.getElementsByName('answer1');
    one.forEach((answer1) => {
        if (answer1.checked) {
            if (answer1.value === '1c') {
                score++;
            }
        }
    });
    let two = document.getElementsByName('answer2');
    two.forEach((answer2) => {
        if (answer2.checked) {
            if (answer2.value === '2a') {
                score++;
            }
        }
    });
    let three = document.getElementsByName('answer3');
    three.forEach((answer3) => {
        if (answer3.checked) {
            if (answer3.value === '3b') {
                score++;
            }
        }
    });
    let four = document.getElementsByName('answer4');
    four.forEach((answer4) => {
        if (answer4.checked) {
            if (answer4.value === '4d') {
                score++;
            }
        }
    });
    let five = document.getElementsByName('answer5');
    five.forEach((answer5) => {
        if (answer5.checked) {
            if (answer5.value === '5a') {
                score++;
            }
        }
    });
    let six = document.getElementsByName('answer6');
    six.forEach((answer6) => {
        if (answer6.checked) {
            if (answer6.value === '6b') {
                score++;
            }
        }
    });
    let seven = document.getElementsByName('answer7');
    seven.forEach((answer7) => {
        if (answer7.checked) {
            if (answer7.value === '7e') {
                score++;
                console.log(score + ' seven');
            }
        }
    });
    let eight = document.getElementsByName('answer8');
    eight.forEach((answer8) => {
        if (answer8.checked) {
            if (answer8.value === '8a') {
                score++;
            }
        }
    });
    let nine = document.getElementsByName('answer9');
    nine.forEach((answer9) => {
        if (answer9.checked) {
            if (answer9.value === '9b') {
                score++;
            }
        }
    });
    let ten = document.getElementsByName('answer10');
    ten.forEach((answer10) => {
        if (answer10.checked) {
            if (answer10.value === '10e') {
                score++;
            }
        }
    });
    let wrong = (10 - score);
    document.getElementById('score').innerHTML = `You got ${score} out of 10 correct.`;
    renderChart(score, wrong);
});
/* produces a pie chart of results    */
function renderChart(score, wrong) {
    let cData = [score, wrong];

    let ctx = document.getElementById("chart").getContext("2d");

    let chartG = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Correct', 'Missed'],
            datasets: [{
                data: cData,
                borderColor: ["rgba(75, 192, 192, 1)", "rgba(192, 0, 0, 1)"],
                backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(192, 0, 0, 0.2)"],
            }]
        },

    });
}