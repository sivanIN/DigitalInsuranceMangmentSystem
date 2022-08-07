package com.example.insurance.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "userid")
	 private Integer userid;
	
	@Column(name = "emailid")
	 private String emailid;
	
	@Column(name = "password")
	 private String password;
	
	@Column(name = "mobilenumber")
	 private Double mobilenumber;
	
	@Column(name = "address")
	 private String address;
	
	@Column(name = "location")
	 private String location;
	
	@Column(name = "birthdate")
	 private Date birthdate;
	
	 public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(Integer userid, String emailid, String password, Double mobilenumber, String address, String location,
			Date birthdate) {
		super();
		this.userid = userid;
		this.emailid = emailid;
		this.password = password;
		this.mobilenumber = mobilenumber;
		this.address = address;
		this.location = location;
		this.birthdate = birthdate;
	}

	public Integer getUserid() {
		return userid;
	}

	public void setUserid(Integer userid) {
		this.userid = userid;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Double getMobilenumber() {
		return mobilenumber;
	}

	public void setMobilenumber(Double mobilenumber) {
		this.mobilenumber = mobilenumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}
	 
	 
}
