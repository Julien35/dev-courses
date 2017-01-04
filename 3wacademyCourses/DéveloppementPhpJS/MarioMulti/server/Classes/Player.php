<?php

class Player implements JsonSerializable
{
    private $name;
    private $img;
    private $id;
    private $coord = [];

    public function __construct($name = 'Mario', $img = 'mario.png')
    {
        $this->name = $name;
        $this->img = $img;
        $this->id = session_id();
    }

    public function getCoord()
    {
        return $this->coord;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getImg()
    {
        return $this->img;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setCoord($coord)
    {
        $this->coord = $coord;
    }

    public function setName($name)
    {
        $this->name = $name;
    }
    public function setImg($img)
    {
        $this->img = $img;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function jsonSerialize()
    {
        return [
          'id' => $this->id,
         'name' => $this->name,
         'img' => $this->img,
         'coord' => $this->coord,
    ];
    }
}
