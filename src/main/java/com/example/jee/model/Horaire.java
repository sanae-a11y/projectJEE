package com.example.jee.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
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
@Table(name = "Horaire")

public class Horaire {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Getter
	@Setter
	private String jour;
	@Getter
	@Setter
	private int heure_debut;
	@Getter
	@Setter
	private int heure__fin;
	@Getter
	@Setter
	@ManyToMany
	private List<Activite> activite;
	

}
