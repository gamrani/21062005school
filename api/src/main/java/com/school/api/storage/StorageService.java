package com.school.api.storage;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Service
public class StorageService {

	Logger log = LoggerFactory.getLogger(this.getClass().getName());
	private final Path rootLocation = Paths.get("upload-dir");
	
	// save a file /////
	public void store(MultipartFile file) {
		try {
			Files.copy(file.getInputStream(),this.rootLocation.resolve(file.getOriginalFilename()));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	// load a file /////
	public Resource loadFile(String filename) {
	
		Path file = rootLocation.resolve(filename);
		try {
			Resource resource = new UrlResource(file.toUri());
			
			if( resource.exists()|| resource.isReadable()) {
				return resource;
			}else {
				throw new RuntimeException("FAIL!");			
			}
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException("FAIL!");		
		}
	}
	
	// remove all uploaded files ///////
	public void deleteAll() {FileSystemUtils.deleteRecursively(rootLocation.toFile());}
	
	// create upload directory ///////
	public void init() {
		try {
			Files.createDirectory(rootLocation);
		} catch (IOException e) {
			throw new RuntimeException("Could not initialize storage!");
		}
	}
	
	
	
}
