package todolist.boot;

import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;

import todolist.config.DomainAndPersitenceConfigAuto;
import todolist.config.DomainAndPersitenceConfigManuelle;
import todolist.entities.ToDoList;
import todolist.repositories.ToDoListRepository;


/**
 * Utilisation de Spring data avec SpringBoot.
 * La conf et la classe principale sont séparées. 
 */
public class BootRepository {

	public static void main(String[] args) {

		
		// on prépare la configuration
		SpringApplication app = new SpringApplication(DomainAndPersitenceConfigAuto.class);
//		SpringApplication app = new SpringApplication(DomainAndPersitenceConfigManuelle.class);
		
		//Suppression des logs de démarrage de l'application
		app.setLogStartupInfo(false);
		// on la lance
		ConfigurableApplicationContext context = app.run(args);
	
		// métier
		ToDoListRepository repository = context.getBean(ToDoListRepository.class);
		
        try {
			// fetch all ToDoLists
			System.out.println("ToDoLists found with findAll():");
			System.out.println("-------------------------------");
			for (ToDoList ToDoList : repository.findAll()) {
			    System.out.println(ToDoList);
			}
			System.out.println();
        	
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
			
//			repository.deleteAll();
			
		} catch (Exception ex) {
			System.out.println("Exception : " + ex.getCause());
		}
        // fermeture du contexte Spring
        context.close();
    }

}