package com.example.insurance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.insurance.entity.User;

@RepositoryRestResource(path = "user")
@CrossOrigin("http://localhost:4200/")
public interface UserRepository extends JpaRepository<User, Integer>{
	
	List<User> findByEmailid(String emailid);

}
