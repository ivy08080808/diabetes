document.getElementById('riskCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var familyHistory = parseFloat(document.getElementById('familyHistory').value);
    var bmi = parseFloat(document.getElementById('bmi').value);
    var waistCircumference = parseFloat(document.getElementById('waistCircumference').value);
    var highSugarIntake = parseFloat(document.getElementById('highSugarIntake').value);
    var smoking = parseFloat(document.getElementById('smoking').value);

    var totalScore = (familyHistory * 0.2) + (bmi * 0.3) + (waistCircumference * 0.2) + (highSugarIntake * 0.1) + (smoking * 0.2);
    var riskCategory = "";

    if (totalScore >= 0.7) {
        riskCategory = "High Risk";
    } else if (totalScore >= 0.4) {
        riskCategory = "Moderate Risk";
    } else {
        riskCategory = "Low Risk";
    }

    document.getElementById('result').innerHTML = "Risk Category: " + riskCategory;
});
