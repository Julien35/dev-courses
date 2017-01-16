
package com.spring.todolist.dao;

import java.util.List;

import com.spring.todolist.bean.ToDoList;

public interface IToDoListDAO {
	
	List<ToDoList> rechercherToDoList();
	
	void createTask(final ToDoList pToDoList);
	
	void deleteTask(final ToDoList pToDoList);
	
	void updateTask(final ToDoList pToDoList);

}