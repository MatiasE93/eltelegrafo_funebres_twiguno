<?php
require "clases/aviso.php";
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
        $mensaje='';
        if (isset($_POST["name-lastname"])){
            $tipo_aviso=($_POST["ad-type"]);
            $simbolo=($_POST["rel"]);
            $full_nombre=($_POST["name-lastname"]);
            $apodo=($_POST["nickname"]);
            $fecha_f=($_POST["datepicker"]);
            $mensaje_init=($_POST["deudos"]);
            $participan=($_POST["parti"]);
            $mensaje_fin=($_POST["deu2"]);
            $sepelio=($_POST["sepel"]);
            $aviso=new Aviso();
            $idCode=$aviso->randomString();
            $respuesta=$aviso->setAviso($idCode,$tipo_aviso,$simbolo,$full_nombre,$apodo,$fecha_f,$mensaje_init,$participan,$mensaje_fin,$sepelio);
            if ($respuesta==true){
                $mensaje="Aviso enviado con exito, el codigo identificador es: ";
                $tpl = Template::getInstance();
                $tpl->mostrar('advise_send.html', array(
                        'url_base' => '/eltelegrafo_funebres_twiguno/',
                        'titulo' => 'Formulario fúnebre',
                        'mensaje' => $mensaje,
                        'identificador' => $idCode
                    ));
                exit;
            }else {
                $mensaje="Error al enviar aviso";
            }
        }

        $tpl = Template::getInstance();
        $tpl->mostrar('index_with_textarea.html', array(
                'url_base' => '/eltelegrafo_funebres_twiguno/',
                'titulo' => 'Formulario fúnebre',
                'mensaje' => $mensaje
            ));
    }
}
?>