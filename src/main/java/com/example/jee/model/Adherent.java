package com.example.jee.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

 

 
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Adherent")

public class Adherent {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id_adherant;
	@Getter
	@Setter
	private String nom ;
	@Getter
	@Setter
	private String prenom;
	@Getter
	@Setter
	private String password;
	@Getter
	@Setter
	private String sexe;
	public long getId_adherant() {
		return id_adherant;
	}
	public void setId_adherant(long id_adherant) {
		this.id_adherant = id_adherant;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getSexe() {
		return sexe;
	}
	public void setSexe(String sexe) {
		this.sexe = sexe;
	}
	public List<Activite> getActivites() {
		return activites;
	}
	public void setActivites(List<Activite> activites) {
		this.activites = activites;
	}
	@OneToMany
	private List<Activite> activites ;

}
