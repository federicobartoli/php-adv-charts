<!DOCTYPE html>
<html lang="en" dir="ltr">
     <head>
          <meta charset="utf-8">
          <title>php-adv-charts</title>
          <link rel="stylesheet" href="dist/css/master.css">
          <script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
          <script src="dist/js/moment.js" charset="utf-8"></script>
          <script src="dist/js/Chart.min.js" charset="utf-8"></script>
     </head>
     <body>
          <div class="container-fluid">
               <div class="container">
                    <h1>MileStone 1</h1>
                    <canvas id="myChart"></canvas>
                    <h1>MileStone 2</h1>
                    <canvas id="myGraph-line-2"></canvas>
                    <canvas id="myGraph-pie"></canvas>
                    <?php include 'data3.php';
                    // foreach ($graphs as $key => $value) {
                    //      echo $value["access"];
                    // }
                    $accesso_inserito = $_GET['level'];

                     ?>
                    <h1>MileStone 3</h1>
                    <?php
                    if ($accesso_inserito == 'guest') {
                         echo '<canvas id="myGraph-line-3"></canvas>';
                    }
                     if ($accesso_inserito == 'employee') {
                         echo '<canvas id="myGraph-line-3"></canvas>
                          <canvas id="myGraph-line-4"></canvas>';
                    }
                    if ($accesso_inserito == 'clevel') {
                         echo '<canvas id="myGraph-line-3"></canvas>
                          <canvas id="myGraph-line-4"></canvas>
                          <canvas id="myGraph-line-5"></canvas>';
                    }else {
                         echo '<h2>Chiave sbagliata</h2>';
                    }  ?>






               </div>
          </div>




          <script src="dist/js/main.js" charset="utf-8"></script>
     </body>
</html>
