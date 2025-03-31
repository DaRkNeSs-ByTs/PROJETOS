// Validação e Envio do Formulário
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = this.querySelector('input[name="nome"]').value;
  const email = this.querySelector('input[name="email"]').value;
  const pessoas = this.querySelector('input[name="pessoas"]').value;
  const data = this.querySelector('input[name="data"]').value;

  if (!nome || !email || !pessoas || !data) {
      alert('Por favor, preencha todos os campos!');
      return;
  }

  if (!email.includes('@') || !email.includes('.')) {
      alert('Por favor, insira um e-mail válido!');
      return;
  }

  alert(`Obrigado, ${nome}! Entraremos em contato em breve para sua viagem em ${data}.`);
  this.reset();
});

// Galeria Interativa - Clique para Ampliar
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
  img.addEventListener('click', function() {
      const fullScreen = document.createElement('div');
      fullScreen.style.position = 'fixed';
      fullScreen.style.top = '0';
      fullScreen.style.left = '0';
      fullScreen.style.width = '100%';
      fullScreen.style.height = '100%';
      fullScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
      fullScreen.style.display = 'flex';
      fullScreen.style.justifyContent = 'center';
      fullScreen.style.alignItems = 'center';
      fullScreen.style.zIndex = '1000';

      const largeImg = document.createElement('img');
      largeImg.src = this.src;
      largeImg.style.maxWidth = '90%';
      largeImg.style.maxHeight = '90%';
      largeImg.style.borderRadius = '8px';

      fullScreen.appendChild(largeImg);
      document.body.appendChild(fullScreen);

      fullScreen.addEventListener('click', () => {
          document.body.removeChild(fullScreen);
      });
  });
});

function startCountdown() {
  const countdownElement = document.createElement('div');
  countdownElement.id = 'countdown';
  document.querySelector('#home').appendChild(countdownElement);

  const updateCountdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
          clearInterval(updateCountdown);
          countdownElement.innerHTML = 'A temporada de verão começou!';
          return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `Faltam ${days}d ${hours}h ${minutes}m ${seconds}s para o verão!`;
  }, 1000);
}

window.onload = startCountdown;