package com.school.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.school.api.entities.Student;
import com.school.api.repositories.UserRepository;

@Service
public class StudentServices {

	@Autowired
	UserRepository studentRepository;
	
	public ResponseEntity<Student> saveStudent(Student student) {
		try {
			studentRepository.save(student);
			return new ResponseEntity<Student>(student, HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<Student>(student, HttpStatus.EXPECTATION_FAILED);
		}
		
	}
}
