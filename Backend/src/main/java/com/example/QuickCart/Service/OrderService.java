package com.example.QuickCart.Service;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.QuickCart.Model.CartItem;
import com.example.QuickCart.Model.Order;
import com.example.QuickCart.Repository.CartItemRepository;
import com.example.QuickCart.Repository.OrderRepository;
import com.example.QuickCart.Repository.UserRepository;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private UserRepository userRepository;

    public Order placeOrder(Long userId) {
        List<CartItem> items = cartItemRepository.findByUserId(userId);
        double total = items.stream().mapToDouble(i -> i.getProduct().getPrice() * i.getQuantity()).sum();
        Order order = new Order(null, userRepository.findById(userId).orElseThrow(), new Date(userId), total);
        cartItemRepository.deleteAll(items);
        return orderRepository.save(order);
    }

    public List<Order> getUserOrders(Long userId) {
        return orderRepository.findByUserId(userId);
    }
}
