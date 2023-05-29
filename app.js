localStorage.clear();
function encriptar() {
    var toEncryptText = document.getElementById('to-encrypt-area').value;
    var encryptedText = toEncryptText
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    document.getElementById('encrypted-area').value = encryptedText;
    document.getElementById('encrypted-area').style.backgroundImage = 'none';
}

function desencriptar() {
    var toEncryptText = document.getElementById('to-encrypt-area').value;
    var decryptedText = toEncryptText
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    document.getElementById('encrypted-area').value = decryptedText;
    document.getElementById('encrypted-area').style.backgroundImage = 'none';
}

function copiar() {
    var textarea = document.getElementById('encrypted-area');
    textarea.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

encryptedArea = document.getElementById('encrypted-area');
if (encryptedArea.value.trim() === '') {
  encryptedArea.style.backgroundImage = 'url("mensajenoencontrado.png")';
}


encryptedArea.addEventListener('change', fVrms_r, true);
function fVrms_r(){
  if (encryptedArea.value.trim() != '') {
    encryptedArea.style.backgroundImage = 'none';
  } else {
    encryptedArea.style.backgroundImage = 'url("mensajenoencontrado.png")';
  }
}