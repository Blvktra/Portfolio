document.addEventListener('DOMContentLoaded', () => {
  const coreano = '웹 디자이너 포트폴리오';
  const espanol = 'Web Designer Portfolio';

  const titleTag = document.querySelector('title');
  const h1 = document.getElementById('animatedTitle');

  // Paso 1: animar letras coreanas con giro
  coreano.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.classList.add('letter');
    span.style.animationDelay = `${i * 0.5}s`;
    h1.appendChild(span);
  });

  // También actualizar el <title> como escritura
  let idx = 0;
  function animateTitleText() {
    if (idx < coreano.length) {
      titleTag.textContent += coreano[idx++];
      setTimeout(animateTitleText, 500);
    } else {
      setTimeout(() => {
        // Paso 2: cambiar a español con typing
        h1.textContent = '';
        titleTag.textContent = '';
        h1.classList.add('typing-cursor');
        animateTyping(0);
      }, 600);
    }
  }

  function animateTyping(i) {
    if (i < espanol.length) {
      titleTag.textContent += espanol[i];
      h1.textContent += espanol[i];
      setTimeout(() => animateTyping(i + 1), 100);
    } else {
      h1.classList.remove('typing-cursor');
    }
  }

  animateTitleText();
});
