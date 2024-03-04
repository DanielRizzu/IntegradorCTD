package com.grupo6.bookingviajes;

import com.grupo6.bookingviajes.model.City;
import com.grupo6.bookingviajes.model.Country;
import com.grupo6.bookingviajes.model.Role;
import com.grupo6.bookingviajes.model.User;
import com.grupo6.bookingviajes.repository.CityRepository;
import com.grupo6.bookingviajes.repository.CountryRepository;
import com.grupo6.bookingviajes.repository.RoleRepository;
import com.grupo6.bookingviajes.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.PostConstruct;

@EnableWebMvc
@SpringBootApplication
public class BookingViajesApplication {

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private CityRepository cityRepository;
	@Autowired
	private CountryRepository countryRepository;


	@PostConstruct
	public void cargarDatos(){
		//CREACION COUNTRY Y CITY
		Country country = new Country(1,"Argentina","AR");
		countryRepository.save(country);

		City city = new City(1,"Buenos Aires",country);
		cityRepository.save(city);


		//CREACION DE ROLES
		Role rolUser = new Role(1,"USER");
		Role rolAdmin = new Role(2,"ADMIN");
		Role rolSuperUser = new Role(3,"SUPERUSER");

		//SE GUARDAN LOS ROLES EN LA BDD
		roleRepository.save(rolUser);
		roleRepository.save(rolAdmin);
		roleRepository.save(rolSuperUser);

		//CREACION SUPERUSUARIO
		User superusuario = new User(1,"Super"," "," ","super1234",true,city,rolSuperUser);

		////SE GUARDA EL USUARIO EN LA BDD
		userRepository.save(superusuario);

	}
	public static void main(String[] args) {
		SpringApplication.run(BookingViajesApplication.class, args);

	}


	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedOrigins("*")
						.allowedMethods("*")
						.allowedHeaders("*");
			}
		};
	}

}
