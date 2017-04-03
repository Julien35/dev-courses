package com.spring.todolist.controller;

import java.util.LinkedList;
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


@Controller
public class ModifierToDoListController {

    @Autowired
    private IServiceToDoList service;

    @RequestMapping(value="/afficherModificationToDoList", method = RequestMethod.GET)
    public String afficher(final ModelMap pModel) {
        if (pModel.get("modification") == null) {
            final List<ToDoList> lToDoLists = service.RechercherToDoList();
            final ModificationForm lModificationForm = new ModificationForm();
            final List<ModificationToDoList> lListe = new LinkedList<ModificationToDoList>();
            for (final ToDoList lToDoList : lToDoLists) {
                final ModificationToDoList lModificationToDoList = new ModificationToDoList();
                lModificationToDoList.setId(lToDoList.getId());
                lModificationToDoList.setLibelle(lToDoList.getLibelle());
                lListe.add(lModificationToDoList);
            }
            lModificationForm.setToDoList(lListe);
            pModel.addAttribute("modification", lModificationForm);
        }
        return "modification";
    }

	    @RequestMapping(value="/modifierModificationToDoList", method = RequestMethod.POST)
	    public String modifier(@Valid @ModelAttribute(value="modification") final ModificationForm pModification, 
	            final BindingResult pBindingResult, final ModelMap pModel) {

	        if (!pBindingResult.hasErrors()) {
	            final List<ToDoList> lListeToDoLists = new LinkedList<ToDoList>();
	            for (final ModificationToDoList lModificationToDoList : pModification.getToDoList()) {
	                final ToDoList lToDoList = new ToDoList();
	                lToDoList.setId(lModificationToDoList.getId());
	                lToDoList.setLibelle(lModificationToDoList.getLibelle());
	                lListeToDoLists.add(lToDoList);   
	            }
	            
    			//Afficher table : debug
    			for(ToDoList liste: lListeToDoLists)
    				System.out.println(liste.getId() + " " + liste.getLibelle());	
	            
	            try {
					service.updateTask(lListeToDoLists);
				} catch (Exception e) {
					System.out.println("Erreur service.updateTask(lListeToDoLists); ");
//					System.out.println(lListeToDoLists.toString());
				}
	        }

	        return afficher(pModel);
	    }
	}
