// Seleciona todos os elementos que possuem a classe .counter
const counters = document.querySelectorAll('.counter');

// Passa por cada um dos contadores encontrados
counters.forEach(counter => {
    // Começa o texto do HTML com zero
    counter.innerText = '0';

    const updateCounter = () => {
        // Pega o valor do atributo data-target e transforma em número (+ converte texto para número)
        const target = +counter.getAttribute('data-target');
        // Pega o número que está na tela atualmente
        const current = +counter.innerText;

        // Calcula a velocidade do incremento (quanto maior o divisor, mais lento e suave)
        const increment = target / 50;

        // Se o número atual for menor que o objetivo (target), soma o incremento
        if (current < target) {
            // Arredonda para cima para não quebrar em números decimais
            counter.innerText = `${Math.ceil(current + increment)}`;
            // Executa a função novamente após alguns milissegundos para dar o efeito de animação
            setTimeout(updateCounter, 20);
        } else {
            // Se já chegou no valor ou passou, garante que o número exato seja exibido
            // Adiciona o sinal de "+" ou "%" dependendo do que o número representa
            if (target === 5000) {
                counter.innerText = target + '+';
            } else if (target === 98) {
                counter.innerText = target + '%';
            } else if (target === 24) {
                counter.innerText = target + 'h';
            } else {
                counter.innerText = target;
            }
        }
    };

    // Inicia a animação para o contador atual
    updateCounter();
});