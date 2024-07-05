let correctAnswer;

function generateQuestion() {
    const multiplier = Math.floor(Math.random() * 8) + 2; // Tablas del 2 al 9
    const multiplicand = Math.floor(Math.random() * 9) + 1;
    correctAnswer = multiplier * multiplicand;

    document.getElementById('question').innerText = `¿Cuánto es ${multiplier} x ${multiplicand}?`;

    const choices = [];
    const correctPosition = Math.floor(Math.random() * 4);

    for (let i = 0; i < 4; i++) {
        if (i === correctPosition) {
            choices.push(correctAnswer);
        } else {
            let incorrectAnswer;
            do {
                incorrectAnswer = (Math.floor(Math.random() * 8) + 2) * (Math.floor(Math.random() * 9) + 1);
            } while (incorrectAnswer === correctAnswer || choices.includes(incorrectAnswer));
            choices.push(incorrectAnswer);
        }
    }

    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';

    choices.forEach(choice => {
        const button = document.createElement('button');
        button.classList.add('choice-btn');
        button.innerText = choice;
        button.onclick = () => checkAnswer(choice);
        choicesContainer.appendChild(button);
    });

    document.getElementById('result').innerText = '';
}

function checkAnswer(selectedAnswer) {
    const result = document.getElementById('result');
    if (selectedAnswer === correctAnswer) {
        result.innerText = '¡Correcto!';
        result.style.color = 'green';
    } else {
        result.innerText = `Incorrecto. La respuesta correcta es ${correctAnswer}.`;
        result.style.color = 'red';
    }
}

// Generate the first question on page load
generateQuestion();
