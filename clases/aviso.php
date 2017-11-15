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


    public function setAviso($fecha_s,$idString,$tipo_aviso,$simbolo,$full_nombre,$apodo,$mensaje,$nombre_fact,$direccion_fact,$ciudad_fact,$departamento_fact,$codigo_postal,$email_fact,$telefono_fact,$celular_fact,$precio){
        $f_s = $fecha_s;
        $i = $idString;
        $t_a = $tipo_aviso;
        $si = $simbolo;
        $f_n = $full_nombre;
        $a = $apodo;
        $m = $mensaje;
        $n_f = $nombre_fact;
        $di_f = $direccion_fact;
        $ci_f = $ciudad_fact;
        $de_f = $departamento_fact;
        $c_p = $codigo_postal;
        $e_f = $email_fact;
        $t_f = $telefono_fact;
        $ce_f = $celular_fact;
        $pr = $precio; 

        $stmt = $this->getDB()->prepare("INSERT INTO Aviso (fecha_ingreso,id,tipo_aviso,simbolo,nombre_fallecido,apodo_fallecido,mensaje,nombre_fact,direccion_fact,ciudad_fact,departamento_fact,codigo_postal,email_fact,telefono_fact,celular_fact,precio) VALUES ('$f_s','$i','$t_a', '$si', '$f_n', '$a', '$m', '$n_f', '$di_f', '$ci_f', '$de_f', '$c_p', '$e_f', '$t_f', '$ce_f', '$pr')");
        $resultado = $stmt->execute();
        return $resultado;
    }

    public function borrar($id){
        $stmt = $this->getDB()->prepare("DELETE FROM Aviso WHERE id=$id");
        $stmt->execute();
        $resultado=false;
        if($this->getDB()->affected_rows>0){
            $resultado=true;
        }
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