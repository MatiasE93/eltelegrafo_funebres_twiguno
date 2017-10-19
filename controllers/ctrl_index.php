<?php
class IndexController{

    function loadControllers($controller){
        $controlador='ctrl_'.$controller;
        $controlador_clase=ucfirst($controller)."Controller";
        $strFileController='controllers/'.$controlador.'.php';
        if(!is_file($strFileController)){
            $strFileController='controllers/ctrl_index.php';  
            $controlador_clase="IndexController";
        }
        require_once $strFileController;

        $controllerObj=new $controlador_clase();
        return $controllerObj;
    }
    function loadAction($controllerObj,$action,$params){
        $accion=$action;
        $controllerObj->$accion($params);
    }
    function execAction($controllerObj,$action,$params){
        if(isset($action) && method_exists($controllerObj, 
            $action)){
            $this->loadAction($controllerObj, $action,$params);
        }else{
            $this->loadAction($controllerObj, "home",$params);
        }
    }
    public function redirect($controlador="index",$accion="home",$params=array()){
        //header("Location:index.php?controller=".$controlador."&action=".$accion);
        $url= '/eltelegrafo_funebres_twiguno/'.$controlador."/".$accion."/";
        foreach ($params as $key => $value) {
            $url.=$value."/";
        }
        header("Location:".$url);
    }

    public function getUrl($controlador="index",
        $accion="home",$params=array()){
        $url= '/eltelegrafo_funebres_twiguno/'.$controlador."/".$accion."/";
        foreach ($params as $key => $value) {
            $url.=$value."/";
        }
        return $url;
    }

    function home(){
        $tpl = Template::getInstance();
        $tpl->mostrar('index.html', array(
                'url_base' => '/eltelegrafo_funebres_twiguno/',
                'titulo' => 'Formulario fúnebre'
            ));
    }
}
?>