
package com.spring.todolist.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.CriteriaUpdate;
import javax.persistence.criteria.Expression;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.spring.todolist.bean.ToDoList;

@Repository
public class ToDoListDAO implements IToDoListDAO {
	
	@PersistenceContext
	private EntityManager entityManager;
	
	//Methode pour lire la table TODOLIST
	public List<ToDoList> rechercherToDoList() {
		
		//Fonction hibernate pour construire les requêtes.
        final CriteriaBuilder lCriteriaBuilder = entityManager.getCriteriaBuilder();

        //Creation de la requête de select
        final CriteriaQuery<ToDoList> lCriteriaQuery = lCriteriaBuilder.createQuery(ToDoList.class);
        final Root<ToDoList> lRoot = lCriteriaQuery.from(ToDoList.class);
        lCriteriaQuery.select(lRoot);
        final TypedQuery<ToDoList> lTypedQuery = entityManager.createQuery(lCriteriaQuery);

        return lTypedQuery.getResultList();
    }

	//Methode pour créer une tache dans la TODOLIST
	public void createTask(final ToDoList pToDoList) {
		//Spring fait tout le travail d'ouverture de session, commit...
		entityManager.persist(pToDoList);
	}

	public void deleteTask(final ToDoList pToDoList) {
		final ToDoList lToDoList = entityManager.getReference(ToDoList.class, pToDoList.getId());
		entityManager.remove(lToDoList);
	}

	public void updateTask(final ToDoList pToDoList) {
		
        final CriteriaBuilder lCriteriaBuilder = entityManager.getCriteriaBuilder();
        
        //Creation de la requête d'update
        final CriteriaUpdate<ToDoList> lCriteriaUpdate = lCriteriaBuilder.createCriteriaUpdate(ToDoList.class);
        final Root<ToDoList> lRoot = lCriteriaUpdate.from(ToDoList.class);
        final Path<ToDoList> lPath = lRoot.get("id");
        //On utilise la variable pToDoList transmise en parametre de la methode
        final Expression<Boolean> lExpression = lCriteriaBuilder.equal(lPath, pToDoList.getId());
        lCriteriaUpdate.where(lExpression);
        lCriteriaUpdate.set("libelle", pToDoList.getLibelle());
        
        final Query lQuery = entityManager.createQuery(lCriteriaUpdate);
        final int lRowCount = lQuery.executeUpdate();
        
        //Si la requête modifie un nombre d'occurrences différent de 1 > erreur
        //Sinon update fait.
        if (lRowCount != 1) {
            final org.hibernate.Query lHQuery = lQuery.unwrap(org.hibernate.Query.class);
            final String lSql = lHQuery.getQueryString();
            throw new RuntimeException("Nombre d'occurences (" + lRowCount + 
                    ") modifiés différent de 1 pour " + lSql);
        }
		
	}
}
