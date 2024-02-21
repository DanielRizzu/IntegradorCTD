package com.grupo6.bookingviajes.services;

import com.grupo6.bookingviajes.model.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    List<Category> listCategories();
    Optional<Category> searchCategory(Integer id);
    Category saveCategory(Category category);
    Category updateCategory(Category category);
    void deleteCategory(Integer id);
}
