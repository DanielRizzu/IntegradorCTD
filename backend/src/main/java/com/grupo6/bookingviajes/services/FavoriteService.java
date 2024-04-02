package com.grupo6.bookingviajes.services;

import com.grupo6.bookingviajes.model.Favorite;
import com.grupo6.bookingviajes.model.Product;

import java.util.List;

public interface FavoriteService {
    Favorite getByBoth(Integer userId, Integer productId);
    List<Favorite> getAllFavorites();
    List<Favorite> getByUser(Integer userId);
    List<Favorite> getByProduct(Integer productId);
    Favorite saveFavorite(Favorite favorite);
    void deleteFavorite(Integer userId, Integer productId);
}
