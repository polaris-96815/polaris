const urlParams = new URLSearchParams(window.location.search);
const pieceId = urlParams.get("id");
let checkedPieces = JSON.parse(localStorage.getItem("checkedPieces") || "[]");

if (pieceId && !checkedPieces.includes(pieceId)) {
  checkedPieces.push(pieceId);
  localStorage.setItem("checkedPieces", JSON.stringify(checkedPieces));
}

const puzzleContainer = document.getElementById("puzzle");
checkedPieces.sort().forEach(id => {
  const img = document.createElement("img");
  img.src = `piece${id}.webp`;
  puzzleContainer.appendChild(img);
});

if (checkedPieces.length === 9) {
  setTimeout(() => {
    window.location.href = "https://example.com";
  }, 1500);
}

function playVoice() {
  const pieceId = new URLSearchParams(window.location.search).get("id");
  const audio = new Audio(`voice${pieceId}.mp3`);
  audio.play().catch(e => {
    alert("음성을 재생할 수 없습니다. 브라우저가 차단했을 수 있어요.");
    console.error(e);
  });
}
