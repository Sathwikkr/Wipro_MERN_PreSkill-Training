document.addEventListener('DOMContentLoaded', function() {
    
    const calculateBtn = document.getElementById('calcBtn');

    calculateBtn.addEventListener('click', function() {
        
        const basicPay = parseFloat(document.getElementById('basicPay').value);
        const daysWorked = parseFloat(document.getElementById('daysWorked').value);
        const bonus = parseFloat(document.getElementById('bonus').value) || 0;

        if (isNaN(basicPay) || isNaN(daysWorked)) {
            alert("Please enter valid numbers for Basic Pay and Days Worked.");
            return;
        }

        const earnedBasic = (basicPay / 30) * daysWorked;

     
        const grossSalary = earnedBasic + bonus;

        const taxAmount = grossSalary * 0.15;

      
        const netSalary = grossSalary - taxAmount;

    
        document.getElementById('displayGross').innerText = "₹" + grossSalary.toFixed(2);
        document.getElementById('displayTax').innerText = "- ₹" + taxAmount.toFixed(2);
        document.getElementById('displayNet').innerText = "₹" + netSalary.toFixed(2);

        
        document.getElementById('result').classList.remove('hidden');
    });
});