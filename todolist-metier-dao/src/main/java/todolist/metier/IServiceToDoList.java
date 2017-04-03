
package todolist.metier;

import java.util.List;

import todolist.entities.ToDoList;

public interface IServiceToDoList {
	
	/**
	 * get all todolists
	 * @return
	 */
	public List<ToDoList> getAll();
	
	/**
	 * Find ToDoList by id
	 * @param id
	 * @return ToDoList
	 */
	public ToDoList getToDoListById(Long id);

	/**
	 * Update ToDoList
	 * @param ToDoList
	 */
	public void updateTask(ToDoList toDoList);

	/**
	 * Create ToDoList
	 * @param ToDoList
	 */
	public void createTask(ToDoList toDoList);
	
	
	/**
	 * Delete ToDoList
	 * @param ToDoList
	 */
	public void deleteTask(ToDoList toDoList);
	

}