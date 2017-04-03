package com.spring.todolist.controller;

import org.hibernate.validator.constraints.NotEmpty;

public class CreationForm {
	
//Le formulaire « CreationForm » utilise les annotations « NotEmpty » et « Pattern » 
//pour indiquer les contraintes de validation.
	
	@NotEmpty
	private String libelle;

	
	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(final String pLibelle) {
		libelle = pLibelle;
	}

	

}
