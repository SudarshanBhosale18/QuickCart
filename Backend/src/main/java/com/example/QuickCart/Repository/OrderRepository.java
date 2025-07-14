package com.example.QuickCart.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.QuickCart.Model.Order;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserId(Long userId);
}
