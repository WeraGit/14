<?php

    ini_set('display_errors', 'On');
    error_reporting(E_ALL);

    $executionStartTime = microtime(true);
    
    // geonames api 
	$url1='http://api.geonames.org/countryInfoJSON?formatted=true&' . '&country=' . $_REQUEST['id'] ;

	$ch1 = curl_init();
	curl_setopt($ch1, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch1, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch1, CURLOPT_URL,$url1);

	$result1=curl_exec($ch1);
	curl_close($ch1);

	$decode1 = json_decode($result1,true);		
    
    // covid api        
    $covidUrl = 'https://api.covid19api.com/total/country/' . $_REQUEST['countrySlug'] . '?from=' . date('Y-m-d',strtotime("-1 days")) . '&to=' . date("Y-m-d");

    $ch4 = curl_init();

    curl_setopt($ch4, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch4, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch4, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch4, CURLOPT_URL, $covidUrl);

    $covidResult = curl_exec($ch4);
    curl_close($ch4);

    $decode4 = json_decode($covidResult,true);


    $output['status']['code'] = "200";
    $output['status']['name'] = "ok";
    $output['status']['description'] = "success";
    $output['status']['returnedIn'] = (microtime(true) - $executionStartTime) . " s";

    $output['data']['geonames'] = $decode1['geonames'][0];  
    $output['data']['covid'] = $decode4[0];

    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($output);

?>