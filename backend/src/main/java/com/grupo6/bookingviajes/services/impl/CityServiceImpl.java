package com.grupo6.bookingviajes.services.impl;
import com.grupo6.bookingviajes.model.City;
import com.grupo6.bookingviajes.repository.CityRepository;
import com.grupo6.bookingviajes.services.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityServiceImpl implements CityService {

    @Autowired
    private CityRepository cityRepository;

    @Override
    public List<City> getAllCities() {
        return cityRepository.findAll();
    }

    @Override
    public Optional<City> getCityById(Integer id) {
        return cityRepository.findById(id);
    }

    @Override
    public City saveCity(City city) {
        return cityRepository.save(city);
    }
    @Override
    public City updateCity(City city) {
        return cityRepository.save(city);
    }

    @Override
    public void deleteCityById(Integer id) {
        cityRepository.deleteById(id);
    }

}
