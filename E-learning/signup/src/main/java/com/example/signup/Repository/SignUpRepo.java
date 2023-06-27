package com.example.signup.Repository;

import com.example.signup.Entity.SignUp;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SignUpRepo extends JpaRepository<SignUp,Integer> {
    Object findByName(String name);
}
