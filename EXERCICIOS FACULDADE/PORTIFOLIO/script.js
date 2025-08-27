// Script para adicionar funcionalidades ao site

// Função para rolagem suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});

// Função para destacar o item do menu ativo durante a rolagem
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.menu a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Animação de entrada para os elementos quando entram na viewport
const animateOnScroll = function () {
  const elements = document.querySelectorAll('.skill-item, .servico-item, .projeto-item');

  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.classList.add('animate');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Menu mobile
const createMobileMenu = function () {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');

  // Criar botão de menu mobile
  const mobileMenuBtn = document.createElement('div');
  mobileMenuBtn.classList.add('mobile-menu-btn');
  mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(mobileMenuBtn);

  // Adicionar evento de clique ao botão
  mobileMenuBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
  });
};

// Verificar se é um dispositivo móvel
if (window.innerWidth <= 768) {
  createMobileMenu();
}

// Redimensionar a janela
window.addEventListener('resize', function () {
  if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
    createMobileMenu();
  }
});

// Formulário de contato
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Aqui você pode adicionar a lógica para enviar o formulário
    alert('Mensagem enviada com sucesso!');
    form.reset();
  });
}