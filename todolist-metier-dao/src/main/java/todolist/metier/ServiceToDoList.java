package todolist.metier;

import java.util.List;

import org.apache.regexp.recompile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.common.collect.Lists;

import todolist.entities.ToDoList;
import todolist.repositories.ToDoListRepository;

/**
 * 
 * @author julien
 *
 *Utilisation du code de la 1ère version de la ToDoList pour les paramêtres.
 *Utilisation des methodes du CrudRepository pour l'accès Bdd H2
 *Utilisation des collections google newArrayList par exemple
 */

@Service
public class ServiceToDoList implements IServiceToDoList {
	
	// repositories
    @Autowired
    private ToDoListRepository toDoListRepository;

	@Override
	public List<ToDoList> getAll() {
		// Utilisation des collections google
		return Lists.newArrayList(toDoListRepository.findAll());
	}

	@Override
	public ToDoList getToDoListById(Long id) {
		return toDoListRepository.findOne(id);
	}

	@Override
	public void updateTask(ToDoList toDoList) {
		toDoListRepository.save(toDoList);		
	}

	@Override
	public void createTask(ToDoList toDoList) {
		toDoListRepository.save(toDoList);			
	}

	@Override
	public void deleteTask(ToDoList toDoList) {
		toDoListRepository.delete(toDoList);
		
	} 

}


