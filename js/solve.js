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
            input.click();
            setValueToMaximumPoints();
        }
    }
}
let div = document.body.insertAdjacentElement('beforeEnd', document.createElement('div'));
div.classList.add('schulquiz_solver');
div.innerHTML = `
<p>Code injected by Schulquiz.info Solver</p>
<button id="run">Solve</button>
`;
document.getElementById("run").addEventListener('click', clickAllInputs);