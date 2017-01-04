<?php

require 'model/model.php';


function erreur($msg) {


}

// Insertion
function insert() {
  // C'est la seule valeur obligatoire
  if (isset($_POST['title'])) {
      $title = htmlspecialchars($_POST['title']);

      $goal = '';
      if (isset($_POST['goal'])) {
          $goal = htmlspecialchars($_POST['goal']);
      }

      if (isset($_POST['date'])) {
          $date = $_POST['date'];
      } else {
        $date = date("Y-m-d");
      }

      $ret = addTask($title, $goal, $date);
      // echo $ret;
  }

  accueil();
}

// Affiche la page d'update
function update()
{
    if (isset($_POST['id'])) {
        $id = $_POST['id'];
        $title = $_POST['title'];
        $goal = $_POST['goal'];
        $end_date = $_POST['end_date'];

        $ret = updateTask($id, $title, $goal, $end_date);
        // echo $ret;

        accueil();

    } elseif (isset($_GET['id'])) {
        $id = $_GET['id'];
        $title = $_GET['title'];
        $goal = $_GET['goal'];
        $end_date = $_GET['end_date'];

        include 'templates/update.phtml';
    }
}

function delete($idToDelete)
{
    $ret = deleteTask($idToDelete);
    // echo $ret;
    accueil();
}

// Affiche la liste de tous les billets du blog
function accueil()
{
    $tasks = getTasks();
    // Template
    require 'templates/index.phtml';
}
