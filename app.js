const text = document.querySelector('[data-animation-random]');

text.addEventListener('mouseover', animateText, { once: true });

function animateText(e) {
  let textValue = e.target.innerText;
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let count = 0;
  let animation = setInterval(() => {
    console.log(count);
    e.target.innerText = e.target.innerText
      .split('')
      .map((letter, index) => {
        if (index < count) return textValue[index];

        return letters[Math.floor(Math.random() * 26)];
      })
      .join('');
    if (count >= 9) clearInterval(animation);

    count += 1 / 3;
  }, 30);
}
