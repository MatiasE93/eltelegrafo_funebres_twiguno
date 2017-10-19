<?php

require_once('vendor/autoload.php');
 
class Template{
     
    private $_twig;
    private $_data = array();
    
    public static function getInstance()
    {
        static $instance = null;
        if (null === $instance) {
            $instance = new static();
        }
        

        return $instance;
    }
     /**
     * Protected constructor to prevent creating a new instance of the
     * *Singleton* via the `new` operator from outside of this class.
     */
    protected function __construct()
    {
        $loader = new Twig_Loader_Filesystem('templates');
        $this->_twig = new Twig_Environment($loader);
    }

    /**
     * Private clone method to prevent cloning of the instance of the
     * *Singleton* instance.
     *
     * @return void
     */
    private function __clone()
    {
    }

    /**
     * Private unserialize method to prevent unserializing of the *Singleton*
     * instance.
     *
     * @return void
     */
    private function __wakeup()
    {
    } 
   

    function mostrar($template, $data){
        $array = $this->_data;
        if ($data != ''){
            $array = $data;
            echo $this->_twig->render($template, $array);
        } else {
            $this->_twig->display($template);
        }
    }
}

?>