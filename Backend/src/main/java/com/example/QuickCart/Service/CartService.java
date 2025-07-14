package com.example.QuickCart.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.QuickCart.Model.CartItem;
import com.example.QuickCart.Model.Product;
import com.example.QuickCart.Model.User;
import com.example.QuickCart.Repository.CartItemRepository;
import com.example.QuickCart.Repository.ProductRepository;
import com.example.QuickCart.Repository.UserRepository;

@Service
public class CartService {
    
    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;

    public List<CartItem> getUserCart(Long userId) {
        return cartItemRepository.findByUserId(userId);
    }

    public CartItem addToCart(Long userId, Long productId, int quantity) {
        Product product = productRepository.findById(productId).orElseThrow();
        User user = userRepository.findById(userId).orElseThrow();
        CartItem item = new CartItem(null, user, product, quantity);
        return cartItemRepository.save(item);
    }

    public void removeFromCart(Long itemId) {
        cartItemRepository.deleteById(itemId);
    }
}
