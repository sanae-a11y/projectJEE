package com.example.jee.request;


import com.example.jee.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.*;
import java.util.ArrayList;
import java.util.Collection;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
	@NotBlank
    @Size(min = 3, max = 40)
    private String username;
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    @NotBlank
    private  Collection<Role> roles = new ArrayList<>();
    @NotBlank
    @Size(min = 6, max = 20)
    private String password;


}
