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
    public List<Favorite> getAllFavorites() {
        return null;
    }

    @Override
    public List<Favorite> getByUserId(Integer userId) {
        return null;
    }

    @Override
    public List<Favorite> getByProductId(Integer productId) {
        return null;
    }

    @Override
    public Favorite saveFavorite(Favorite favorite) {
        return null;
    }

    @Override
    public Favorite updateProduct(Favorite favorite) {
        return null;
    }

    @Override
    public void deleteFavorite(Integer userId, Integer productId) {

    }
}
