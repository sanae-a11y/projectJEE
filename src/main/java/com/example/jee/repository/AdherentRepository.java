package com.example.jee.repository;

 
 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jee.model.Adherent;

@Repository
public interface AdherentRepository extends JpaRepository<Adherent, Long>{

//	Optional<Adherent> findByNom(String nom);

}