package com.grupo6.bookingviajes.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Table(name = "favorite_product")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Favorite {
@Id
@ManyToOne
@JoinColumn(name = "user_id")
    private User user;
@Id
@ManyToOne
@JoinColumn(name = "product_id")
    private Product producto;
}
