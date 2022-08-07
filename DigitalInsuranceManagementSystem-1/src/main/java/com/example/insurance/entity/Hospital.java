package com.example.insurance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "hospital")
public class Hospital {

	@Id
	@Column(name = "hospitalid")
	private Integer hospitalid;
	
	@Column(name = "hospitalname")
	private String hospitalname;
	
	@Column(name = "illness")
	private String illness;

	public Hospital() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Hospital(Integer hospitalid, String hospitalname, String illness) {
		super();
		this.hospitalid = hospitalid;
		this.hospitalname = hospitalname;
		this.illness = illness;
	}

	public Integer getHospitalid() {
		return hospitalid;
	}

	public void setHospitalid(Integer hospitalid) {
		this.hospitalid = hospitalid;
	}

	public String getHospitalname() {
		return hospitalname;
	}

	public void setHospitalname(String hospitalname) {
		this.hospitalname = hospitalname;
	}

	public String getIllness() {
		return illness;
	}

	public void setIllness(String illness) {
		this.illness = illness;
	}
	
	
}
