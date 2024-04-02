package com.grupo6.bookingviajes.services.impl;

import com.grupo6.bookingviajes.model.Favorite;
import com.grupo6.bookingviajes.repository.FavoriteRepository;
import com.grupo6.bookingviajes.services.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FavoriteServiceImpl implements FavoriteService {
    @Autowired
    private FavoriteRepository favoriteRepository;

    @Override
    public Favorite getByBothId(Integer userId, Integer productId) {
        return favoriteRepository.getByBothId(userId,productId);
    }

    @Override
    public List<Favorite> getAllFavorites() {
        return favoriteRepository.findAll();
    }

    @Override
    public List<Favorite> getByUserId(Integer userId) {
        return favoriteRepository.getByUserId(userId);
    }

    @Override
    public List<Favorite> getByProductId(Integer productId) {
        return favoriteRepository.getByProductId(productId);
    }

    @Override
    public Favorite saveFavorite(Favorite favorite) {
        return favoriteRepository.save(favorite);
    }

    @Override
    public void deleteFavorite(Integer userId, Integer productId) {
        favoriteRepository.deleteFavorite(userId,productId);
    }
}
