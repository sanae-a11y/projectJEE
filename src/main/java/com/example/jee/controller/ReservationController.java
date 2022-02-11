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
import com.example.jee.model.Reservation;
import com.example.jee.repository.ActiviteRepository;
import com.example.jee.repository.ReservationRepository;
import  com.example.jee.exception.ResourceNotFoundException;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class ReservationController {
	
	@Autowired 	 ReservationRepository repository;
	
	 @GetMapping("/reservations")
	  public List<Reservation> getAllReservation() {
	    System.out.println("Get all Reservation...");
	 
	    List<Reservation> Reservation = new ArrayList<>();
	    repository.findAll().forEach(Reservation::add);
	 
	    return Reservation;
	  }
	
	@GetMapping("/reservations/{id}")
	public ResponseEntity<Reservation> getReservationById(@PathVariable(value = "id") Long ActiviteId)
			throws ResourceNotFoundException {
		Reservation Reservation = repository.findById(ActiviteId)
				.orElseThrow(() -> new ResourceNotFoundException("Activite not found for this id :: " + ActiviteId));
		return ResponseEntity.ok().body(Reservation);
	}

	@PostMapping("/reservations")
	public @Valid Reservation createReservation(@Valid @RequestBody Reservation Reservation) {
		return repository.save(Reservation);
	}
	

	@DeleteMapping("/reservations/{id}")
	public Map<String, Boolean> deleteActivite(@PathVariable(value = "id") Long ActiviteId)
			throws ResourceNotFoundException {
		Reservation Reservation = repository.findById(ActiviteId)
				.orElseThrow(() -> new ResourceNotFoundException("Reservation not found  id :: " + ActiviteId));

		repository.delete(Reservation);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	  
	 
	  @DeleteMapping("/reservations/delete")
	  public ResponseEntity<String> deleteAllActivite() {
	    System.out.println("Delete All Activite...");
	 
	    repository.deleteAll();
	 
	    return new ResponseEntity<>("All Activite have been deleted!", HttpStatus.OK);
	  }
	 
	

	  @PutMapping("/reservations/{id}")
	  public ResponseEntity<Reservation> updateActivite(@PathVariable("id") long id, @RequestBody Reservation Reservation) {
	    System.out.println("Update Activite with ID = " + id + "...");
 
		 
	    Optional<Reservation>  ReservationInfo = repository.findById(id);
	 
	    if (ReservationInfo.isPresent()) {
	    	Reservation   reservation =   ReservationInfo.get();
	    	 reservation.setEmail( Reservation.getEmail());
	    	 reservation.setNom(Reservation.getNom());
	    	 reservation.setPrenom(Reservation.getPrenom());
	    	 reservation.setVille(Reservation.getVille());
	    	 reservation.setTel(reservation.getTel());
	    	 return new ResponseEntity<>(repository.save(reservation), HttpStatus.OK);
       
	          
	      
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
	  

}