<?php

class Validate
{
    public static function email($email)
    {
        $email = htmlspecialchars($email);
        $email = strip_tags($email);
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    public static function password($password)
    {
        $passwordMod = htmlspecialchars($password);
        $passwordMod = strip_tags($passwordMod);

        if (strcasecmp($password, $passwordMod) === 0) {
            return $password;
        }
        return false;
    }

    public static function siret($siret)
    {
        $siretMod = htmlspecialchars($siret);
        $siretMod = strip_tags($siretMod);

        if (strlen($siretMod) != 14) {
            return false;
        }
        if (!(strcasecmp($siret, $siretMod) === 0)) {
            return false;
        }
        return $siret;
    }
}
