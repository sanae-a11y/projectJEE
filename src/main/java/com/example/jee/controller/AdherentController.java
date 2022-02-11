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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jee.model.Adherent;
import com.example.jee.repository.AdherentRepository;

import  com.example.jee.exception.ResourceNotFoundException;

@RestController

 
@RequestMapping("/api")
//@CrossOrigin(origins="http://localhost:3000",allowedHeaders="*")
@CrossOrigin("http://localhost:3000")
public class AdherentController {
	
	@Autowired 	AdherentRepository repository;
	
	 @GetMapping("/adherents")
	  public List<Adherent> getAllAdherent() {
	    System.out.println("Get all Adherents...");
	 
	    List<Adherent> Adherent = new ArrayList<>();
	    repository.findAll().forEach(Adherent::add);
	 
	    return Adherent;
	  }
	
	@GetMapping("/adherents/{id}")
	public ResponseEntity<Adherent> getAdherentById(@PathVariable(value = "id") Long AdherentId)
			throws ResourceNotFoundException {
		Adherent Adherent = repository.findById(AdherentId)
				.orElseThrow(() -> new ResourceNotFoundException("Adherent not found for this id :: " + AdherentId));
		return ResponseEntity.ok().body(Adherent);
	}
//	@GetMapping("/adherents/{nom}")
//	public ResponseEntity<Adherent> getAdherentByName(@PathVariable(value = "nom") String AdherentName)
//			throws ResourceNotFoundException {
//		Adherent Adherent = repository.findByNom(AdherentName)
//				.orElseThrow(() -> new ResourceNotFoundException("Adherent not found for this name :: " + AdherentName));
//		return ResponseEntity.ok().body(Adherent);
//	}

	@PostMapping("/adherents")
	public Adherent createAdherent(@Valid @RequestBody Adherent Adherent) {
		return repository.save(Adherent);
	}
	

	@DeleteMapping("/adherents/{id}")
	public Map<String, Boolean> deleteAdherent(@PathVariable(value = "id") Long AdherentId)
			throws ResourceNotFoundException {
		Adherent Adherent = repository.findById(AdherentId)
				.orElseThrow(() -> new ResourceNotFoundException("Adherent not found  id :: " + AdherentId));

		repository.delete(Adherent);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	  
	 
	  @DeleteMapping("/adherents/delete")
	  public ResponseEntity<String> deleteAllAdherent() {
	    System.out.println("Delete All Adherents...");
	 
	    repository.deleteAll();
	 
	    return new ResponseEntity<>("All Adherents have been deleted!", HttpStatus.OK);
	  }
	 
	

	  @PutMapping("/adherents/{id}")
	  public ResponseEntity<Adherent> updateAdherent(@PathVariable("id") long id, @RequestBody Adherent Adherent) {
	    System.out.println("Update Adherent with ID = " + id + "...");
 
		 
	    Optional<Adherent> AdherentInfo = repository.findById(id);
	 
	    if (AdherentInfo.isPresent()) {
	    	Adherent  adherent =  AdherentInfo.get();
	    	    
	    	   adherent.setNom(Adherent.getNom());
	    	   adherent.setPrenom(Adherent.getPrenom());
	    	   adherent.setActivites(Adherent.getActivites());
	    	   adherent.setPassword(Adherent.getPassword());
	    	   adherent.setSexe(Adherent.getPassword()) ;
       
	          
	      return new ResponseEntity<>(repository.save(Adherent), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
	  

}