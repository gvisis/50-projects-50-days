const toggleButtons = document.querySelectorAll('.faq-toggle');

for (let button of toggleButtons){
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active');
    })
}