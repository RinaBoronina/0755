<?php
class Person
{
    private $name;
    private $lastname;
    private $age;
    private $hp;
    private $mother;
    private $father;

    function __construct($name, $lastname, $age, $mother = null, $father = null)
    {
        $this->name = $name;
        $this->lastname = $lastname;
        $this->age = $age;
        $this->mother = $mother;
        $this->father = $father;
        $this->hp = 100;
    }
    function sayHi($name)
    {
        return "Hi, $name, I`m " . $this->name;
    }
    function setHp($hp)
    {
        if ($this->hp + $hp >= 100) $this->hp = 100;
        else $this->hp = $this->hp + $hp;
    }
    function getHp()
    {
        return $this->hp;
    }
    function getName()
    {
        return $this->name;
    }
    function getMother()
    {
        return $this->mother;
    }
    function getFather()
    {
        return $this->father;
    }
    function getLastname()
    {
        return;
    }
    function getInfo()
    {
        return "
    <h3>A few words about myself:</h3><br>" . "My name is: " . $this->getName() . "<br>my lastname is: " . $this->getLastname() . "<br>my father is: " . $this->getFather()->getName() .
            "<br>my mother is: " . $this->getMother()->getName() . "<br>my fathers father is: " . $this->getFather()->getFather()->getName() . "<br>my fathers mother is: " . $this->getFather()->getMother()->getName()
            . "<br>my mothers father is: " . $this->getMother()->getFather()->getName() . "<br>my mothers mother is: " . $this->getMother()->getMother()->getName();
    }
}


$igor = new Person("Igor", "Petrov", 68);

$alex_pa = new Person("alex_pa", "Ivanov", 61);
$alex_ma = new Person("alex_ma", "Ivanova", 62);

$olga_pa = new Person("olga_pa", "Petrov", 72);
$olga_ma = new Person("olga_ma", "Petrova", 71);

$alex = new Person("Alex", "Ivanov", 42, $alex_ma, $alex_pa);
$olga = new Person("Olga", "Ivanova", 42, $olga_ma, $olga_pa);

$alex_pa = new Person("alex_pa", "Ivanov", 62, null, $igor);
$alex_ma = new Person("alex_ma", "Ivanova", 62, null, $igor);

$valera = new Person("Valera", "Ivanov", 15, $olga, $alex);

echo $valera->getInfo();
