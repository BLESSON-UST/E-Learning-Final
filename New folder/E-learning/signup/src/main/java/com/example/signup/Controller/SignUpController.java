package com.example.signup.Controller;

import com.example.signup.Entity.SignUp;
import com.example.signup.Repository.SignUpRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/signup")
@CrossOrigin("http://localhost:4200")
public class SignUpController {
    @Autowired
    private SignUpRepo repo;

    @PostMapping("/post")
    public ResponseEntity<SignUp> submit(@RequestBody SignUp signup) {
        return ResponseEntity.ok().body(repo.save(signup))  ;
    }

    @GetMapping("/users")
    public ResponseEntity<List<SignUp>>  gettall(){
        return ResponseEntity.ok().body(repo.findAll());
    }
    @GetMapping("/user/{name}")
    public ResponseEntity<SignUp> getbyname(@PathVariable String name){
        return (ResponseEntity.ok().body((SignUp) repo.findByName(name)));
    }


}
