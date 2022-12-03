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
            backgroundColor: 'rgb(46,68,130)',
            borderColor: 'rgb(46,68,130)',
            data: age
        },
        {
          label: 'weight',
          backgroundColor: 'rgb(190,169,222)',
          borderColor: 'rgb(190,169,222)',
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
