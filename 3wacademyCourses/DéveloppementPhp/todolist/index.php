<?php

require 'controller/controller.php';

try {
    if (isset($_GET['action'])) {
        if ($_GET['action'] == 'delete') {
            if (isset($_GET['id'])) {
                $idTask = intval($_GET['id']);
                if ($idTask != 0) {
                    delete($idTask);
                } else {
                    throw new Exception('Identifiant de tâche non valide');
                }
            } else {
                throw new Exception('Identifiant de tâche non défini');
            }
        } elseif ($_GET['action'] == 'update') {
            if (isset($_GET['id'])) {
                $idTask = intval($_GET['id']);
                if ($idTask != 0) {
                    update();
                } else {
                    throw new Exception('Identifiant de tâche non valide');
                }
            } else {
                throw new Exception('Identifiant de tâche non défini');
            }
        } else {
            throw new Exception('Action non valide');
        }
    } elseif (isset($_POST['id']) && isset($_POST['title'])) {
        // Cas de post (update) depuis update.html
        update();
    } elseif (isset($_POST['title'])) {
        // Cas de post (insert) depuis index.html
        insert();
    } else {  // aucune action définie : affichage de l'accueil
        accueil();
    }
} catch (Exception $e) {
    erreur($e->getMessage());
}
