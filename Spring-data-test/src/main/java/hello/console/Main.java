package hello.console;

import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;

import hello.config.Config;
import hello.entities.ToDoList;
import hello.repositories.IToDoListDAO;

/**
 * Utilisation de Spring data avec SpringBoot.
 * La conf et la classe principale sont séparées. 
 */
public class Main {

	public static void main(String[] args) {

		
		// on prépare la configuration
		SpringApplication app = new SpringApplication(Config.class);
		//Suppression des logs de démarrage de l'application
		app.setLogStartupInfo(false);
		// on la lance
		ConfigurableApplicationContext context = app.run(args);
	
		// métier
		IToDoListDAO repository = context.getBean(IToDoListDAO.class);
		
        try {
        	// save a couple of ToDoLists
	        repository.save(new ToDoList("Carotte"));
	        repository.save(new ToDoList("Lait"));
	        repository.save(new ToDoList("Chocolat"));


			// fetch all ToDoLists
			System.out.println("ToDoLists found with findAll():");
			System.out.println("-------------------------------");
			for (ToDoList ToDoList : repository.findAll()) {
			    System.out.println(ToDoList);
			}
			System.out.println();

			// fetch an individual ToDoList by ID
			ToDoList ToDoList = repository.findOne(1L);
			System.out.println("ToDoList found with findOne(1L):");
			System.out.println("--------------------------------");
			System.out.println(ToDoList);
			System.out.println();

			// fetch ToDoLists by libelle
			System.out.println("ToDoList found with findByLastName('Carotte'):");
			System.out.println("--------------------------------------------");
			for (ToDoList carotte : repository.findByLibelle("Carotte")) {
			    System.out.println(carotte);
			}
			
		} catch (Exception ex) {
			System.out.println("Exception : " + ex.getCause());
		}
        // fermeture du contexte Spring
        context.close();
    }

}