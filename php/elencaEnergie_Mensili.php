<?php

include("connetti.php");

$regione = '';

if(isset($_REQUEST['regione'])) {
	$regione = $_REQUEST['regione'];
}	


// collect request parameters
$start  = isset($_REQUEST['start'])  ? $_REQUEST['start']  :  0;
$limit  = isset($_REQUEST['limit'])  ? $_REQUEST['limit']  : 50;
$sort   = isset($_REQUEST['sort'])   ? json_decode($_REQUEST['sort'])   : null;
$filters = isset($_REQUEST['filter']) ? $_REQUEST['filter'] : null;

$sortProperty = $sort[0]->property; 
$sortDirection = $sort[0]->direction;

$filters = json_decode($filters);

$where = ' 0 = 0 ';
$qs = '';

// loop through filters sent by client
if (is_array($filters)) {
    for ($i=0;$i<count($filters);$i++){
        $filter = $filters[$i];

		$field = $filter->field;
		$value = $filter->value;
		$compare = isset($filter->comparison) ? $filter->comparison : null;
		$filterType = $filter->type;		

        switch($filterType){
            case 'string' : 
				$qs .= " AND ".$field." LIKE '%".$value."%'"; 
			break;

            case 'list' :
                if (strstr($value,',')){
                    $fi = explode(',',$value);
                    for ($q=0;$q<count($fi);$q++){
                        $fi[$q] = "'".$fi[$q]."'";
                    }
                    $value = implode(',',$fi);
                    $qs .= " AND ".$field." IN (".$value.")";
                } else {
                    $qs .= " AND ".$field." = '".$value."'";
                }
            break;		
			
            case 'boolean' : 
				$qs .= " AND ".$field." = ".($value); 
			break;
			
            case 'numeric' :
                switch ($compare) {
                    case 'eq' : $qs .= " AND ".$field." = ".$value; Break;
                    case 'lt' : $qs .= " AND ".$field." < ".$value; Break;
                    case 'gt' : $qs .= " AND ".$field." > ".$value; Break;
                }
            break;
			
            case 'date' :
                switch ($compare) {
                    case 'eq' : $qs .= " AND ".$field." = '".date('Y-m-d',strtotime($value))."'"; Break;
                    case 'lt' : $qs .= " AND ".$field." < '".date('Y-m-d',strtotime($value))."'"; Break;
                    case 'gt' : $qs .= " AND ".$field." > '".date('Y-m-d',strtotime($value))."'"; Break;
                }
            break;
        }
    }
    $where .= $qs;
}

	$queryString = "SELECT * FROM energia_mensile2_" . $regione . " WHERE ".$where;
	$queryString .= " ORDER BY anno, mese";//.$sortProperty." ".$sortDirection;
	$queryString .= " LIMIT ".$start.",".$limit;

	//print_r($queryString);
	
	//esegui la query sql
	$query = mysql_query($queryString) or die(mysql_error());
	
	//determina il numero di record restituiti dalla query
	$count = mysql_query("SELECT COUNT(*) FROM energia_mensile2_" . $regione . " WHERE ". $where );
	$total = mysql_fetch_array($count);
	$numrecords = $total[0];
	
	//il ciclo crea un array contenente i record estratti dal db
	$energie_mensili = array();
	while($consumo = mysql_fetch_assoc($query)) {
	    $energie_mensili[] = $consumo;
	}

	echo json_encode(Array(
		"success" => mysql_errno() == 0,
		"total"=>$numrecords,
		"energie_mesili" => $energie_mensili
	));
	
	$info = "-----------" . date('Y-m-d H:i:s', time()) . "-----------" .
	"\n queryString : " . $queryString .
	"\n total : " . $total .
	"\n count : " . $count . 
	"\n numrecords : " . $numrecords .
	"\n start : " . $start . 
	"\n limit : " . $limit . 
	"\n sortProperty : " . $sortProperty . 
	"\n sortDirection : " . $sortDirection . 
	"\n where : " . $where . 
	"\n qs : " . $qs . 	
	"\n regione : " . $regione . 	
	"\n\n";

	$log = fopen ('LOG-Energia.log', 'a') or die("can't open file");
	fwrite($log, $info );
	fclose($log);	
	
	//echo $_SESSION['selezione'];

?>