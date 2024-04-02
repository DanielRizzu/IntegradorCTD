package com.grupo6.bookingviajes.controller;

import com.grupo6.bookingviajes.model.Favorite;
import com.grupo6.bookingviajes.services.FavoriteService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api(tags="Favorites")
@RestController
@RequestMapping("/favorites")
public class FavoriteController {

   @Autowired
   FavoriteService favoriteService;

   @GetMapping
    public ResponseEntity<List<Favorite>> listarFavoritos(){
       return ResponseEntity.ok(favoriteService.getAllFavorites());
   }
}
