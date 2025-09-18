// Chart One Start
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'March', 'April','May', 'June','July','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: '# of statistics',
            data: [ 40,60 , 80,100],
            backgroundColor: [
                '#FFAC41',
                
            ],
            borderColor: [
                '#eee',
            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        responsive:true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// Start Chart Toww
const ctx = document.getElementById('myChartTwo').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'March', 'April','May', 'June','July','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            
            label: '# of statistics',
            data: [20, 40,60 , 80,100],
            backgroundColor: [
                '#FFAC41',
                
            ],
            borderColor: [
                '#eee',
            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        responsive:true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// const ctx = document.getElementById('myChartThree').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: ['Jan', 'Feb', 'March', 'April','May', 'June','July','Aug','Sep','Oct','Nov','Dec'],
//         datasets: [{
//             label: '# of statistics',
//             data: [20, 40,60 , 80,100],
//             backgroundColor: [
//                 '#FFAC41',
                
//             ],
//             borderColor: [
//                 '#eee',
//             ],
//             borderWidth: 1
//         }
//     ]
//     },
//     options: {
//         responsive:true,
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });