package todolist.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import todolist.entities.ToDoList;

//IToDoListDAO extends the CrudRepository interface
//The type of entity and ID that it works with,Customer and Long, are specified in the generic parameters on CrudRepository.
//inherits several methods for working with TodoList persistence, including methods for saving, deleting, and finding Customer entities.
public interface ToDoListRepository extends CrudRepository<ToDoList, Long>{
	
	//Spring Data JPA also allows you to define other query methods by simply declaring their method signature.
	//In the case of CustomerRepository, this is shown with a findByLibelle() method.
	List<ToDoList> findByLibelle(String libelle);

}
