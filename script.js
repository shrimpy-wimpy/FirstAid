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
            
            // Disable all radio buttons after submission
            const radios = document.querySelectorAll(`input[name="${q}"]`);
            radios.forEach(radio => radio.disabled = true);

            // Highlight answers
            if (selected === correctInput) {
                selected.parentElement.classList.add('correct');
                score++;
            } else {
                if (selected) selected.parentElement.classList.add('incorrect');
                correctInput.parentElement.classList.add('correct'); // Show right answer
            }
        });
        
        // Toggle buttons
        document.querySelector('button[onclick="submitQuiz()"]').style.display = 'none';
        document.getElementById('reset-btn').style.display = 'inline-block';
    }
