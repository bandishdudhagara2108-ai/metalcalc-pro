function calculateWeight() {

    let density = parseFloat(document.getElementById("material").value);

    let diameter = parseFloat(document.getElementById("diameter").value);

    let length = parseFloat(document.getElementById("length").value);

    if (isNaN(diameter) || isNaN(length)) {
        alert("Please enter Diameter and Length.");
        return;
    }

    // mm → cm
    diameter = diameter / 10;
    length = length / 10;

    // Weight in kg
    let weight = (Math.PI / 4) * diameter * diameter * length * density / 1000;

    document.getElementById("result").innerHTML =
        "Weight : " + weight.toFixed(3) + " kg";
}
