let age = [], names = [], weight = []; 
 
async function ageChart() {
  await getData();

const ctx = document.getElementById('myChart').getContext('2d');

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
})}

ageChart()

async  function getData() {
  const response = await axios.get('https://dummyjson.com/users');
  const data = await response.data;
  console.log(data);

  age = data.users.map(x => x.age);
  names = data.users.map(x => x.firstName + x.lastName);
  weight = data.users.map(x => x.weight);
  
}