package com.example.jee.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

 
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Activite")
public class Activite {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private long id_activite;
	private String nom ;
	private String description;
	private float prix;
	@Lob @JsonProperty("image")
	private byte[] src ;
	
	
	 
	public byte[] getSrc() {
		return src;
	}
	public void setSrc(byte[] src) {
		this.src = src;
	}
	public int getNbrmax() {
		return Nbrmax;
	}
	public void setNbrmax(int nbrmax) {
		Nbrmax = nbrmax;
	}
	@ManyToMany
	private List<Horaire> horaire;
	private int Nbrmax ;
	
	
	
	
	
	
	public long getId_activite() {
		return id_activite;
	}
	public void setId_activite(long id_activite) {
		this.id_activite = id_activite;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public float getPrix() {
		return prix;
	}
	public void setPrix(float prix) {
		this.prix = prix;
	}
	public List<Horaire> getHoraire() {
		return horaire;
	}
	public void setHoraire(List<Horaire> horaire) {
		this.horaire = horaire;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	

}
