package com.spring.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.spring.todolist.bean.ToDoList;
import com.spring.todolist.services.IServiceToDoList;


@Controller
@RequestMapping(value="/afficherToDoList")
public class AfficherToDoListController {
	
	@Autowired
	private IServiceToDoList service;
	
	@RequestMapping(method = RequestMethod.GET)
	public String afficher(ModelMap pModel) {
		
		final List<ToDoList> lLToDoLists = service.RechercherToDoList();
		pModel.addAttribute("affichertodolist", lLToDoLists);
		
//		Ligne de debug
			for(ToDoList str:lLToDoLists)
	            System.out.println(str); 
		
		return "affichertodolist";
			
		
	}

}
