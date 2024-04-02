package com.grupo6.bookingviajes.model;


import javax.persistence.*;

@Entity
@Table(name = "favorite_product")
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    @Column(name = "user_id")
    private Integer userID;
    @Column(name = "product_id")
    private Integer productID;
}