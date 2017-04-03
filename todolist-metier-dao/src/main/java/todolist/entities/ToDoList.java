package todolist.entities;

import javax.persistence.Entity;

@Entity
public class ToDoList extends AbstractEntity {
	private static final long serialVersionUID = 1L;

	// attribut d'une todolist
    private String libelle;
    
	//The default constructor only exists for the sake of JPA. 
	//You won’t use it directly, so it is designated as protected
    public ToDoList(){}

    // constructeur avec paramètres
    public ToDoList(String libelle) {
		super();
		this.libelle = libelle;
	}
    
    
	@Override
	public String toString() {
		return "ToDoList [id=" + id + ", libelle=" + libelle + "]";
	}


    public String getLibelle() {
        return libelle;
    }
    public void setLibelle(final String libelle) {
        this.libelle = libelle;
    }

}