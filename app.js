const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    });
    // console.log(score);

    // show result on page

    scrollTo(0,0);
    result.classList.remove('d-none');

    // Animation with Interval
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);

});

// ===================================================
// window object is global object
// exp of window object:

// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// window.console.log(document.querySelector('form'));

// setTimeout( ()=> {
//     alert('hello setTimeout');
// }, 3000);


