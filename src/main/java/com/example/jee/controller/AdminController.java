package com.example.jee.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jee.model.Admin;
import com.example.jee.repository.AdminRepository;

import  com.example.jee.exception.ResourceNotFoundException;

@RestController
@RequestMapping("/api")
public class AdminController {
	
	@Autowired 	AdminRepository repository;
	
	 @GetMapping("/admins")
	  public List<Admin> getAllAdmins() {
	    System.out.println("Get all Admins...");
	 
	    List<Admin> Admin = new ArrayList<>();
	    repository.findAll().forEach(Admin::add);
	 
	    return Admin;
	  }
	
	@GetMapping("/admins/{id}")
	public ResponseEntity<Admin> getAdminById(@PathVariable(value = "id") Long AdminId)
			throws ResourceNotFoundException {
		Admin Admin = repository.findById(AdminId)
				.orElseThrow(() -> new ResourceNotFoundException("Agent not found for this id :: " + AdminId));
		return ResponseEntity.ok().body(Admin);
	}

	@PostMapping("/admins")
	public Admin createAdmin(@Valid @RequestBody Admin Admin) {
		return repository.save(Admin);
	}
	

	@DeleteMapping("/agents/{id}")
	public Map<String, Boolean> deleteAdmin(@PathVariable(value = "id") Long AdminId)
			throws ResourceNotFoundException {
		Admin Admin = repository.findById(AdminId)
				.orElseThrow(() -> new ResourceNotFoundException("Agent not found  id :: " + AdminId));

		repository.delete(Admin);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	  
	 
	  @DeleteMapping("/agents/delete")
	  public ResponseEntity<String> deleteAllAdherents() {
	    System.out.println("Delete All Agents...");
	 
	    repository.deleteAll();
	 
	    return new ResponseEntity<>("All Agents have been deleted!", HttpStatus.OK);
	  }
	 
	

	  @PutMapping("/admins/{id}")
	  public ResponseEntity<Admin> updateAdmin(@PathVariable("id") long id, @RequestBody Admin Admin) {
	    System.out.println("Update Agent with ID = " + id + "...");
	 
	    Optional<Admin> AdminInfo = repository.findById(id);
	 
	    if (AdminInfo.isPresent()) {
	    	Admin admin = AdminInfo.get();
 
              admin.setCentre(Admin.getCentre()) ;
              admin.setNom(Admin.getNom());
              admin.setPrenom(Admin.getPrenom()) ;
	      return new ResponseEntity<>(repository.save(admin), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }

}
