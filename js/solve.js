document.getElementById('anzahl_richtig').value = document.getElementById('anzahl_antworten').value;
let inputs = document.querySelectorAll('input');
for(let i = 0; i < inputs.length; i++) {
    input = inputs[i];
    if(input.value == "Überprüfen!") {
        input.disabled = false;
        input.click();
    }
}