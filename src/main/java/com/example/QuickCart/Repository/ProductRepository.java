package com.example.QuickCart.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.QuickCart.Model.Product;

    public interface ProductRepository extends JpaRepository<Product, Long> {
        
    }
