package com.example.jee.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

import static javax.persistence.FetchType.EAGER;

@SuppressWarnings("serial")
@Data
@EnableWebSecurity
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users",
uniqueConstraints = { 
		@UniqueConstraint(columnNames = "username"
				+ ""),
		@UniqueConstraint(columnNames = "email") 
	})
public class User implements Serializable {
	@Id
	  @GeneratedValue(strategy = GenerationType.AUTO)
	  private long id;
	  @NotBlank
	  @Size(max = 20)
	  private String username;
	  @NotBlank
	  @Size(max = 30)
	  @Email
	  private String email;
	  @Getter
	  @Setter
	  private String password;
	  @ManyToMany(fetch = EAGER)
	  private Collection<Role> roles = new ArrayList<>();
	  @Getter
	  @Setter
	  private String[] authorities ;
	  @Getter
	  @Setter
	  private boolean isActive;
	  @Getter
	  @Setter
	  private boolean isNotLocked ;
 


}