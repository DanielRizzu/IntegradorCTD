package com.grupo6.bookingviajes.controller;

import com.grupo6.bookingviajes.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;



public class WebController {
    @Autowired
    private ProductService productService;

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }

}

