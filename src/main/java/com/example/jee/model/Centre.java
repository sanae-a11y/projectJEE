package com.example.jee.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Centre")
public class Centre {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
     private int id_center;
	@Getter
	@Setter
     private String nom ;
     
}
