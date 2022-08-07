package com.example.insurance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.insurance.entity.Hospital;

@RepositoryRestResource(path = "hospital")
@CrossOrigin("http://localhost:4200/")
public interface HospitalRepository extends JpaRepository<Hospital, Integer> {
	
	List<Hospital> findByHospitalname(String hospitalname);
	List<Hospital> findByIllnessContainsIgnoreCase(String illness);

}
