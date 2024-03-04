package com.grupo6.bookingviajes.repository;

import com.grupo6.bookingviajes.model.City;
import com.grupo6.bookingviajes.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<Country, Integer> {
}
