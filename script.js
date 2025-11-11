fetch('data/text.txt')
  .then(response => response.text())   // ← místo .json() použiješ .text()
  .then(text => {
    console.log(text);                 // vypíše text do konzole
    document.getElementById('output').textContent = text;  // vypíše na stránku
  })
  .catch(err => console.error('Chyba při načítání:', err));