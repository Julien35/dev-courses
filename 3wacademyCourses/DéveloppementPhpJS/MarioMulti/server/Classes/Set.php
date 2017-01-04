<?php

class Set implements JsonSerializable
{
    private $height;
    private $width;
    private $cell = [
      'img' => 'grass.png',
      'size' => 30,
      ];

    public function __construct($pHeight = 15, $pWidth = 15)
    {
        $this->height = $pHeight;
        $this->width = $pWidth;
    }

    public function jsonSerialize()
    {
        return [
        'height' => $this->height,
        'width' => $this->width,
        'cell' => $this->cell,
        ];
    }

    public function getHeight() {
      return $this->height;
    }

    public function getWidth() {
      return $this->width;
    }
}
