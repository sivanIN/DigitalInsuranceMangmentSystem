package com.example.insurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.insurance.entity.UserPolicy;

@RepositoryRestResource(path = "userpolicy")
@CrossOrigin("http://localhost:4200/")
public interface UserPolicyRepository extends JpaRepository<UserPolicy, Integer> {

}
