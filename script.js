// Load Chart.js library (make sure you've included the Chart.js script in your project)
// Example: <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

document.addEventListener("DOMContentLoaded", function() {
  const investmentAmountInput = document.getElementById("investmentAmount");
  const durationInput = document.getElementById("duration");
  const interestRateInput = document.getElementById("interestRate");
  const monthlyInvestmentInput = document.getElementById("monthlyInvestment");
  const monthlyInvestmentValue = document.getElementById("monthlyInvestmentValue");
  const calculateButton = document.getElementById("calculateButton");

  monthlyInvestmentInput.addEventListener("input", function() {
    monthlyInvestmentValue.textContent = `$${monthlyInvestmentInput.value}`;
  });

  calculateButton.addEventListener("click", function() {
    const investmentAmount = parseFloat(investmentAmountInput.value);
    const duration = parseFloat(durationInput.value);
    const interestRate = parseFloat(interestRateInput.value) / 100;
    const monthlyInvestment = parseFloat(monthlyInvestmentInput.value);

    // Calculate SIP value using the formula (A = P * ((1 + r)^n - 1) / r):
    const n = duration * 12;
    const r = interestRate / 12;
    const sipValue = monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) + investmentAmount;

    // Render the pie chart using Chart.js
    renderPieChart(investmentAmount, sipValue);
  });

  function renderPieChart(initialInvestment, finalValue) {
    const chartContainer = document.getElementById("pieChart");

    new Chart(chartContainer, {
      type: "pie",
      data: {
        labels: ["Initial Investment", "SIP Investments"],
        datasets: [{
          data: [initialInvestment, finalValue - initialInvestment],
          backgroundColor: ["#36A2EB", "#FF6384"],
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
});
