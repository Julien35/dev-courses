package todolist.entities;

import org.junit.Assert;
import org.junit.Test;

public class ToDoListTest {
	
	@Test
	public void testTodoList() {
		ToDoList list = new ToDoList();
		list.setLibelle("Toto");
		list.setId((long) 1);
		System.out.println(list.getId());
		
		long expected = 1;
		long actual = list.getId();
		
		Assert.assertEquals("Toto", list.getLibelle());
		Assert.assertEquals(expected, actual);
		
	}
	
}
