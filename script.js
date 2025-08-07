// Este evento garante que o script só será executado depois que todo o conteúdo HTML da página for carregado.
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona todos os links do menu de navegação.
    const navLinks = document.querySelectorAll('nav ul li a');

    // Seleciona todas as seções de conteúdo.
    const contentSections = document.querySelectorAll('main .conteudo');

    // Função para esconder todas as seções de conteúdo.
    function hideAllSections() {
        contentSections.forEach(function(section) {
            section.style.display = 'none'; // Define o estilo 'display' como 'none' para esconder o elemento.
        });
    }

    // Função para mostrar a seção correspondente ao link clicado.
    function showSection(sectionId) {
        // Oculta todas as seções antes de mostrar a nova.
        hideAllSections();
        
        // Seleciona a seção correta usando o ID e a torna visível.
        const section = document.querySelector(sectionId);
        if (section) {
            section.style.display = 'block'; // Define o estilo 'display' como 'block' para mostrar o elemento.
        }
    }

    // Garante que a primeira seção ("Sobre Mim") seja exibida ao carregar a página.
    // Ocultamos todas as seções e depois mostramos apenas a #sobre.
    hideAllSections();
    document.querySelector('#sobre').style.display = 'block';

    // Adiciona um "ouvinte" de clique para cada link do menu.
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Previne o comportamento padrão do link (que seria saltar para a âncora).
            event.preventDefault(); 
            
            // Pega o valor do atributo 'href' do link clicado (ex: "#sobre", "#formacao").
            const sectionId = link.getAttribute('href'); 
            
            // Chama a função para mostrar a seção correspondente.
            showSection(sectionId);
        });
    });
});