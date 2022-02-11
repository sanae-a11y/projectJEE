package com.example.jee.repository;

 


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
 
import com.example.jee.model.Reservation;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long>{
	
	
}

