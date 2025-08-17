document.addEventListener('DOMContentLoaded', function() {
    // Função para carregar a imagem de perfil do GitHub
    loadProfileImage();
    
    // Função para carregar projetos do GitHub
    loadGitHubProjects();
    
    // Adicionar efeito de scroll suave para links de navegação
    setupSmoothScroll();
    
    // Adicionar animações de entrada aos elementos
    setupScrollAnimations();
    
    // Configurar alternância de tema
    setupThemeToggle();
});

// Função para carregar a imagem de perfil do GitHub
function loadProfileImage() {
    const profileImg = document.getElementById('profile-img');
    if (profileImg) {
        // Substituir com o username correto do GitHub
        const username = 'DaRkNeSs-ByTs';
        profileImg.src = `https://avatars.githubusercontent.com/${username}`;
        
        // Fallback caso a imagem não carregue
        profileImg.onerror = function() {
            this.src = 'https://via.placeholder.com/300x300?text=Edison+Travain';
        };
    }
}

// Função para carregar projetos do GitHub
function loadGitHubProjects() {
    const username = 'DaRkNeSs-ByTs';
    const projectsContainer = document.querySelector('.projects-grid');
    
    // Você pode substituir isso por uma chamada real à API do GitHub
    // quando tiver acesso a um token de API ou usar o GitHub Pages
    
    // Por enquanto, vamos adicionar alguns projetos de exemplo além do que já existe no HTML
    const exampleProjects = [
        {
            name: 'Projeto de Portfólio',
            description: 'Meu portfólio pessoal desenvolvido com HTML, CSS e JavaScript.',
            icon: 'fas fa-code',
            link: `https://github.com/${username}`,
            technologies: ['HTML', 'CSS', 'JavaScript']
        },
        {
            name: 'Aplicação Web',
            description: 'Aplicação web desenvolvida com tecnologias modernas para demonstrar habilidades de desenvolvimento front-end.',
            icon: 'fas fa-laptop-code',
            link: `https://github.com/${username}`,
            technologies: ['React', 'Node.js', 'CSS']
        }
    ];
    
    // Adicionar projetos de exemplo ao container
    exampleProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
    });
}

// Função para criar um card de projeto
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const header = document.createElement('div');
    header.className = 'project-header';
    
    const icon = document.createElement('i');
    icon.className = project.icon;
    
    const title = document.createElement('h3');
    title.textContent = project.name;
    
    header.appendChild(icon);
    header.appendChild(title);
    
    const description = document.createElement('p');
    description.textContent = project.description;
    
    const links = document.createElement('div');
    links.className = 'project-links';
    
    const link = document.createElement('a');
    link.href = project.link;
    link.target = '_blank';
    link.className = 'btn';
    link.textContent = 'Ver Projeto';
    
    links.appendChild(link);
    
    const tech = document.createElement('div');
    tech.className = 'project-tech';
    
    project.technologies.forEach(technology => {
        const span = document.createElement('span');
        span.textContent = technology;
        tech.appendChild(span);
    });
    
    card.appendChild(header);
    card.appendChild(description);
    card.appendChild(links);
    card.appendChild(tech);
    
    return card;
}

// Configurar scroll suave para links de navegação
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Configurar animações de entrada ao scroll
function setupScrollAnimations() {
    // Selecionar todos os elementos que queremos animar
    const elements = document.querySelectorAll('.section, .skill-category, .project-card, .education-item, .contact-item');
    
    // Função para verificar se um elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Função para adicionar classe de animação aos elementos visíveis
    function handleScrollAnimation() {
        elements.forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    }
    
    // Adicionar classe de animação aos elementos inicialmente visíveis
    handleScrollAnimation();
    
    // Adicionar evento de scroll para animar elementos quando ficarem visíveis
    window.addEventListener('scroll', handleScrollAnimation);
}

// Função para configurar alternância de tema
function setupThemeToggle() {
    const themeSwitch = document.getElementById('theme-switch');
    
    // Verificar se há uma preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeSwitch.checked = true;
    }
    
    // Alternar tema quando o switch for clicado
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Adicionar classe de animação ao CSS (você pode adicionar isso ao seu arquivo CSS)
document.head.insertAdjacentHTML('beforeend', `
<style>
    .section, .skill-category, .project-card, .education-item, .contact-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animated {
        opacity: 1;
        transform: translateY(0);
    }
</style>
`);