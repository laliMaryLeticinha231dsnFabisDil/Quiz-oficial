const alternativas = document.querySelectorAll('.alternativa, .alternativaCorreta');
const localMensagem = document.getElementById('localMensagem');

alternativas.forEach((alternativa) => {
    alternativa.addEventListener('click', function() {
        alternativas.forEach((alt) => {
            alt.classList.remove('vermelho', 'verde');
        });

        if (this.classList.contains('alternativaCorreta')) {
            this.classList.add('verde'); // Adicione a classe 'verde' à alternativaCorreta
            localMensagem.innerHTML = 'Resposta correta!';
        } else {
            this.classList.add('vermelho'); // Adicione a classe 'vermelho' à alternativa
            localMensagem.innerHTML = 'Resposta incorreta. Tente novamente.';
        }
    });
});
