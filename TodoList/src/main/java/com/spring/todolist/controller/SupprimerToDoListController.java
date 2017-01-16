package com.spring.todolist.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.spring.todolist.bean.ToDoList;
import com.spring.todolist.services.IServiceToDoList;

@Controller
public class SupprimerToDoListController {
	
	@Autowired
	private IServiceToDoList service;
	
	/*
	 * Le contrôleur « SupprimerToDoListController » comporte deux méthodes 
	 * « afficher » et « supprimer ». 
	 * La méthode « afficher » place la liste des tâches dans l'attribut « listeCourses ».
	 */
	@RequestMapping(value="/afficherSuppressionToDoList", method = RequestMethod.GET)
	public String afficher(final ModelMap pModel) {
		//Création d'un objet ToDoList puis Lecture de la table
		final List<ToDoList> lToDoLists = service.RechercherToDoList();
        pModel.addAttribute("todolist", lToDoLists);
        
        return "suppression";
    }
	
	/*
	 * Ensuite, la méthode « supprimer » utilise le paramètre « idToDoList » de la requête 
	 * pour appeler la méthode « deleteTask » du service, 
	 * puis elle relance l'affichage de la page. 
	 */
    @RequestMapping(value="/supprimerSuppressionToDoList", method = RequestMethod.GET)
    //@RequestParam(value="idToDoList" permet de récupérer la variable de la jsp "suppression"
    public String supprimer(@RequestParam(value="idToDoList") final Integer pIdToDoList, 
    		final ModelMap pModel) {

    	service.deleteTask(pIdToDoList);

    	return afficher(pModel);   
    }



}
