package todolist.boot;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;

import todolist.config.DomainAndPersitenceConfigAuto;
import todolist.entities.ToDoList;
import todolist.metier.IServiceToDoList;


/**
 * Utilisation de Spring data avec SpringBoot.
 * La conf et la classe principale sont séparées. 
 */
public class BootIServiceToDoList {

	public static void main(String[] args) {

		
		// on prépare la configuration
		SpringApplication app = new SpringApplication(DomainAndPersitenceConfigAuto.class);
		//Suppression des logs de démarrage de l'application
		app.setLogStartupInfo(false);
		// on la lance
		ConfigurableApplicationContext context = app.run(args);
		// métier, appelle de l'interface et nom de l'implementation	 
		IServiceToDoList serviceToDoList = context.getBean(IServiceToDoList.class);
		
        try {
        	
        	//Creation d'une liste depuis le service
        	List<ToDoList> toDoLists = serviceToDoList.getAll();
        	
        	//On affiche dans la console la liste
        	if (!toDoLists.isEmpty()) {
				display("Liste des tâches", toDoLists);
			} else {
				System.out.println("La bdd est vide");
			}

        	//ajouter tâche
//        	System.out.println("Ajout d'une tache");        	
        	serviceToDoList.createTask(new ToDoList("createTask"));
        	//suppression
        	ToDoList doList = serviceToDoList.getAll().get(0);
        	serviceToDoList.deleteTask(doList);
        	//mise à jour 
        	doList = serviceToDoList.getAll().get(0);
        	doList.setLibelle("updateTask");
        	serviceToDoList.updateTask(doList);
        	
        	display("Liste des tâches", serviceToDoList.getAll());

		} catch (Exception ex) {
			System.out.println("Exception : " + ex.getCause());
		}
		// fermeture du contexte Spring
		context.close();
	}

	// méthode utilitaire - affiche les éléments d'une collection
	private static <T> void display(String message, Iterable<T> elements) {
		System.out.println(message);
		for (T element : elements) {
			System.out.println(element);
		}
	}

}