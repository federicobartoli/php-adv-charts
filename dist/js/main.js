$(document).ready(function () {

     var serverUno = 'server.php'
     var serverDue = 'server2.php'
     var serverTre = 'server3.php'
     var ctx1 = '#myChart';
     var ctx2 = '#myGraph-line-2';
     var ctx3 = '#myGraph-pie';
     var ctx4 = '#myGraph-line-3';
     var ctx5 = '#myGraph-line-4';
     var ctx6 = '#myGraph-line-5';
     var mesiAnno = moment.months()
     ajaxCall(serverUno,mesiAnno, ctx1, 'line')
     ajaxCall(serverDue,mesiAnno, ctx2)
     ajaxCallPie(serverDue,ctx3)
     ajaxCall(serverTre,mesiAnno,ctx4);
     ajaxCallMulti(serverTre,mesiAnno,ctx6);
     ajaxCallPie(serverTre,ctx5);



     function ajaxCallPie(server,variabile) {
          $.ajax({
               url: server,
               method: 'GET',
               success: function (response) {
                    var dati = response;
                    var datiPie = [];
                    var labels = [];

                    var typeChart = dati['fatturato_by_agent'].type
                    var dataBaseAgentiNumeri = dati['fatturato_by_agent'].data;

                    for (var variable in dataBaseAgentiNumeri) {

                         labels.push(variable)

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

                         typeChart = dati['fatturato'].type

                         dati = dati['fatturato'].data
                    }
                    creaGrafico(dati, labels, variabile, typeChart)
               },
               error : function (error) {
                    console.log('ERRORE');
               }
          })
     }

     function ajaxCallMulti(server,labels,variabile, typeChart) {
          $.ajax({
               url: server,
               method: 'GET',
               success: function (response) {
                    var dati = response;
                    if (dati['team_efficiency']) {

                         typeChart = dati['team_efficiency'].type

                         dati = dati['team_efficiency'].data;


                         for (var variable in dati) {
                              // console.log(variable); //Team 1 - 2 - 3
                              // console.log(dati[variable]);

                              if (variabile['Team1'] == undefined) {
                                   team1 = dati['Team1']
                              }
                              if (variabile['Team2'] == undefined) {
                                   team2 = dati['Team2']
                              }
                              if (variabile['Team3'] == undefined) {
                                   team3 = dati['Team3']
                              }

                              // console.log(team1);
                              // console.log(team2);
                              // console.log(team3);

                         }

                    }
                    creaGrafico2(team1,team2,team3, labels, variabile, typeChart)
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

     function creaGrafico2(dataNumbers1,dataNumbers2,dataNumbers3, labelsName, ctx, typeChart) {
          var ctx = $(ctx);
          var myChart = new Chart(ctx, {
         type: typeChart,
         data: {
             labels: labelsName,
             datasets: [{
                 label: 'Team1',
                 data: dataNumbers1,
                 backgroundColor: [
                     'rgba(255, 99, 132, 0.5)',
                     'rgba(54, 162, 235, 0.2)',
                     'rgba(255, 206, 86, 0.2)',
                     'rgba(75, 192, 192, 0.2)',

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
            } ,{
                 label: 'Team2',
                 data: dataNumbers2,
                 backgroundColor: [
                      'rgba(153, 102, 255, 0.5)',
                     'rgba(75, 192, 192, 0.2)',
                     'rgba(153, 102, 255, 0.2)',

                 ],
                 borderColor: [

                     'rgba(255, 206, 86, 1)',
                     'rgba(75, 192, 192, 1)',
                     'rgba(153, 102, 255, 1)',
                     'rgba(255, 159, 64, 1)'
                 ],
                 borderWidth: 1
            },{
                  label: 'Team3',
                  data: dataNumbers3,
                  backgroundColor: [
'rgba(255, 206, 86, 0.5)',
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
