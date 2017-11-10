<?php
require "clases/clase_base.php";
class Aviso extends ClaseBase {
    public $id = '';
    public $tipo_aviso = '';
    public $simbolo = '';
    public $full_nombre = '';
    public $apodo = '';
    public $fecha_f = '';
    public $mensaje_init = '';
    public $participan = '';
    public $mensaje_fin = '';
    public $sepelio = '';

    //Contructor que recibe un array
    public function __construct($obj=NULL) {
        if(isset($obj)){
            foreach ($obj as $key => $value) {
                $this->$key=$value;
            }    
        }
        $tabla="Avisos";
        parent::__construct($tabla);

    }

    public function getId(){
        return $this->id;
    }

    public function getTipoAviso(){
        return $this->tipo_aviso;
    }

    public function getSimbolo(){
        return $this->simbolo;
    }

    public function getNombreCompleto(){
        return $this->full_nombre;
    }

    public function getApodo(){
        return $this->apodo;
    }

    public function getFechaF(){
        return $this->fecha_f;
    }

    public function getMensajeIn(){
        return $this->mensaje_init;
    }

    public function getParticipan(){
        return $this->participan;
    }

    public function getMensajeFin(){
        return $this->mensaje_fin;
    }

    public function getSepelio(){
        return $this->sepelio;
    }


    public function setAviso($idString,$tipo_aviso,$simbolo,$full_nombre,$apodo,$fecha_f,$mensaje_init,$participan,$mensaje_fin,$sepelio){
        $i = $idString;
        $t_a = $tipo_aviso;
        $si = $simbolo;
        $f_n = $full_nombre;
        $a = $apodo;
        $f_f = $fecha_f;
        $m_i = $mensaje_init;
        $p = $participan;
        $m_f = $mensaje_fin;
        $se = $sepelio; 

        $stmt = $this->getDB()->prepare("INSERT INTO Avisos (id,tipo_aviso,simbolo,full_nombre,apodo,fecha_f,mensaje_init,participan,mensaje_fin,sepelio) VALUES ('$i','$t_a', '$si', '$f_n', '$a', '$f_f', '$m_i', '$p', '$m_f', '$se')");
        $resultado = $stmt->execute();
        return $resultado;
    }

    public function randomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    } 

}

?>