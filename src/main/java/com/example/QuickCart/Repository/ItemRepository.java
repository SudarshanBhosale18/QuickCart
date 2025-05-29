package com.example.QuickCart.Repository;

import com.example.QuickCart.Model.CartItem;
import com.example.QuickCart.Model.Order;
import com.example.QuickCart.Model.Product;
import com.example.QuickCart.Model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public class ItemRepository {
    
    public interface UserRepository extends JpaRepository<User, Long> {}
    public interface ProductRepository extends JpaRepository<Product, Long> {}
    public interface CartItemRepository extends JpaRepository<CartItem, Long> {
        List<CartItem> findByUserId(Long userId);
    }
    public interface OrderRepository extends JpaRepository<Order, Long> {
        List<Order> findByUserId(Long userId);
    }

}
