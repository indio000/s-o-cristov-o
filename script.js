// Captura o formulário e a mensagem
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita envio real

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if(nome && email && mensagem) {
        formMessage.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
        formMessage.style.color = 'green';
        form.reset();
    } else {
        formMessage.textContent = 'Por favor, preencha todos os campos.';
        formMessage.style.color = 'red';
    }
});
