  // Bubble Effect
  const bubbleContainer = document.querySelector('.bubbles');
  if (bubbleContainer) {
    for (let i = 0; i < 75; i++) {
      const span = document.createElement('span');
      const duration = Math.random() * 15 + 8;          // 8s – 23s
      const size = Math.floor(Math.random() * 40 + 10); // 10px – 50px
      span.style.setProperty('--i',     duration);
      span.style.setProperty('--x',     Math.random());
      span.style.setProperty('--size',  size + 'px');
      span.style.setProperty('--delay', -(Math.random() * duration)); // negative delay = already mid-animation
      bubbleContainer.appendChild(span);
    }
  }

  // Animated Words
  const animatedWords = document.querySelectorAll('.animated-word');
  if (animatedWords.length > 0) {
    let currentWordIndex = 0;

    function showNextWord(){
      animatedWords.forEach(w=>w.classList.remove('active'));
      animatedWords[currentWordIndex].classList.add('active');
      currentWordIndex = (currentWordIndex+1)%animatedWords.length;
      setTimeout(showNextWord,3000);
    }

    window.onload = showNextWord;
  }