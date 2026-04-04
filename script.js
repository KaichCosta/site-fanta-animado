gsap.registerPlugin(ScrollTrigger);

//Criação de uma timeline do GSAP com animações sincronizadas com o scroll
//Timeline da seção home/info
const tl = gsap.timeline({ //tl = timeline
    scrollTrigger: {
        trigger: ".info",
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, //depuração
    },
});

tl.to(
    '#fanta',
    {
        top: '120%', //move o elemento com id fanta para 120% do topo
        left: '0%'
    },
    'conjunto-animado1' //Nomeando esse trecho de animação como 'conjunto-animado1' para sincronização
);

tl.to(
    '#laranja-cortada',
    {
        top: '160%', //move o elemento com id 'laranja-cortada' para 160% do topo
        left: '23%' //move o elemento com id 'laranja-cortada' para 23% da esquerda
    },
    'conjunto-animado1' //Nomeando esse trecho de animação como 'conjunto-animado1' para sincronização
);

tl.to(
    '#laranja',
    {
        width: '15%', // reduz a largura do elemento com id 'laranja' para 15%
        top: '160%', //move o elemento com id 'laranja' para 160% do topo
        left: '10%' //move o elemento com id 'laranja' para 10% da esquerda
    },
    'conjunto-animado1' //Nomeando esse trecho de animação como 'conjunto-animado1' para sincronização
);

tl.to(
    '#folha',
    {
        top: '110%', //move o elemento com id 'folha' para 160% do topo
        left: '70%', //move o elemento com id 'folha' para 70% da esquerda
        rotate: '540deg' //rotaciona o elemento em 540 graus
    },
    'conjunto-animado1' //Nomeando esse trecho de animação como 'conjunto-animado1' para sincronização
);

tl.to(
    '#folha2',
    {
        top: '110%', //move o elemento com id 'folha2' para 160% do topo
        left: '0%',
        rotate: '540deg' //rotaciona o elemento em 540 graus
    },
    'conjunto-animado1' //Nomeando esse trecho de animação como 'conjunto-animado1' para sincronização
);

//Timeline da seção info/opcoes
const tl2 = gsap.timeline({ //tl = timeline
    scrollTrigger: {
        trigger: ".opcoes",
        start: '0% 95%',
        end: '20% 50%',
        scrub: true,
        markers: true, //depuração
    },
});

tl2.from(
    '#limao1',
    {
        top: '110%', //move o elemento com id 'limao1' para 110% do topo
        left: '-100%', //Inicia o elemento fora da tela, à esquerda (-100%)
        rotate: '-90deg' //rotaciona o elemento em -90 graus
    },
    'conjunto-animado2' //Nomeando esse trecho de animação como 'conjunto-animado2' para sincronização
);

tl2.from(
    '#cocacola',
    {
        top: '110%', //move o elemento com id 'cocacola' para 110% do topo
        left: '-100%', //Inicia o elemento fora da tela, à esquerda (-100%)
        rotate: '-90deg' //rotaciona o elemento em -90 graus
    },
    'conjunto-animado2' //Nomeando esse trecho de animação como 'conjunto-animado2' para sincronização
);

tl2.from(
    '#limao2',
    {
        top: '110%', //move o elemento com id 'limao2' para 110% do topo
        left: '100%', //Inicia o elemento fora da tela, à esquerda (100%)
        rotate: '90deg' //rotaciona o elemento em 90 graus
    },
    'conjunto-animado2' //Nomeando esse trecho de animação como 'conjunto-animado2' para sincronização
);

tl2.from(
    '#pepsi',
    {
        top: '110%', //move o elemento com id 'pepsi' para 110% do topo
        left: '100%', //Inicia o elemento fora da tela, à esquerda (100%)
        rotate: '90deg' //rotaciona o elemento em 90 graus
    },
    'conjunto-animado2' //Nomeando esse trecho de animação como 'conjunto-animado2' para sincronização
);

tl2.from(
    '#laranja-cortada',
    {
        top: '204%', //move o elemento com id 'laranja-cortada' para 204% do topo
        left: '42%', //move o elemento com id 'laranja-cortada' para 42% da esquerda
        width: '18%' //aumenta a largura do elemento com id 'laranja-cortada' para 18%
    },
    'conjunto-animado2' //Nomeando esse trecho de animação como 'conjunto-animado2' para sincronização
);

tl2.from(
    '#fanta',
    {
        top: '210%', //move o elemento com id 'laranja-cortada' para 204% do topo
        left: '42%', //move o elemento com id 'laranja-cortada' para 42% da esquerda
        width: '35%',
    },
    'conjunto-animado2' //Nomeando esse trecho de animação como 'conjunto-animado2' para sincronização
);