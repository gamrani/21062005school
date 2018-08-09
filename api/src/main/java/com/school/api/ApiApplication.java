package com.school.api;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.school.api.storage.StorageService;

@SpringBootApplication
public class ApiApplication {
	
	@Resource
	StorageService storageService;
	
	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}
	
	public void run(String... arg) throws Exception {
		storageService.deleteAll();
		storageService.init();
	}
}
