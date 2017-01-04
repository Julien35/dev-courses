package todolist.repositories;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import todolist.config.TestDomainAndPersitenceConfig;
import todolist.entities.ToDoList;


//Permet de lancer le fichier de conf de test
@SpringApplicationConfiguration(classes = TestDomainAndPersitenceConfig.class)
//permet d’utiliser le lanceur Spring de tests « SpringJUnit4ClassRunner ».
@RunWith(SpringJUnit4ClassRunner.class)
public class ToDoListRepositoryTest {	
	
	@Autowired 
	ToDoListRepository repository;
	
	//Se lance avant un test
	@Before
	public void setUp() {
		
		System.out.println("Methode setUp");
		
        try {
        	// save a couple of ToDoLists
	        repository.save(new ToDoList("Carotte"));
	        repository.save(new ToDoList("Lait"));
	        repository.save(new ToDoList("Chocolat"));


			// debug fetch all ToDoLists
//			System.out.println("ToDoLists found with findAll():");
//			System.out.println("-------------------------------");
//			for (ToDoList ToDoList : repository.findAll()) {
//			    System.out.println(ToDoList);
//			}
//			System.out.println();
			
		} catch (Exception ex) {
			System.out.println("Exception : " + ex.getCause());
		}

	}

	//Se lance avant un test
	@After
	public  void downUp(){
		System.out.println("Methode downUp");
		repository.deleteAll();
	}
	
	
	@Test
	public void testFindByLibelle() {
		try {
			System.out.println("methode testFindByLibelle() : ");
			//Ajout de la ligne à supprimer
			repository.save(new ToDoList("TestFind"));
			
//			System.out.println("repository.findAll().toString() = " 
//					+ repository.findAll().toString());
//			System.out.println("repository.findByLibelle(TestFind) = " 
//					+ repository.findByLibelle("TestFind"));
			
			long idExpected = 8;
			long idActual = repository.findByLibelle("TestFind").get(0).getId();
			
			String libelleExpected = "TestFind";
			String libelleActual = repository.findByLibelle("TestFind").get(0).getLibelle();
			
			//Tests
			Assert.assertEquals(libelleExpected, libelleActual);
			Assert.assertEquals(idExpected, idActual);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

	@Test
	public void testSave() {
		try {
			System.out.println("methode testSave() : ");
					
			repository.save(new ToDoList("TestSave"));
//			System.out.println(repository.findAll().toString());
			long idExpected = 4;
			
			ToDoList actual = repository.findOne(idExpected);
//			System.out.println("actual : " + actual.toString());
//			System.out.println(actual.getLibelle());
			Assert.assertEquals("TestSave", actual.getLibelle());
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void testDelete() {
		try {
			System.out.println("methode testDelete() : ");
			
			repository.save(new ToDoList("TestDelete"));
//			System.out.println(repository.findAll().toString());
			
			List<ToDoList> list = new ArrayList<ToDoList>();
			list = repository.findByLibelle("TestDelete");
			long idDelete = list.get(0).getId();
			
			repository.delete(idDelete);
//			System.out.println(repository.findAll().toString());
			list = repository.findByLibelle("TestDelete");
//			System.out.println("list = " + list.toString());
					
			Assert.assertTrue(list.isEmpty() == true);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}


}
