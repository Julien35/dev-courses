package todolist.config;


import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

//@EnableJpaRepositories(basePackages = { "todolist.repositories" })
//@EnableAutoConfiguration//(exclude={DataSourceAutoConfiguration.class})
//
////ajoute au contexte de Spring toutes les classes du package [todolist] 
////et ses descendants ayant une annotation Spring. 
////Dans le package [todolist.metier], la classe [ServiceToDoList] avec son annotation [@Service] 
////va être trouvée et ajoutée au contexte Spring ;
//@ComponentScan(basePackages = { "todolist" })
//
////un bean [entityManagerFactory] va être défini par défaut par Spring Boot. 
////On doit indiquer à ce bean où se trouvent les entités JPA qu'il doit gérer.
//@EntityScan(basePackages = { "todolist.entities" })
//
////indique que les méthodes des interfaces héritant de l'interface [CrudRepository] 
////doivent être exécutées au sein d'une transaction
//@EnableTransactionManagement


//Conf 2 : le service ne marche pas mais la transaction s'enregistre
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = { "todolist.repositories" })

//Origine du problème 
//@ComponentScan(basePackages = { "todolist" })
//@EntityScan(basePackages = { "todolist.entities" })

@Configuration

public class DomainAndPersitenceConfigManuelle {
	// la source de données H2
	@Bean
	public DataSource dataSource() {
		BasicDataSource dataSource = new BasicDataSource();
		dataSource.setDriverClassName("org.h2.Driver");
		dataSource.setUrl("jdbc:h2:./database/todolist");
		dataSource.setUsername("sa");
		dataSource.setPassword("");
		return dataSource;
	}

	// le provider JPA
	@Bean
	public JpaVendorAdapter jpaVendorAdapter() {
		HibernateJpaVendorAdapter hibernateJpaVendorAdapter = new HibernateJpaVendorAdapter();
		hibernateJpaVendorAdapter.setShowSql(false);
		hibernateJpaVendorAdapter.setGenerateDdl(false);
		hibernateJpaVendorAdapter.setDatabase(Database.H2);
		return hibernateJpaVendorAdapter;
	}
	
	@Bean
	public EntityManagerFactory entityManagerFactory(JpaVendorAdapter jpaVendorAdapter, DataSource dataSource) {
		LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
		factory.setJpaVendorAdapter(jpaVendorAdapter);
		factory.setPackagesToScan("todolist.entities");
		factory.setDataSource(dataSource);
		factory.afterPropertiesSet();
		return factory.getObject();
	}

	// Transaction manager
	@Bean
	public PlatformTransactionManager transactionManager(EntityManagerFactory c) {
		JpaTransactionManager txManager = new JpaTransactionManager();
		txManager.setEntityManagerFactory(c);
		return txManager;
	}


}
