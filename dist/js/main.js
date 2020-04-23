$(document).ready(function () {

     var serverUno = 'server.php'
     var serverDue = 'server2.php'
     var ctx1 = '#myChart';
     var ctx2 = '#myGraph-line-2';
     var ctx3 = '#myGraph-pie';
     var mesiAnno = moment.months()
     ajaxCall(serverUno,mesiAnno, ctx1, 'line')
     ajaxCall(serverDue,mesiAnno, ctx2)
     ajaxCallPie(serverDue,ctx3)



     function ajaxCallPie(server,variabile) {
          $.ajax({
               url: server,
               method: 'GET',
               success: function (response) {
                    var dati = response;
                    var datiPie = [];
                    var labels = [];
                    console.log(dati['fatturato_by_agent'].type);
                    var typeChart = dati['fatturato_by_agent'].type
                    var dataBaseAgentiNumeri = dati['fatturato_by_agent'].data;
                    console.log(dataBaseAgentiNumeri);
                    for (var variable in dataBaseAgentiNumeri) {
                         console.log(variable);
                         labels.push(variable)
                         console.log(dataBaseAgentiNumeri[variable]);
                         datiPie.push(dataBaseAgentiNumeri[variable])
                    };



                    creaGrafico(datiPie, labels, variabile, typeChart)

               },
               error : function (error) {
                    console.log('ERRORE');
               }
          })
     }





     function ajaxCall(server,labels,variabile, typeChart) {
          $.ajax({
               url: server,
               method: 'GET',
               success: function (response) {
                    var dati = response;
                    if (dati['fatturato']) {
                         console.log(dati['fatturato'].type);
                         typeChart = dati['fatturato'].type
                         console.log(dati['fatturato'].data);
                         dati = dati['fatturato'].data
                    }

                    creaGrafico(dati, labels, variabile, typeChart)
               },
               error : function (error) {
                    console.log('ERRORE');
               }
          })
     }


     function creaGrafico(dataNumbers, labelsName, ctx, typeChart) {
          var ctx = $(ctx);
          var myChart = new Chart(ctx, {
         type: typeChart,
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
