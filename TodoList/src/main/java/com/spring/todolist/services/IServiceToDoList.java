
package com.spring.todolist.services;

import java.util.List;

import com.spring.todolist.bean.ToDoList;

public interface IServiceToDoList {
	
	List<ToDoList> RechercherToDoList();
	
	void createTask(final String pLibelle);
	
	void deleteTask(final Integer pIdTask);
	
	void updateTask(final List<ToDoList> pToDoLists);

}
