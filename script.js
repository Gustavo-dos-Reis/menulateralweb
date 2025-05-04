document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const overlay = document.createElement('div');
    
    // Cria o overlay
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    // Função para abrir/fechar o menu
    function toggleMenu() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Apenas para telas maiores
        if (window.innerWidth >= 768) {
            mainContent.classList.toggle('shifted');
        }
    }
    
    // Event listeners
    menuToggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    // Fechar menu ao pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Ajustar layout quando a janela for redimensionada
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            sidebar.classList.add('active');
            overlay.classList.remove('active');
            mainContent.classList.add('shifted');
        } else {
            mainContent.classList.remove('shifted');
            
            // Se o menu estiver aberto em telas pequenas, mostra o overlay
            if (sidebar.classList.contains('active')) {
                overlay.classList.add('active');
            }
        }
    });
    
    // Inicializa o menu corretamente de acordo com o tamanho da tela
    if (window.innerWidth >= 768) {
        sidebar.classList.add('active');
        mainContent.classList.add('shifted');
    }
});