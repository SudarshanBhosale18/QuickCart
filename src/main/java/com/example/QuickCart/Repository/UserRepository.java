package com.example.QuickCart.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.QuickCart.Model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}