package com.spring.todolist.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import com.spring.todolist.bean.ToDoList;
import com.spring.todolist.dao.IToDoListDAO;

@Service
public class ServiceToDoList implements IServiceToDoList {

    @Autowired
    private IToDoListDAO dao;
	
	@Transactional(readOnly=true)
	public List<ToDoList> RechercherToDoList() {
		return dao.rechercherToDoList();
	}
	

	@Transactional
	public void createTask(final String pLibelle) {
		final ToDoList lToDoList = new ToDoList();
		lToDoList.setLibelle(pLibelle);
		dao.createTask(lToDoList);
	}

	@Transactional
	public void deleteTask(final Integer pIdTask) {
		final ToDoList lToDoList = new ToDoList();
		lToDoList.setId(pIdTask);
		dao.deleteTask(lToDoList);
	}

	//Parcours la liste des tâches à modifier et l'envoi au DAO.
	@Transactional
	public void updateTask(List<ToDoList> pToDoLists) {
		for (ToDoList toDoList : pToDoLists) {
			dao.updateTask(toDoList);
		}

	}


}


