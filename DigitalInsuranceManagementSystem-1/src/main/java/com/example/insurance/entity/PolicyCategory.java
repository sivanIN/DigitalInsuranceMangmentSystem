package com.example.insurance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "policycategory")
public class PolicyCategory {

	@Id
	@Column(name = "categoryid")
	private Integer categoryid;
	
	@Column(name = "categoryname")
	private String categoryname;

	public PolicyCategory() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PolicyCategory(Integer categoryid, String categoryname) {
		super();
		this.categoryid = categoryid;
		this.categoryname = categoryname;
	}

	public Integer getCategoryid() {
		return categoryid;
	}

	public void setCategoryid(Integer categoryid) {
		this.categoryid = categoryid;
	}

	public String getCategoryname() {
		return categoryname;
	}

	public void setCategoryname(String categoryname) {
		this.categoryname = categoryname;
	}
	
	
	
}
