package com.school.api.entities;

import java.io.Serializable;
import java.time.LocalDate;

public class Line implements Serializable {

	private String name;
	private LocalDate date;
	private Long age;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public Long getAge() {
		return age;
	}
	public void setAge(Long age) {
		this.age = age;
	}
	public Line(String name, LocalDate date) {
		super();
		this.name = name;
		this.date = date;
	}
	public Line() {
		super();
	}
	@Override
	public String toString() {
		return "Line [name=" + name + ", date=" + date + ", age=" + age + "]";
	}
	
	
}
