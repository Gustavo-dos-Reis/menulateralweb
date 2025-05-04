const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const openBtn = document.querySelector('.open-btn');

function toggleSidebar() {
    sidebar.classList.add('collapsed');
    content.classList.add('collapsed');
}

function openSidebar() {
    sidebar.classList.remove('collapsed');
    content.classList.remove('collapsed');
}

if (window.innerWidth <= 600) {
    sidebar.classList.add('collapsed');
    content.classList.add('collapsed');
}

window.addEventListener('load', () => {
    if (window.innerWidth > 600) {
        sidebar.classList.remove('collapsed');
        content.classList.remove('collapsed');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 600 && !sidebar.classList.contains('collapsed')) {
        sidebar.classList.add('collapsed');
        content.classList.add('collapsed');
    } else if (window.innerWidth > 600 && sidebar.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
        content.classList.remove('collapsed');
    }
});