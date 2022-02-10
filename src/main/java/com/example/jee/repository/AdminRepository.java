package com.example.jee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jee.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long>{

}
