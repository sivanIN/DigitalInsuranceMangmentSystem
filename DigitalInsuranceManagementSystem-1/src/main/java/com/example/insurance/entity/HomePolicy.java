package com.example.insurance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "homepolicy")
public class HomePolicy {
	
	 @Id
	 @Column(name = "policyid")
	 private Integer policyid;
	 
	 @Column(name = "policyname")
	 private String policyname;
	 
	 @Column(name = "policydescription")
	 private String policydescription;
	 
	 @Column(name = "imageurl")
	 private String imageurl;
	 
	 @Column(name = "sumassurance")
	 private Integer sumassurance;
	 
	 @Column(name = "policyterm")
	 private Integer policyterm;
	 
	 @Column(name = "location")
	 private String location;
	 
	 @Column(name = "premium")
	 private Integer premium;

	public HomePolicy() {
		super();
		// TODO Auto-generated constructor stub
	}

	public HomePolicy(Integer policyid, String policyname, String policydescription, String imageurl,
			Integer sumassurance, Integer policyterm, String location, Integer premium) {
		super();
		this.policyid = policyid;
		this.policyname = policyname;
		this.policydescription = policydescription;
		this.imageurl = imageurl;
		this.sumassurance = sumassurance;
		this.policyterm = policyterm;
		this.location = location;
		this.premium = premium;
	}

	public Integer getPolicyid() {
		return policyid;
	}

	public void setPolicyid(Integer policyid) {
		this.policyid = policyid;
	}

	public String getPolicyname() {
		return policyname;
	}

	public void setPolicyname(String policyname) {
		this.policyname = policyname;
	}

	public String getPolicydescription() {
		return policydescription;
	}

	public void setPolicydescription(String policydescription) {
		this.policydescription = policydescription;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	public Integer getSumassurance() {
		return sumassurance;
	}

	public void setSumassurance(Integer sumassurance) {
		this.sumassurance = sumassurance;
	}

	public Integer getPolicyterm() {
		return policyterm;
	}

	public void setPolicyterm(Integer policyterm) {
		this.policyterm = policyterm;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Integer getPremium() {
		return premium;
	}

	public void setPremium(Integer premium) {
		this.premium = premium;
	}
	
	

}
