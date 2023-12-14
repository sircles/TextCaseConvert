document.getElementById('uppercaseButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('result').textContent = inputText.toUpperCase();
});

document.getElementById('lowercaseButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('result').textContent = inputText.toLowerCase();
});

document.getElementById('togglecaseButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    let toggledText = '';
    for (let i = 0; i < inputText.length; i++) {
        toggledText += i % 2 === 0 ? inputText[i].toUpperCase() : inputText[i].toLowerCase();
    }
    document.getElementById('result').textContent = toggledText;
});
