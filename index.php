<?php
/*
require 'vendor/autoload.php';

$loader = new Twig_Loader_Filesystem('templates');
$twig = new Twig_Environment($loader);

$md5filter = new Twig_SimpleFilter('md5', function($string){
    
    return md5($string);
});

$twig->addFilter($md5filter);

$lexer = new Twig_Lexer($twig, array(
        'tag_block' => array('{', '}'),
        'tag_variable' => array('{{', '}}')
    ));

$twig->setLexer($lexer);

$twig->display('index.html');

$twig->render('index.html', array(
        'name' => 'Matias',
        'age' => 24,

        'users' => array(
            array('name' => 'Federico', 'age' => 12),
            array('name' => 'Enzo', 'age' => 28),
            array('name' => 'Sebastian', 'age' => 14)
        )
    ));*/

ini_set("display_errors", 1);
error_reporting(E_ALL & ~E_NOTICE);

require "db/db.php";
require 'vendor/autoload.php';
require "controllers/ctrl_index.php";
require_once('classes/Singleton.php');
require_once('classes/template.php');
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