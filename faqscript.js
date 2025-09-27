function toggleAnswer(index) {
    const answer = document.getElementById('answer' + index);
    const question = answer.previousElementSibling;

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        question.classList.remove('active');
    } else {
        answer.style.display = 'block';
        question.classList.add('active');
    }
}

function closeAnswer(event, index) {
    event.stopPropagation(); // Prevents toggle when clicking close button
    const answer = document.getElementById('answer' + index);
    const question = answer.previousElementSibling;

    answer.style.display = 'none';
    question.classList.remove('active');
}
