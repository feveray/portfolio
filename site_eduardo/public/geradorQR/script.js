const input = document.querySelector("input");
const qrcode = document.querySelector("#qrcode");
const generateBtn = document.querySelector('#generateBtn');

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    genQRCode();
  }
});

// gerar ao clicar no botão
if (generateBtn) {
  generateBtn.addEventListener('click', genQRCode);
}

function genQRCode() {
  if (!input.value) return;

    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
  }