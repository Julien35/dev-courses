<?php

require_once 'CompteBancaire.php';

class CompteEpargne extends CompteBancaire
{
    private $tauxInteret;

    public function __construct($devise, $solde, $titulaire, $tauxInteret)
    {
        parent::__construct($devise, $solde, $titulaire);
        $this->tauxInteret = $tauxInteret;
    }

    public function getTauxInteret()
    {
        return $this->tauxInteret;
    }

    public function calculerInterets($ajouterAuSolde = false)
    {
        $interets = $this->getSolde() * $this->tauxInteret;
        if ($ajouterAuSolde == true) {
            $this->setSolde($this->getSolde() + $interets);
        }

        return $interets;
    }

    public function __toString()
    {
        return parent::__toString().
            '. Son taux d\'interet est de '.$this->tauxInteret * 100 .'%.';
    }
}
