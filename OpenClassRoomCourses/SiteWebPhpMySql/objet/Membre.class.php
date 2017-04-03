<?php
class Membre
{
    private $pseudo;
    private $email;
    private $signature;
    private $actif;

    public function envoyerEMail($titre, $message)
    {
        mail($this->email, $titre, $message);
    }

    public function bannir()
    {
        $this->actif = false;
        $this->envoyerEMail('Vous avez été banni', 'Ne revenez plus !');
    }

    public function getPseudo()
    {
        return $this->pseudo;
    }

    public function setPseudo($nouveauPseudo)
    {
        if (!empty($nouveauPseudo) AND strlen($nouveauPseudo) < 15)
        {
            $this->pseudo = $nouveauPseudo;
        }
    }
}
?>
