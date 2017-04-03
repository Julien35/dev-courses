package com.spring.todolist.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TODOLIST")
public class ToDoList {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="IDOBJET")
    private Integer id;
    private String libelle;

    public Integer getId() {
        return id;
    }

    public void setId(final Integer pId) {
        id = pId;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(final String pLibelle) {
        libelle = pLibelle;
    }

}