package com.grupo6.bookingviajes.services;

import com.grupo6.bookingviajes.model.Favorite;
import com.grupo6.bookingviajes.model.Product;

import java.util.List;

public interface FavoriteService {
    List<Favorite> getAllFavorites();
    List<Favorite> getByUserId(Integer userId);
    List<Favorite> getByProductId(Integer productId);
    Favorite saveFavorite(Favorite favorite);
    Favorite updateProduct(Favorite favorite);
    void deleteFavorite(Integer userId, Integer productId);
}
