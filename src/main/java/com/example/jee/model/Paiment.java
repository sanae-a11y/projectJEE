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
@Table(name = "Paiment")
public class Paiment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private int id_paiment;
	@Getter
	@Setter
	private double totale;

}
