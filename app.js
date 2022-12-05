import getData from './getData.js';

async function ageChart() {
  let people = await getData();

  const ctx = document.getElementById('myChart').getContext('2d');
  let age = people.map(x => x.age);
  let weight = people.map(x => x.weight);
  let names = people.map(x => x.fullName);

  const chart = new Chart(ctx, {
    type: 'bar',
        data: {
        labels: names,
        datasets: [{
            label: 'age',
            backgroundColor: 'blue',
            borderColor: 'rgb(255, 99, 132)',
            data: age
        },
        {
          label: 'weight',
          backgroundColor: 'pink',
          borderColor: 'rgb(255, 99, 132)',
          data: weight,
          type: 'line',
      }
      ]
    },
  }
)}

ageChart();