function setValueToMaximumPoints() {
    document.getElementById('anzahl_richtig').value = document.getElementById('anzahl_antworten').value;
}
function clickAllInputs() {
    let inputs = Array();
    document.querySelectorAll('input').forEach(input => {
        if(input.value == "Überprüfen!") {
            inputs.push(input);
        }
    });
    for(let i = 0; i < inputs.length; i++) {
        input = inputs[i];
        if(input.value == "Überprüfen!") {
            input.disabled = false;
            if(i < inputs.length - 1) {
                input.click();
            }
            if(document.getElementById('anzahl_richtig').value > document.getElementById('anzahl_antworten').value) {
                setValueToMaximumPoints();
            }
        }
    }
}
setValueToMaximumPoints();
clickAllInputs();