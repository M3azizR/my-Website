document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;
    const answers = {
        q1: 'c',
        q2: 'b',
        q3: 'b',
        q4: 'c',
        q5: 'a',
        q6: 'b',
        q7: 'a',
        q8: 'b',
        q9: 'b',
        q10: 'a'
    };

    let wrongAnswers = [];

    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        } else {
            wrongAnswers.push({
                question: question,
                correctAnswer: answers[question],
                userAnswer: selected ? selected.value : 'No answer'
            });
        }
    }

    let resultMessage = `Your score is ${score} out of 10.<br><br>`;
    if (wrongAnswers.length > 0) {
        resultMessage += "Incorrect Answers:<br>";
        wrongAnswers.forEach(wrong => {
            resultMessage += `Question ${wrong.question}: You answered "${wrong.userAnswer}", the correct answer is "${wrong.correctAnswer}".<br>`;
        });
    } else {
        resultMessage += "Congratulations! You answered all questions correctly.";
    }

    document.getElementById('results').innerHTML = resultMessage;
});
