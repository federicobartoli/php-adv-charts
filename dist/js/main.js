$(document).ready(function () {

     $.ajax({
          url: 'server.php',
          method: 'GET',
          success: function (response) {
               var dati = response;
               console.log(dati);
               creaGrafico(dati, moment.months())
          },
          error : function (error) {
               console.log('ERRORE');
          }
     })


     function creaGrafico(dataNumbers, labelsName) {
          var ctx = $('#myChart');
          var myChart = new Chart(ctx, {
         type: 'line',
         data: {
             labels: labelsName,
             datasets: [{
                 label: '# di vendite',
                 data: dataNumbers,
                 backgroundColor: [
                     'rgba(255, 99, 132, 0.2)',
                     'rgba(54, 162, 235, 0.2)',
                     'rgba(255, 206, 86, 0.2)',
                     'rgba(75, 192, 192, 0.2)',
                     'rgba(153, 102, 255, 0.2)',
                     'rgba(255, 159, 64, 0.2)'
                 ],
                 borderColor: [
                     'rgba(255, 99, 132, 1)',
                     'rgba(54, 162, 235, 1)',
                     'rgba(255, 206, 86, 1)',
                     'rgba(75, 192, 192, 1)',
                     'rgba(153, 102, 255, 1)',
                     'rgba(255, 159, 64, 1)'
                 ],
                 borderWidth: 1
             }]
         },
         options: {
             scales: {
                 yAxes: [{
                     ticks: {
                         beginAtZero: true
                     }
                 }]
             }
         }
     });
     }

});
