

// Get precise position for pins
document.querySelector(".map-container").addEventListener("click", (e) => {
    const map = e.currentTarget;
    const rect = map.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
    console.log(`Top: ${yPercent.toFixed(2)}%; Left: ${xPercent.toFixed(2)}%;`);
});

// YouTube Audience Graph
const ctxYouTube = document.getElementById('youtube-graph').getContext('2d');
new Chart(ctxYouTube, {
    type: 'bar',
    data: {
        labels: ['Subscribers'],
        datasets: [{
            label: 'Subscribers Count',
            data: [100000],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    }
});

// Instagram Engagement Graph
const ctxInstagram = document.getElementById('instagram-graph').getContext('2d');
new Chart(ctxInstagram, {
    type: 'pie',
    data: {
        labels: ['Engaged', 'Not Engaged'],
        datasets: [{
            label: 'Engagement Rate',
            data: [5, 95],
            backgroundColor: ['rgba(255, 159, 64, 0.5)', 'rgba(128, 128, 128, 0.5)'],
            borderColor: ['rgba(255, 159, 64, 1)', 'rgba(128, 128, 128, 1)'],
            borderWidth: 1
        }]
    }
});

// Demographic Graph (Age Distribution)
const ctxDemographics = document.getElementById('demographics-graph').getContext('2d');
new Chart(ctxDemographics, {
    type: 'doughnut',
    data: {
        labels: ['18-24', '25-34', '35-44', '45+'],
        datasets: [{
            label: 'Age Distribution',
            data: [40, 35, 15, 10], // Example data
            backgroundColor: ['rgba(255, 159, 64, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)'],
            borderColor: ['rgba(255, 159, 64, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 1
        }]
    }
});
