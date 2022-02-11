package com.example.jee.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
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
@Table(name = "Avis")
public class Avis {
	public Adherent getAdherent() {
		return adherent;
	}
	public void setAdherent(Adherent adherent) {
		this.adherent = adherent;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private int id_avis;
	@Getter
	@Setter
    private String avis;
    @OneToOne
	private Adherent adherent;
    
    
    
    
	public int getId_avis() {
		return id_avis;
	}
	public void setId_avis(int id_avis) {
		this.id_avis = id_avis;
	}
	public String getAvis() {
		return avis;
	}
	public void setAvis(String avis) {
		this.avis = avis;
	}
	
}
 
