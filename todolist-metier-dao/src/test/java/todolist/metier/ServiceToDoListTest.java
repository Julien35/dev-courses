package todolist.metier;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.List;

import javax.annotation.Resource;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import todolist.config.TestDomainAndPersitenceConfig;
import todolist.entities.ToDoList;
import todolist.repositories.ToDoListRepository;

@SpringApplicationConfiguration(classes = TestDomainAndPersitenceConfig.class)
@RunWith(SpringJUnit4ClassRunner.class)
public class ServiceToDoListTest {
	
	// métier
	//repository pour creer des données en table avant les tests
	@Autowired
	private ToDoListRepository repository;
	
	@Autowired
	private IServiceToDoList serviceToDoList;
	

	
	
	@Before // a test
	@Rollback(true)
	public void setUp() throws Exception {
//		System.out.println("Methode setUp");		
        try {
        	// save a couple of ToDoLists with rollback for tests.
	        repository.save(new ToDoList("Carotte"));
	        repository.save(new ToDoList("Lait"));
	        repository.save(new ToDoList("Chocolat"));
        	
        	//Creation d'une liste depuis le service
//	        displayTable();
	        
		} catch (Exception ex) {
			System.out.println("Exception : " + ex.getCause());
		}    
	      
	}

//	@After //a test
//	public void downUp() throws Exception {
//		System.out.println("Methode downUp");
//		repository.deleteAll();
//	}
	
	@Test
	public void testBidon() {
		//Test bidon
		String toto = "toto";
		Assert.assertEquals("toto", toto);
	}

	@Test
	public void getAllToDoLists(){
		List<ToDoList> toDoLists = serviceToDoList.getAll();
		assertNotNull(toDoLists);
	}
	
	@Test
	public void getToDoListById(){
		Long id = Long.valueOf(1);
		ToDoList toDoList = serviceToDoList.getToDoListById(id);
		assertEquals(id, toDoList.getId());
	}
	
	@Test
	public void TestUpdateTask() {
//		System.out.println("Debut TestUpdateTask");
//		displayTable();
		
		//On recupère la 1ère tâche.
		Long id = Long.valueOf(1);
		ToDoList toDoList = serviceToDoList.getToDoListById(id);
//		System.out.println("toDoList avant modification" + toDoList);
		toDoList.setLibelle("banane");
//		System.out.println("toDoList après modification" + toDoList);
		
		//Mise à jour de la tâche eet test
		serviceToDoList.updateTask(toDoList);
		String libelleAttendu = serviceToDoList.getToDoListById(id).getLibelle();
//		System.out.println(libelleAttendu);
		Assert.assertEquals("banane", libelleAttendu);
		
//		System.out.println("Fin TestUpdateTask");
	}
	
	@Test
	public void TestCreateTask() {
		//Ajout d'une nouvelle tache
		serviceToDoList.createTask(new ToDoList("Test9"));
		//Recuperation des variables.
		String libelleATrouver = "Test9";
		long longCréé = repository.findByLibelle(libelleATrouver).get(0).getId();
		String LibelleTrouve = serviceToDoList.getToDoListById(longCréé).getLibelle();
		//Test des valeurs > attendu "Test9"
		Assert.assertEquals(libelleATrouver, LibelleTrouve);
	}
	
	@Test
	public void TestDeleteTask() {
			//Recuperation de la 1ère occurence Test1
			List<ToDoList> list = serviceToDoList.getAll();
			ToDoList toDoList = list.get(0);
			//On efface la valeur
			serviceToDoList.deleteTask(toDoList);
			//Recuperation des variables.
			String libelleATrouver = toDoList.getLibelle();
			String LibelleTrouve = serviceToDoList.getAll().get(0).getLibelle();
			//Test
			Assert.assertNotEquals(libelleATrouver, LibelleTrouve);
	}
	
		
	// méthode utilitaire - affiche les éléments d'une collection
	private void display(String message, Iterable<?> elements) {
		System.out.println(message);
		for (Object element : elements) {
			System.out.println(element);
		}
	}
	
	private void displayTable() {
    	//Creation d'une liste depuis le service
    	List<ToDoList> toDoLists = serviceToDoList.getAll();
    	
    	//On affiche dans la console la liste
    	if (!toDoLists.isEmpty()) {
			display("Liste des tâches", toDoLists);
		} else {
			System.out.println("La bdd est vide");
		}
	}
}
