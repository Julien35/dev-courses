<?php

class Personnage {

    public $vie = 80;
    public $atk = 20;
    protected $nom;


    public function __construct($nom) {
        $this->nom = $nom;
    }

    
    public function regenerer($vie = null) {

        if(is_null($vie)) {
            $this->vie = 100;
        } 
        else {
            $this->vie += $vie;
        }
    }

    public function getNom() {
        return $this->nom;
    }

}