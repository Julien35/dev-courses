package com.developpez.rpouiller.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.developpez.rpouiller.bean.Course;

@Repository
public class ListeCoursesDAO implements IListeCoursesDAO {

    @PersistenceContext
    private EntityManager entityManager;

    public List<Course> rechercherCourses() {
        final CriteriaBuilder lCriteriaBuilder = entityManager.getCriteriaBuilder();

        final CriteriaQuery<Course> lCriteriaQuery = lCriteriaBuilder.createQuery(Course.class);
        final Root<Course> lRoot = lCriteriaQuery.from(Course.class);
        lCriteriaQuery.select(lRoot);
        final TypedQuery<Course> lTypedQuery = entityManager.createQuery(lCriteriaQuery);

        return lTypedQuery.getResultList();
    }
}