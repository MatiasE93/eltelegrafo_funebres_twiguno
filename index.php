<?php
ini_set("display_errors", 1);
error_reporting(E_ALL & ~E_NOTICE);

require "db/db.php";
require 'vendor/autoload.php';
require "controllers/ctrl_index.php";
require_once('clases/Singleton.php');
require_once('clases/template.php');
require_once('vendor/autoload.php');
$controlIndex=new IndexController();

//$tpl = Template::getInstance();

if(isset($_GET['url'])){
    $query = $_GET['url'];
    $request = explode('/', $query);
    $controller = (!empty($request[0])) ? $request[0] : 'index';
    $action = (!empty($request[1])) ? $request[1] : 'home';
    $params=array();
    for ($i=2; $i <count($request) ; $i++) { 
        $params[]=$request[$i];
    }
}else{
    $controller="index";
    $action="home";
    $params=array();
}

$controllerObj=$controlIndex->loadControllers($controller);
$controlIndex->execAction($controllerObj,$action,$params);

?>