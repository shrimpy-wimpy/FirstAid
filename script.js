function submitQuiz() {
        const questions = ['q1', 'q2', 'q3'];
        let allAnswered = true;
        let score = 0;

        // Check if all questions have an answer selected
        questions.forEach(q => {
            const selected = document.querySelector(`input[name="${q}"]:checked`);
            if (!selected) {
                allAnswered = false;
            }
        });

        if (!allAnswered) {
            alert("Please answer all questions before submitting!");
            return;
        }

        // Evaluate each question
        questions.forEach(q => {
            const selected = document.querySelector(`input[name="${q}"]:checked`);
            const correctInput = document.querySelector(`input[name="${q}"][data-correct="true"]`);

            // Highlight answers
            if (selected === correctInput) {
                selected.parentElement.classList.add('correct');
                score++;
            }
        });
        
        if(score === questions.length) {
            alert("Congratulations!");
            document.querySelector('button[onclick="submitQuiz()"]').style.display = 'none';
            
            // Disable all radio buttons after submission
            const radios = document.querySelectorAll(`input[name="${q}"]`);
            radios.forEach(radio => radio.disabled = true);
        } else {
            alert("Try again!");
        }
        // Toggle buttons
        document.getElementById('reset-btn').style.display = 'inline-block';
    }
