function notesEtudiants() {
    // 1: Définir en JavaScript un tableau contenant des notes
    // d'étudiants comprises entre 0 et 20.
    // Afficher le tableau et déterminer combien d'étudiants
    // ont eu 10 ou plus (edited)
    // 2 : Calculer la moyenne des notes (edited)
    // 3: Déterminer la note maximale

    var tabNotes = [10, 15, 12, 5, 3, 8, 18, 14, 11, 0];
    document.write("Notes : ");
    document.write(tabNotes + "<br\>");

    var supten = 0;
    for (var variable in tabNotes) {
        if (tabNotes[variable] >= 10) {
            supten++;
        }
    }
    document.write(supten + " ont eu plus de 10." + "<br\>");

    var moyen = 0;
    var total = 0;
    for (var variable in tabNotes) {
        total += tabNotes[variable];
    }
    moyen = total / tabNotes.length;
    document.write(" La moyenne est de : " + moyen + "<br\>");


    var noteMax = 0;
    for (var variable in tabNotes) {
        if (tabNotes[variable] > noteMax) {
            noteMax = tabNotes[variable];
        }
    }

    document.write(" La note maximale est : " + noteMax);

}
