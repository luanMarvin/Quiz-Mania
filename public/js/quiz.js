document.getElementById('check-answers').addEventListener('click', function() {
    const form = document.getElementById('quiz-form');
    let score = 0;
    this.disabled = true;

    const questionsData = JSON.parse(document.getElementById('questions-data').textContent);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    questionsData.forEach((question, index) => {
        const userAnswer = form.elements['question-' + index].value;
        const correctAnswer = capitalizeFirstLetter(question.correctAnswer);

        if (capitalizeFirstLetter(userAnswer) === correctAnswer) {
            score++;
            document.querySelectorAll(`input[name='question-${index}']`).forEach(input => {
                if (capitalizeFirstLetter(input.value) === correctAnswer) {
                    input.parentNode.classList.add('correct');
                }
            });
        } else {
            document.querySelectorAll(`input[name='question-${index}']`).forEach(input => {
                if (capitalizeFirstLetter(input.value) === correctAnswer) {
                    input.parentNode.classList.add('correct');
                } else if (input.checked) {
                    input.parentNode.classList.add('wrong');
                }
            });
        }
    });

    document.getElementById('score').innerText = score + " / " + questionsData.length;
});
