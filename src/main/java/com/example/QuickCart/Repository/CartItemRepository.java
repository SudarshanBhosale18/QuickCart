package com.example.QuickCart.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.QuickCart.Model.CartItem;

import java.util.List;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByUserId(Long userId);
}