let numArray = [0, 0, 0, 0, 0, 0]
let numRoll = 0

function rollDi(numRoll)
{
  numRoll = document.getElementById('numRolls').value
  for (i = 0; i < numRoll; i++)
  {
    let randNum = Math.floor(Math.random() * 6);
    numArray[randNum]++
		console.log(randNum,numArray[randNum] )
  }
  
  document.getElementById('arrayOne').innerHTML = numArray[0];
  document.getElementById('arrayTwo').innerHTML = numArray[1];
  document.getElementById('arrayThree').innerHTML = numArray[2];
  document.getElementById('arrayFour').innerHTML = numArray[3];
  document.getElementById('arrayFive').innerHTML = numArray[4];
  document.getElementById('arraySix').innerHTML = numArray[5];
  Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Number of times the Dice was Rolled'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'One',
            y: numArray[0],
            sliced: true,
            selected: true
        }, {
            name: 'Two',
            y: numArray[1]
        }, {
            name: 'Three',
            y: numArray[2]
        }, {
            name: 'Four',
            y: numArray[3]
        }, {
            name: 'Five',
            y: numArray[4]
        }, {
            name: 'Six',
            y: numArray[5]
        }]
    }]
});
}

