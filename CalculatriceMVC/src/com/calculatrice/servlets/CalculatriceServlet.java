package com.calculatrice.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.calculatrice.model.CalculatriceModel;

/**
 * Servlet implementation class calculatriceMVC
 */
@WebServlet(name = "CalculatriceServlet")

public class CalculatriceServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CalculatriceServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
				
		this.getServletContext().getRequestDispatcher("/WEB-INF/calculatriceMVC.jsp").forward(request, response);
	}
	
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,NumberFormatException, IOException {
		
		//Variable pour afficher le resultat dans la jsp
		String afficherResultat = "";
		
		//Controle des valeurs et envoi au modele.
		
		//Variable pour récupérer le choix de calcul
		String operande = request.getParameter("operande");
		//Variable de test
		String test = "Valeur initiale";
		test = operande;
		
		double nombre1 = 0;
		double nombre2 = 0;
		 
		//Si le deux champs sont vide, pas d'affichage du resultat
		if (request.getParameter("nombre1") != null 
				|| request.getParameter("nombre2") !=null) {
			//Récupérer les données reçues du formulaire
			nombre1 = 0;
			nombre2 = 0;
						
			//Vérification de la valeur des nombres avec la methode à la fin du code.
			if (request.getParameter("nombre1") != null) {
				nombre1 = getDoubleValue(request, "nombre1", 0);
			}
			if (request.getParameter("nombre2") != null) {
				nombre2 = getDoubleValue(request, "nombre2", 0);
			}
			
		}
		
		
		//Creation du modele
		CalculatriceModel calculatriceModel = new CalculatriceModel(nombre1, nombre2, operande);
		
		//calcul
		calculatriceModel.calcul();
		
		//Pour l'affichage
		afficherResultat = calculatriceModel.getAfficherResultat();
		
		//Le resultat vaut null ou bien le calcul. il est renvoyé à la jsp
		request.setAttribute("afficherResultat", afficherResultat);
		//Variable pour les tests
		//request.setAttribute("afficherTest", test);

		this.getServletContext().getRequestDispatcher("/WEB-INF/calculatriceMVC.jsp").forward(request, response);


	}

	
	//Methode qui controle la valeur en entrée avant la concatenation.
	//Si null > defaultValue
	public static double getDoubleValue(ServletRequest request, String paramName, double defaultValue)
	{
	     if(request.getParameter(paramName) != null && request.getParameter(paramName) != ""){
	        return Double.valueOf(request.getParameter(paramName));
	    } else{
	        return defaultValue;
	    }
	}

}
