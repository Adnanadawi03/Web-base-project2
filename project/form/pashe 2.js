function validate() {
    var x = document.getElementById("h").value;
    var y = document.getElementById("w").value;
    const A4 = document.getElementById('A4').checked;
    const A3 = document.getElementById('A3').checked;
    const A2 = document.getElementById('A2').checked;
    const Delivary = document.getElementById('Delivary').checked;
    const Store = document.getElementById('Store').checked;


    if (x < 0) {
        document.getElementById("s1").textContent = 'please enter positve amount';
        return false;
    }
    if (y < 0) {
        document.getElementById("s2").textContent = 'please enter positve amount';
        return false;
    }

    if (!A4 && !A3 && !A2) {
        document.getElementById("s3").textContent = 'please choise one at least';
        return false;

    }
    if (!Delivary && !Store) {
        document.getElementById("s4").textContent = 'please choise one at least';
        return false;
    }




}
function gettheprice() {
    const price = (x / h * 2).toFixed(2);
    
    const TotalPrice = `Your Total price is ${price}`;
    const formData = `hight: ${document.getElementById('h').value}
    width: ${document.getElementById('w').value}
    pepar type: ${document.getElementsByName('Pepar Type').value}
    how to resive it: ${document.getElementsByName('Receive').value}
    BMI Result: ${resultText}`;}