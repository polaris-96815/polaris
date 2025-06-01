const totalPieces = 9;
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let revealed = JSON.parse(localStorage.getItem('revealed') || '[]');

if (id && !revealed.includes(id)) {
  revealed.push(id);
  localStorage.setItem('revealed', JSON.stringify(revealed));
}

const grid = document.getElementById('imageGrid');

for (let i = 1; i <= totalPieces; i++) {
  const img = document.createElement('img');
  if (revealed.includes(i.toString())) {
    img.src = `part${i}.png`;
  } else {
    img.src = 'hidden.jpg';
  }
  grid.appendChild(img);
}