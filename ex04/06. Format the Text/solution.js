function solve() {

  let textArea = document.getElementById('input').value;

  let text = textArea.trim();

  if (text === '') {
    return;
  }

  let sentences = text.split('.')
  .filter(x => x.trim() !== '')
  .map(x => x.trim() + '.');

  if(sentences.length === 0) {
    return;
  }

  let paragraphCount = Math.ceil(sentences.length / 3);

  let resultDiv = document.getElementById('output');

  resultDiv.innerHTML = '';

  for (let i = 0; i < paragraphCount; i++) {
    let paragraph = sentences.splice(0, 3).join(' ');
    resultDiv.innerHTML += `<p>${paragraph}</p>`;
  }

}