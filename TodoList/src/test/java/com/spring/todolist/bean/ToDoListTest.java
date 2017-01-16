package com.spring.todolist.bean;

import org.junit.Assert;
import org.junit.Test;

public class ToDoListTest {
	
	@Test
	public void testTodoList() {
		ToDoList list = new ToDoList();
		list.setLibelle("Toto");
		
		Assert.assertEquals("Toto", list.getLibelle());
		
	}
}
