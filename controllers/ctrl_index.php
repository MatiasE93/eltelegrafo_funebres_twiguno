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
        $url= URL_BASE.$controlador."/".$accion."/";
        foreach ($params as $key => $value) {
            $url.=$value."/";
        }
        header("Location:".$url);
    }

    public function getUrl($controlador="index",
        $accion="home",$params=array()){
        $url= URL_BASE.$controlador."/".$accion."/";
        foreach ($params as $key => $value) {
            $url.=$value."/";
        }
        return $url;
    }

    function home(){
        $mensaje1='';
        $mensaje2='';
        if (isset($_POST["name-lastname"])){
            $corr_t_aviso='0';
            $fecha_server=date("Y-m-d");
            $tipo_aviso=($_POST["ad-type"]);
            $simbolo=($_POST["rel"]);
            $full_nombre=($_POST["name-lastname"]);
            $apodo=($_POST["nickname"]);
            $fecha_f=($_POST["datepicker"]);
            $mensaje_init=($_POST["deudos"]);
            $participan=($_POST["parti"]);
            $mensaje_fin=($_POST["deu2"]);
            $sepelio=($_POST["sepel"]);
            $nombre_fact=($_POST["name-client"]);
            $apellido_fact=($_POST["lastname-client"]);
            $direccion_fact=($_POST["address"]);
            $numero_fact=($_POST["door-number"]);
            $ciudad_fact=($_POST["city"]);
            $departamento_fact=($_POST["departamento"]);
            $codigo_postal=($_POST["postal-code"]);
            $email_fact=($_POST["email"]);
            $telefono_fact=($_POST["phone"]);
            $celular_fact=($_POST["cellphone"]);
            $precio = '';
            if ($tipo_aviso == '400'){
                $corr_t_aviso = '1';
                $precio='600';
            }
            if ($tipo_aviso == '520'){
                $corr_t_aviso = '1';
                $precio='1500';
            }
            if ($tipo_aviso == '630'){
                $corr_t_aviso = '1';
                $precio='3500';
            }
            if ($corr_t_aviso == '1'){
                $aviso_completo=$mensaje_init.'el día '.$fecha_f.'. '.$participan.' '.$mensaje_fin.$sepelio.'.';
                $nombre_apellido_fact=$nombre_fact.' '.$apellido_fact;
                $direccion=$direccion_fact.' '.$numero_fact;
                $aviso=new Aviso();
                $idCode=$aviso->randomString();
                $respuesta=$aviso->setAviso($fecha_server,$idCode,$tipo_aviso,$simbolo,$full_nombre,$apodo,$aviso_completo,$nombre_apellido_fact,$direccion,$ciudad_fact,$departamento_fact,$codigo_postal,$email_fact,$telefono_fact,$celular_fact,$precio);
                if ($respuesta==true){
                    $mensaje1="Aviso enviado con exito, el codigo identificador es:  ";
                    $mensaje2="Anote el identificador para presentar a El Telégrafo en caso de problemas.";
                    $tpl = Template::getInstance();
                    $tpl->mostrar('advise_send.html', array(
                            'url_base' => URL_BASE,
                            'titulo' => 'Formulario fúnebre',
                            'mensaje1' => $mensaje1,
                            'mensaje2' => $mensaje2,
                            'identificador' => $idCode
                        ));
                    exit;
                }else {
                    $mensaje1='';
                    $mensaje2="Error al enviar aviso. Intente de nuevo más tarde.";
                    $idCode='';
                    $tpl = Template::getInstance();
                    $tpl->mostrar('advise_send.html', array(
                            'url_base' => URL_BASE,
                            'titulo' => 'Formulario fúnebre',
                            'mensaje1' => $mensaje1,
                            'mensaje2' => $mensaje2,
                            'identificador' => $idCode
                        ));
                    exit;
                }
            } else {
                $mensaje1='';
                $mensaje2="Error al enviar aviso. Datos corrompidos.";
                $idCode='';
                $tpl = Template::getInstance();
                $tpl->mostrar('advise_send.html', array(
                        'url_base' => URL_BASE,
                        'titulo' => 'Formulario fúnebre',
                        'mensaje1' => $mensaje1,
                        'mensaje2' => $mensaje2,
                        'identificador' => $idCode
                    ));
                exit;
            }
        }

        $tpl = Template::getInstance();
        $tpl->mostrar('index_with_textarea.html', array(
                'url_base' => URL_BASE,
                'titulo' => 'Formulario fúnebre'
            ));
    }
}
?>