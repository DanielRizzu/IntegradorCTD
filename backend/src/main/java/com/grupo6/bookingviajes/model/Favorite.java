package com.grupo6.bookingviajes.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

@Entity
@Table(name = "favorite_product")

public class Favorite {
    @Id
    @JoinColumn(name = "user_id")
    private User usuario;
    @Id
    @JoinColumn(name = "product_id")
    private Product producto;
}
