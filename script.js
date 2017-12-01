var background = document.getElementById('background');
var title = document.getElementById('title');
var sentences = [
  'Full Stack Web Developer at Founders and Coders',
  'Aiming to Make The World a Better Place through Technology'
];

var index = 0;

function toggleTitle() {
  title.textContent = sentences[index];
  background.classList.toggle('color-toggle');
  index++;
  if (index >= sentences.length) {
    index = 0;
  }
}

setInterval(toggleTitle, 3000);
