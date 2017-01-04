package hello.console;

import hello.config.Config;
import hello.entities.ToDoList;
import hello.repositories.IToDoListDAO;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;


/**
 * Pas d'utilisation de SpringBoot dans ce cas.
 * Run as Java Application
 */
public class Main2 {

	public static void main(String[] args) {
		
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(Config.class);
		IToDoListDAO repository = context.getBean(IToDoListDAO.class);
		
        // fetch all ToDoLists
        System.out.println("ToDoLists found with findAll():");
        System.out.println("-------------------------------");
        for (ToDoList ToDoList : repository.findAll()) {
            System.out.println(ToDoList);
        }
        System.out.println();
		
		context.close();

	}

}
