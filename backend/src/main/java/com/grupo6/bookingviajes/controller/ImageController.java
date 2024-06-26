package com.grupo6.bookingviajes.controller;

import com.grupo6.bookingviajes.model.Image;
import com.grupo6.bookingviajes.model.ProductAttribute;
import com.grupo6.bookingviajes.services.ImageService;
import com.grupo6.bookingviajes.services.impl.ImageServiceImpl;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Api(tags="Images")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/images")
public class ImageController {
    @Autowired
    private ImageServiceImpl imageService;

    @GetMapping
    public ResponseEntity<List<Image>> getAllImages() {
        return ResponseEntity.ok(imageService.getAllImages());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getImageById(@PathVariable Integer id) {
        Optional<Image> findImage = imageService.getImageById(id);
        if (findImage.isPresent()) {
            return ResponseEntity.ok(findImage.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/create/{productId}")
    public ResponseEntity<Image> createImage(@RequestBody Image image, @PathVariable Integer productId) {
        return ResponseEntity.ok(imageService.saveImage(image,productId));
    }

    @PostMapping("/create")
    public ResponseEntity<Image> createImage(@RequestBody Image image) {
        return ResponseEntity.ok(imageService.save(image));
    }

    @PutMapping("/update/{productId}")
    public ResponseEntity<?> updateImage(@RequestBody Image image, @PathVariable Integer productId) throws Exception {
        Optional<Image> findImage = imageService.getImageById(image.getId());
        if (findImage.isPresent()) {
            return ResponseEntity.ok(imageService.updateImage(image,productId));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La imagen con ID: " + image.getId() + " no se encuentra");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteImage(@PathVariable Integer id) {
        if (imageService.getImageById(id).isPresent()) {
            imageService.deleteImageById(id);
            return ResponseEntity.ok("Se eliminó con éxito la imagen con ID: " + id);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontró la imagen con ID: " + id);
    }


}
