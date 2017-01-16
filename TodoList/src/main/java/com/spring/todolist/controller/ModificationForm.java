package com.spring.todolist.controller;

import java.util.List;

import javax.validation.Valid;

public class ModificationForm {

    @Valid
    private List<ModificationToDoList> lToDoList;

    public void setToDoList(final List<ModificationToDoList> pToDoList) {
    	lToDoList = pToDoList;
    }

    public List<ModificationToDoList> getToDoList() {
        return lToDoList;
    }
}