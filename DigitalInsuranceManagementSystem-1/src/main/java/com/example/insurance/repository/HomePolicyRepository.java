package com.example.insurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.insurance.entity.HomePolicy;

@RepositoryRestResource(path = "homepolicy")
@CrossOrigin("http://localhost:4200/")
public interface HomePolicyRepository extends JpaRepository<HomePolicy, Integer>{

}
