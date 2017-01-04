package hello.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ToDoList {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    private String libelle;
    
	//The default constructor only exists for the sake of JPA. 
	//You won’t use it directly, so it is designated as protected
    public ToDoList(){}

    
    public ToDoList(String libelle) {
		super();
		this.libelle = libelle;
	}
    
    
	@Override
	public String toString() {
		return "ToDoList [id=" + id + ", libelle=" + libelle + "]";
	}


	public long getId() {
        return id;
    }
	public void setId(long id) {
		this.id = id;
	}
    public String getLibelle() {
        return libelle;
    }
    public void setLibelle(final String libelle) {
        this.libelle = libelle;
    }

}