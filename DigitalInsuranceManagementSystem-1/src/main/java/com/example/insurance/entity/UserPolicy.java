package com.example.insurance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "userpolicy")
public class UserPolicy {
	
	@Id
	@Column(name = "userid")
	 private Integer userid;
	
	@Column(name = "policyid")
	 private Integer policyid;
	
	@Column(name ="payment")
	private Integer payment;
	
	@Column(name ="status")
	private String status;

	public UserPolicy() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserPolicy(Integer userid, Integer policyid, Integer payment, String status) {
		super();
		this.userid = userid;
		this.policyid = policyid;
		this.payment = payment;
		this.status = status;
	}

	public Integer getUserid() {
		return userid;
	}

	public void setUserid(Integer userid) {
		this.userid = userid;
	}

	public Integer getPolicyid() {
		return policyid;
	}

	public void setPolicyid(Integer policyid) {
		this.policyid = policyid;
	}

	public Integer getPayment() {
		return payment;
	}

	public void setPayment(Integer payment) {
		this.payment = payment;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}


	

}
