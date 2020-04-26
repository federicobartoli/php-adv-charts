Esercizio che va ad estrapolare dei dati contenuti in un "server" creato in Php.
Ci sono varie Milestone:
1 : Si vuole creare un grafico a linea che mostri l’andamento mensile delle vendite, ogni numerofornito è il valore totale delle vendite per un mese, partendo da gennaio

2 : Si vogliono creare due grafici utilizzando i dati contenuti dentro al file ​data.php​. Questa voltail file contiene non solo i dati ma anche il tipo di grafico atteso.Il primo grafico è lo stesso del punto precedente mentre il secondo è un grafico a torta; perquesto grafico i dati forniti non sono solo i “valori” ma anche le “label”

3 : Questo file introduce due novità:
●Un nuovo grafico a linea che mostra l’andamento di efficienza dei 3 team mese permese, una linea per ogni team
●Un elemento access che definisce il livello minimo di chi può vedere quel grafico,con questo significato: i grafici con acess ​‘guest’​ possono essere visti da tutti, i graficicon access ​‘employee​’ possono essere visti da chi è ​employee​ e chi è ​clevel​, tutti igrafici con access ‘​clevel’ ​possono essere visti solo da chi è clevel. Il livello dell’utente che visita la pagina viene preso da querystring utilizzando
$_GET[‘level’](es: ​http://localhost/index.php?level=guest​)
