package todolist.config;


import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
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

//@ComponentScan(basePackages = { "todolist" })
//@EntityScan(basePackages = { "todolist.entities" })

//Conf 2 : le service ne marche pas mais la transaction s'enregistre
//@EnableTransactionManagement
//@EnableJpaRepositories(basePackages = { "todolist.repositories" })
//@Configuration


@EnableJpaRepositories(basePackages = { "todolist.repositories" })
@EnableAutoConfiguration
@ComponentScan(basePackages = { "todolist" })
@EntityScan(basePackages = { "todolist.entities" })
@EnableTransactionManagement
public class TestDomainAndPersitenceConfig {
	// la source de données H2
//	@Bean
//	public DataSource dataSource() {
//		BasicDataSource dataSource = new BasicDataSource();
//		dataSource.setDriverClassName("org.h2.Driver");
//		//Database persitante
////		dataSource.setUrl("jdbc:h2:./database/todolist");
//		//database en memoire seulement
//		dataSource.setUrl("jdbc:h2:mem:testToDoList");
//		dataSource.setUsername("sa");
//		dataSource.setPassword("");
//		return dataSource;
//	}
//
//	// le provider JPA
//	@Bean
//	public JpaVendorAdapter jpaVendorAdapter() {
//		HibernateJpaVendorAdapter hibernateJpaVendorAdapter = new HibernateJpaVendorAdapter();
//		hibernateJpaVendorAdapter.setShowSql(false);
//		hibernateJpaVendorAdapter.setGenerateDdl(true);
//		hibernateJpaVendorAdapter.setDatabase(Database.H2);
//		return hibernateJpaVendorAdapter;
//	}
//
//	@Bean
//	public EntityManagerFactory entityManagerFactory(JpaVendorAdapter jpaVendorAdapter, DataSource dataSource) {
//		LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
//		factory.setJpaVendorAdapter(jpaVendorAdapter);
//		factory.setPackagesToScan("todolist.entities");
//		factory.setDataSource(dataSource);
//		factory.afterPropertiesSet();
//		return factory.getObject();
//	}
//
//	// Transaction manager
//	@Bean
//	public PlatformTransactionManager transactionManager(EntityManagerFactory c) {
//		JpaTransactionManager txManager = new JpaTransactionManager();
//		txManager.setEntityManagerFactory(c);
//		return txManager;
//	}


}
