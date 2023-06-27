package com.example.User.Controller;

import com.example.User.Entity.User;
import com.example.User.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepo repo;

    @Autowired
    private RestTemplate restTemplate;
    @PostMapping("/user")
    public ResponseEntity<User> submit(@RequestBody User user)
    {
        return ResponseEntity.ok().body(repo.save(user));
    }
    @GetMapping("/allusers")
    public ResponseEntity<List<User>> findAllUsers()
    {
        return ResponseEntity.ok().body(repo.findAll());
    }



    @GetMapping("/{id}")
    public ResponseEntity<Optional<User>> findById(@PathVariable Long id)
    {
        Optional<User> user=repo.findById(id);
        if(user.isPresent()) {
            ResponseEntity.ok().body(user);
        }
        else {
            return null;
        }
        return ResponseEntity.ok().body(user);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Optional<User>> updateUser(@PathVariable Long id ,@RequestBody User user)
    {
        Optional<User> existinguser=repo.findById(id);
        if(existinguser.isPresent()) {
            User updateduser=existinguser.get();
            updateduser.setName(user.getName());
            updateduser.setUsername(user.getUsername());
            updateduser.setPassword(user.getPassword());
            updateduser.setRole(user.getRole());
            repo.save(updateduser);
            return ResponseEntity.ok().body(Optional.of(updateduser));
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/duser/{id}")
    public ResponseEntity<Optional<User>>deleteUser(@PathVariable Long id)
    {
        Optional<User> user=repo.findById(id);
        if(user.isPresent()) {
            repo.deleteById(id);
            return ResponseEntity.ok().body(null);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/course")
    public List<Object> getCourses() {
        Object[] objects = restTemplate.getForObject("http://Course/courses/allcourses", Object[].class);
        return Arrays.asList(objects);
    }

//    @GetMapping("/{name}")
//    public List<Object> getCourseByName(String name) {
//        Object[] objects = restTemplate.getForObject("http://Course/courses/{name}", Object[].class);
//        return Arrays.asList(objects);
//    }
    @GetMapping("/{name}")
    public List<Object> getCourseByName(@PathVariable String name) {
        String url = "http://Course/courses/{name}" + name;
        ResponseEntity<Object[]> response = restTemplate.getForEntity(url, Object[].class);
        if (response.getStatusCode() == HttpStatus.OK) {
            Object[] objects = response.getBody();
            return Arrays.asList(objects);
        } else {
            // Handle error case
            return Collections.emptyList();
        }
    }


}
