// Sample data for demonstration purposes
const priceElement = document.getElementById('price');
const marketCapElement = document.getElementById('market-cap');

// Simulate fetching data
function fetchData() {
    // In a real application, you would fetch data from an API
    const price = (Math.random() * 100).toFixed(2); // Random price
    const marketCap = (Math.random() * 1000000).toFixed(2); // Random market cap

    priceElement.textContent = `$${price}`;
    marketCapElement.textContent = `$${marketCap}`;
}

// Call fetchData to simulate data fetching
fetchData();

// Chart.js setup (optional)
const ctx = document.getElementById('priceChart').getContext('2d');
const priceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Power-Coin Price',
            data: [12, 19, 3, 5, 2, 3, 7],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});