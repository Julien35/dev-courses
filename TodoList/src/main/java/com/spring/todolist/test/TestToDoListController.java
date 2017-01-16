
package com.spring.todolist.test;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.spring.todolist.bean.ToDoList;
import com.spring.todolist.services.IServiceToDoList;


@Controller
@RequestMapping(value="/testToDoList")
public class TestToDoListController {
	
	@Autowired
	private IServiceToDoList service;
	
	@RequestMapping(method = RequestMethod.GET)
	public String afficher(ModelMap pModel) {
		
		try {
			List<ToDoList> lLToDoLists = service.RechercherToDoList();
			pModel.addAttribute("affichertodolist", lLToDoLists);
			
			//Test Creation
			System.out.println("Creation d'une tâche depuis controller de test");
			service.createTask("TestAjout");
			
			//Afficher table
			for(ToDoList liste:lLToDoLists)
				System.out.println(liste.getId() + " " + liste.getLibelle());
			
			
			//Test suppression
			System.out.println("Suppression d'une tâche depuis le controller de test");
			
			Integer pIdTask = new Integer(0);			
			List<ToDoList> toDoLists = service.RechercherToDoList();
			pIdTask = toDoLists.get(0).getId();
			service.deleteTask(pIdTask);
			
			
			//Afficher table
			for(ToDoList liste:lLToDoLists)
				System.out.println(liste.getId() + " " + liste.getLibelle());
			
			
			//Test de modification
			System.out.println("Modification d'une tâche depuis le controller de test");
			
			lLToDoLists =  service.RechercherToDoList();
			
			List<ToDoList> toDoListsUpdate =  new ArrayList<ToDoList>();
			ToDoList toDoList1 = new ToDoList();
			toDoList1.setId(lLToDoLists.get(0).getId());
			toDoList1.setLibelle("modification depuis test 1");
			toDoListsUpdate.add(toDoList1);
			
			ToDoList toDoList2 = new ToDoList();
			toDoList2.setId(lLToDoLists.get(1).getId());
			toDoList2.setLibelle("modification depuis test 2");
			toDoListsUpdate.add(toDoList2);
		
			service.updateTask(toDoListsUpdate);
			
			
			//Afficher table
			for(ToDoList liste:lLToDoLists)
				System.out.println(liste.getId() + " " + liste.getLibelle());	
			
			return "affichertodolist";
			
		} catch (Exception e) {
			e.printStackTrace();
			
			return "errorpage";
		}
		
	}
	
}
