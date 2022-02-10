package com.example.jee.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Abonnement")
public class Abonnement {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
   private int id_abonn;
	@Getter
	@Setter
   private String email;
	@Getter
	@Setter
   private String nom ;
	@Getter
	@Setter
   private String prenom;
	@Getter
	@Setter
   private String tel;
	@Getter
	@Setter
   private String ville;
}  
