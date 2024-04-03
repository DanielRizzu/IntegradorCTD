package com.grupo6.bookingviajes.security;

import com.grupo6.bookingviajes.security.jwt.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    /*@Autowired
    private MyUserDetailsService myUserDetailsService;*/
    @Autowired
    private UserDetailsService userDetailsService;

    /*@Autowired
    private JwtRequestFilter jwtRequestFilter;*/

    @Bean
    public JwtRequestFilter authenticationJwtTokenFilter() {
        return new JwtRequestFilter();
    }

    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.userDetailsService(userDetailsService);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    /*
   @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }*/

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().authorizeRequests()
                .antMatchers( "/v2/api-docs", "/swagger-ui/**",
                        "/swagger-resources/**").permitAll()
                .antMatchers("/authenticate").permitAll()
                .antMatchers("/users/create").permitAll()
                .antMatchers("/favorites", "/favorites/**").permitAll()
                .antMatchers("/products", "/cities", "/categories").permitAll()
                /* USER */
                .antMatchers("/reservations/create").permitAll()
                /* ADMIN */
                .antMatchers("/cities/create", "/cities/update", "/cities/delete/{id}").hasAuthority("ADMIN")
                .antMatchers("/products/create", "/products/update", "/products/delete/{id}").hasAuthority("ADMIN")
                .antMatchers("/attributes/**").hasAuthority("ADMIN")
                .antMatchers("/images/**").hasAuthority("ADMIN")

                /* SUPERUSER */
                .antMatchers("/users/update", "/users/delete/{id}").hasAuthority("SUPERUSER")
                .antMatchers("/cities/create", "/cities/update", "/cities/delete/{id}").hasAuthority("SUPERUSER")
                .antMatchers("/products/create", "/products/update", "/products/delete/{id}").hasAnyAuthority("ADMIN", "SUPERUSER")
                .antMatchers("/attributes/**").hasAuthority("SUPERUSER")
                .antMatchers("/images/**").hasAuthority("SUPERUSER")

                .anyRequest().permitAll();
                //.anyRequest().authenticated();

        http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    }

}
