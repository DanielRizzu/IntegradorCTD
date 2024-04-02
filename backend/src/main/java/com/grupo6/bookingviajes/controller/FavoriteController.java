package com.grupo6.bookingviajes.controller;

import com.grupo6.bookingviajes.model.Favorite;
import com.grupo6.bookingviajes.services.FavoriteService;
import com.grupo6.bookingviajes.services.impl.FavoriteServiceImpl;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Api(tags="Favorites")
@CrossOrigin (origins = "*")
@RestController
@RequestMapping("/favorites")
public class FavoriteController {

   @Autowired
   FavoriteServiceImpl favoriteService;

   @GetMapping()
    public ResponseEntity<List<Favorite>> listarFavoritos(){
       List<Favorite> resultado = favoriteService.getAllFavorites();
       return ResponseEntity.ok(resultado);

   }

   @GetMapping("/{id}")
    public ResponseEntity<List<Favorite>> listarFavoritosUsuario(@PathVariable Integer id){
        List<Favorite> resultado = favoriteService.getByUser(id);
        return ResponseEntity.ok(resultado);

   }

   @PostMapping("/create")
    public ResponseEntity<Favorite> crearFavorito(@RequestBody Favorite favorito){
       return ResponseEntity.ok(favoriteService.saveFavorite(favorito));
   }

   @DeleteMapping("/{userId}/{productId}")
    public ResponseEntity eliminarFavorito(@PathVariable Integer userId, Integer productId){
       Optional<Favorite> resultado = Optional.ofNullable(favoriteService.getByBoth(userId, productId));
       if(resultado.isPresent()){
           return ResponseEntity.ok(resultado);
       }else{
           return (ResponseEntity) ResponseEntity.status(HttpStatus.NOT_FOUND);
       }
   }


}
