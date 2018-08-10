package com.school.api.entities;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Student")
public class Student extends User {

    @Column
	private String cne;
    @Column
    private String level;

	public Student() {
		super();
	}

	public Student(String cne) {
		super();
		this.cne = cne;
	}

	public String getCne() {
		return cne;
	}

	public void setCne(String cne) {
		this.cne = cne;
	}
	
	
}
