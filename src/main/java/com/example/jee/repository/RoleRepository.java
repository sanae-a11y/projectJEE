package com.example.jee.repository;

import  com.example.jee.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role,Long> {
       Role findByLibelle(String libelle) ;
}
