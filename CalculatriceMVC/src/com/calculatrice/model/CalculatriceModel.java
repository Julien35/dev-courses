package com.calculatrice.model;

import com.calculatrice.beans.*;

public class CalculatriceModel {	

	//Proprietes
	private CalculatriceBean calculatriceBean;
	private String test;
	private String afficherResultat;
	
	//Constructeur publique
	public CalculatriceModel(double nombre1, double nombre2, String operande) {
		super();
		this.calculatriceBean = new CalculatriceBean();
		this.calculatriceBean.setNombre1(nombre1);
		this.calculatriceBean.setNombre2(nombre2);
		this.calculatriceBean.setOperande(operande);
		
		this.calculatriceBean.setResultat(0);
		this.test = "";
		this.afficherResultat = "";
	}

	//Getter et Setter
	public CalculatriceBean getCalculatriceBean() {
		return calculatriceBean;
	}

	public void setCalculatriceBean(CalculatriceBean calculatriceBean) {
		this.calculatriceBean = calculatriceBean;
	}
	
	public String getTest() {
		return test;
	}

	public void setTest(String test) {
		this.test = test;
	}

	public String getAfficherResultat() {
		return afficherResultat;
	}

	public void setAfficherResultat(String afficherResultat) {
		this.afficherResultat = afficherResultat;
	}
	
	/**
	 * Methode qui effectue le calcul
	 */
	public void calcul() {
		
		String test = getTest();
		String afficherResultat = getAfficherResultat();
		
		String operande = getCalculatriceBean().getOperande();
		double resultat = getCalculatriceBean().getResultat();
		double nombre1 = getCalculatriceBean().getNombre1();
		double nombre2 = getCalculatriceBean().getNombre2();
		
		switch (operande) {
		  case "addition":
			  resultat = nombre1 + nombre2;
			  test = "addition ok";
			  afficherResultat = "Résultat de l'opération " + nombre1 
					  + " + " + nombre2 + " = " + resultat;		 
		    break;
		    
		  case "soustraction":
			  resultat = nombre1 - nombre2;
			  test = "soustraction ok";	
			  afficherResultat = "Résultat de l'opération " + nombre1
						+ " - " + nombre2 + " = " + resultat;
			break;
			
		  case "multiplication":
			  resultat = nombre1 * nombre2;
			  test = "multiplication ok";	
			  afficherResultat = "Résultat de l'opération " + nombre1
						+ " * " + nombre2 + " = " + resultat;
			break;
			
		  case "division":
			  
			  if (nombre2 != 0) {
				resultat = nombre1 / nombre2;
				test = "division ok";
				afficherResultat = "Résultat de l'opération " + nombre1
						+ " / " + nombre2 + " = " + resultat;
			} else {
				afficherResultat = "Division par zero !!!";
			}
			 
			break;
			  
		  default:
			  //Normalement, on ne devrait jamais arriver ici.
			break;             
		}
		
		setAfficherResultat(afficherResultat);
		setTest(test);
		
	}
			
}