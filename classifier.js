// récuperation par ID des éléments du DOM
const images = document.getElementById('image');
const probability = document.getElementById('probability');
const result = document.getElementById('result');
const classifier = ml5.imageClassifier('MobileNet', () => console.log('Model loaded!'));

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        images.src = event.target.result;
        classifier.predict(images, function(err, results) {
            //console.log(results[0])
            if (results && results.length > 0) {
                result.textContent = results[0].label;
                probability.textContent = results[0].confidence;
            } else {
                result.textContent = "Could not recognize image";
                probability.textContent = "";
            }
        });
    }
    reader.readAsDataURL(file);
});





