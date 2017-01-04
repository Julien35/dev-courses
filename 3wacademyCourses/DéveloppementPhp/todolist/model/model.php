<?php

// Mise d'une tâche
function updateTask($idTask, $title, $goal, $end_date)
{
    $bdd = getBdd();
    $updateTask = $bdd->prepare('UPDATE `task`
      SET `title`=:title,
      `goal` = :goal,
      `end_date`=:end_date
      WHERE id = :id');

    $ret = $updateTask->execute([
    'id' => $idTask,
    'title' => $title,
    'goal' => $goal,
    'end_date' => $end_date, ]);

    return $ret;
}

// Insertion d'une tâche
function addTask($title, $goal, $end_date)
{
    $bdd = getBdd();
    $newTask = $bdd->prepare('INSERT INTO task (title, goal, end_date)
    VALUE(:title, :goal, :end_date)');
    $ret = $newTask->execute(['title' => $title,
   'goal' => $goal, 'end_date' => $end_date, ]);

    return $ret;
}

// Suppression d'une tâche
function deleteTask($idTask)
{
    $bdd = getBdd();
    $task = $bdd->prepare('DELETE FROM task WHERE id = :id');
    $ret = $task->execute(['id' => $idTask]);

    return $ret;
}

// Renvoie la liste des tâches
function getTasks()
{
    $bdd = getBdd();
    $tasks = $bdd->prepare('select id, title, goal, end_date from task ORDER BY id desc');
    $tasks->execute();

    return $tasks->fetchAll(PDO::FETCH_ASSOC);
}

// Renvoie le contenu d'une tâche
function getTask($idTask)
{
    $bdd = getBdd();
    $task = $bdd->prepare('select id, title, goal, end_date from task where id = ? ORDER BY id desc');
    $task->execute(array($idTask));
    if ($task->rowCount() == 1) {
        return $task->fetch();
    }  // Accès à la première ligne de résultat
    else {
        throw new Exception("Aucun tâche ne correspond à l'identifiant '$idtask'");
    }
}

function getBdd()
{
    $bdd = new PDO('mysql:host=localhost;dbname=todo_list;charset=utf8', 'todo_list',
            'todo_list', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

    return $bdd;
}
