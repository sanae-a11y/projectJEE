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
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jee.model.Activite;
import com.example.jee.repository.ActiviteRepository;

import  com.example.jee.exception.ResourceNotFoundException;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class ActiviteController {
	
	@Autowired 	ActiviteRepository repository;
	
	 @GetMapping("/activites")
	  public List<Activite> getAllActivite() {
	    System.out.println("Get all Activite...");
	 
	    List<Activite> Activite = new ArrayList<>();
	    repository.findAll().forEach(Activite::add);
	 
	    return Activite;
	  }
	
	@GetMapping("/activites/{id}")
	public ResponseEntity<Activite> getActiviteById(@PathVariable(value = "id") Long ActiviteId)
			throws ResourceNotFoundException {
		Activite Activite = repository.findById(ActiviteId)
				.orElseThrow(() -> new ResourceNotFoundException("Activite not found for this id :: " + ActiviteId));
		return ResponseEntity.ok().body(Activite);
	}

	@PostMapping("/activites")
	public Activite createActivite(@Valid @RequestBody Activite Activite) {
		return repository.save(Activite);
	}
	

	@DeleteMapping("/activites/{id}")
	public Map<String, Boolean> deleteActivite(@PathVariable(value = "id") Long ActiviteId)
			throws ResourceNotFoundException {
		Activite Activite = repository.findById(ActiviteId)
				.orElseThrow(() -> new ResourceNotFoundException("Activite not found  id :: " + ActiviteId));

		repository.delete(Activite);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	  
	 
	  @DeleteMapping("/activites/delete")
	  public ResponseEntity<String> deleteAllActivite() {
	    System.out.println("Delete All Activite...");
	 
	    repository.deleteAll();
	 
	    return new ResponseEntity<>("All Activite have been deleted!", HttpStatus.OK);
	  }
	 
	

	  @PutMapping("/activites/{id}")
	  public ResponseEntity<Activite> updateActivite(@PathVariable("id") long id, @RequestBody Activite Activite) {
	    System.out.println("Update Activite with ID = " + id + "...");
 
		 
	    Optional<Activite> ActiviteInfo = repository.findById(id);
	 
	    if (ActiviteInfo.isPresent()) {
	    	Activite  activite =  ActiviteInfo.get();
	    	    activite.setHoraire(Activite.getHoraire());
	    	    activite.setNom(Activite.getNom());
	    	    activite.setPrix(Activite.getPrix());
	    	    activite.setSrc(Activite.getSrc());
	    	   
       
	          
	      return new ResponseEntity<>(repository.save(activite), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
	  

}