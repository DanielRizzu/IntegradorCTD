package com.grupo6.bookingviajes.repository;

import com.grupo6.bookingviajes.model.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface FavoriteRepository extends JpaRepository<Favorite,Integer> {
    @Query(value = "SELECT * FROM favorite_product WHERE user_id = ?1 AND product_id = ?2", nativeQuery = true)
    Favorite getByBothId(Integer userId, Integer productId);

    @Query(value = "SELECT * FROM favorite_product WHERE user_id = ?1", nativeQuery = true)
    List<Favorite> getByUserId(Integer userId);

    @Query(value = "SELECT * FROM favorite_product WHERE product_id = ?1", nativeQuery = true)
    List<Favorite> getByProductId(Integer productId);

    @Query(value = "DELETE * FROM favorite_product WHERE user_id=?1 AND product_id = ?2", nativeQuery = true)
    void deleteFavorite(Integer userId, Integer productId);
}
