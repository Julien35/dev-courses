<?php

require_once 'Classes/Player.php';
require_once 'Classes/Set.php';

class Program implements JsonSerializable
{
    private $players = [];
    private $set;

    public function __construct($pHeight = 15, $pWidth = 15)
    {
        if (file_exists(__DIR__.'/bdd/game.save')) {
            $data = file_get_contents(__DIR__.'/bdd/game.save');

            $dataObjet = unserialize($data);

            $this->players = $dataObjet->players;
            $this->set = $dataObjet->set;
        } else {
            $set = new Set($pHeight, $pWidth);
            $this->set = $set;
        }
    }

    public function __destruct()
    {
        file_put_contents(__DIR__.'/bdd/game.save', serialize($this));
    }

    public function getSet()
    {
        return $this->set;
    }

    public function addPlayer($name, $img)
    {
        $player = new Player($name, $img);

        $coord = [
          'i' => 0,
          'j' => 0,
        ];
        $player->setCoord($coord);

        $this->players[session_id()] = $player;
    }

    public function movePlayer($x, $y)
    {
        $player = $this->players[session_id()];
        if ($this->isAllowed($x, $y)) {
            $newCoord = [
            'i' => $x,
            'j' => $y,
          ];

            $this->players[session_id()]->setCoord($newCoord);
        }
        echo json_encode($this->players[session_id()]->getCoord());
    }

    public function isAllowed($x, $y)
    {
        if (!is_int($x) || !is_int($y)) {
            return false;
        }

        $heightMax = $this->set->getHeight();
        $widthMax = $this->set->getWidth();

        if ($x < 0 ||
          $y < 0 ||
          $x >= $heightMax ||
          $y >= $widthMax) {
            return false;
        }

        // A REFAIRE///////
        if (($x == 0 && abs($y) == 1) || ($y == 0 && abs($x) == 1)) {
            return true;
        }

        if (($x == 0 || $y == 0) && (abs($x) == 1 || abs($y) == 1)) {
            # code...
        }

        return true;
        /////////////////
    }

    public function delPlayer()
    {
    }

    public function getPlayers()
    {
        return $this->players;
    }

    public function refresh()
    {
    }

    public function newGame()
    {
    }

    public function jsonSerialize()
    {
        return [
      'set' => $this->set,
      'players' => $this->players,
      ];
    }
}
