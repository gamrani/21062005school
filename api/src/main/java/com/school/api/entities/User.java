package com.school.api.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Inheritance
@DiscriminatorColumn(name="profile")
@Table(name="user")
public class User implements Serializable{
	
	@Id
	@GeneratedValue
	private Long id;
	@Column
	private String firstName;
	@Column
	private String lastName;
	@Column
	private int age;
    @Column
	private String cin;
    @Column
    private int phone;
	
	
	public User() {
		super();
	}
	public User(String firstName, String lastName, int age, String cin, int phone) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.cin = cin;
		this.phone = phone;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getCin() {
		return cin;
	}
	public void setCin(String cin) {
		this.cin = cin;
	}
	public int getPhone() {
		return phone;
	}
	public void setPhone(int phone) {
		this.phone = phone;
	}
	
	
}
