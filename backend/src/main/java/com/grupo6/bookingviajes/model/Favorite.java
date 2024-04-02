package com.grupo6.bookingviajes.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

//@Entity
//@Table(name = "favorite_product")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Favorite {
  //  @Id
    //@ManyToOne
    private User user;
    //@Id
    //@ManyToOne
    private Product producto;
}
