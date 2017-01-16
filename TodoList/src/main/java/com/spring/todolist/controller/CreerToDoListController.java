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

import com.spring.todolist.bean.ToDoList;
import com.spring.todolist.services.IServiceToDoList;

/*
 * Le contrôleur « CreerListeToDoListController » 
 * comporte deux méthodes « afficher » et « creer ». 
 * La méthode « afficher » place la liste des tâches dans l'attribut « creertodolist » 
 * et initialise le formulaire « creation » 
 * s'il n'est pas déjà présent dans l'attribut « creation ».
 */
@Controller
public class CreerToDoListController {
	
	@Autowired
	private IServiceToDoList service;
	
	
	@RequestMapping(value="/afficherCreationToDoList", method = RequestMethod.GET)
	public String afficher(final ModelMap pModel) {
		//Création d'un objet ToDoList puis Lecture de la table
		final List<ToDoList> lToDoLists = service.RechercherToDoList();
        pModel.addAttribute("creertodolist", lToDoLists);
        
        if (pModel.get("creation") == null) {
            pModel.addAttribute("creation", new CreationForm());
        }
        return "creation";
    }
	
	
/*
 * L'annotation « @ModelAttribute » de la méthode « creer » 
 * indique que le paramètre « pCreation » est constitué à partir de l'attribut « creation ». 
 * L'annotation « @Valid » indique que le formulaire doit être validé 
 * grâce aux annotations contenues dans la classe de formulaire « CreationForm ». 
 * Ensuite, la méthode « creer » appelle la méthode de création en base de données 
 * s'il n'y a pas d'erreurs dans la validation, puis appelle simplement 
 * la méthode « afficher » pour l'affichage de la page.
 */
    @RequestMapping(value="/creerCreationToDoList", method = RequestMethod.POST)
    public String creer(@Valid @ModelAttribute(value="creation") final CreationForm pCreation, 
            final BindingResult pBindingResult, final ModelMap pModel) {

        if (!pBindingResult.hasErrors()) {
            service.createTask(pCreation.getLibelle());
            
        }
        return afficher(pModel);
    }

}
