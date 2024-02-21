package com.grupo6.bookingviajes.repository;

import com.grupo6.bookingviajes.model.City;
import com.grupo6.bookingviajes.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {
}
