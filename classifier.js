// récuperation par ID des éléments du DOM
const image = document.getElementById('image');
const probability = document.getElementById('probability');
const result = document.getElementById('result');
const classifier = ml5.imageClassifier('MobileNet', () => console.log('Model loaded!'));//chargement du modèle MobileNet


document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
    image.src = event.target.result;
    classifier.predict(image, function(err, results) {
        result.innerText = results[0].className;
        probability.innerText = results[0].probability.toFixed(4);
    });
    }
    reader.readAsDataURL(file);
});