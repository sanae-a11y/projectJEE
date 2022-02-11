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
@Table(name = "Reservation")
public class  Reservation  {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
   private Long id_abonn;
	@Getter
	@Setter
   private String email;
	@Getter
	@Setter
   private String nom ;
	@Getter
	@Setter
   private String prenom;
   
	
	
	
	
	
	public Long getId_abonn() {
		return id_abonn;
	}
	public void setId_abonn(Long id_abonn) {
		this.id_abonn = id_abonn;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getVille() {
		return ville;
	}
	public void setVille(String ville) {
		this.ville = ville;
	}
	@Getter
	@Setter
   private String tel;
	@Getter
	@Setter
   private String ville;
}  
