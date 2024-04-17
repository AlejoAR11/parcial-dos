var fileInput = document.getElementById('fileInput');
var fileLabel = document.getElementById('fileLabel');
fileLabel.addEventListener('click', function() {
    fileInput.click(); // Disparar evento de clic en el campo de entrada de archivos
  });