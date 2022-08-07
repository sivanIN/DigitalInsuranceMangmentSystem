package com.example.insurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.insurance.entity.Admin;

@RepositoryRestResource(path = "admin")
@CrossOrigin("http://localhost:4200/")
public interface AdminRepository extends JpaRepository<Admin, String> {
	

}
