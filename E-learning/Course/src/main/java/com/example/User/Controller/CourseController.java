package com.example.User.Controller;

import com.example.User.Entity.Course;
import com.example.User.Repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/courses")
public class CourseController {
    @Autowired
    private CourseRepo repo;

    @Autowired
    private RestTemplate restTemplate;
    @PostMapping("/course")
    public ResponseEntity<Course> submit(@RequestBody Course course)
    {
        return ResponseEntity.ok().body(repo.save(course));
    }
    @GetMapping("/allcourses")
    public ResponseEntity<List<Course>> findAllCourses()
    {
        return ResponseEntity.ok().body(repo.findAll());
    }

    @GetMapping("/{name}")
    public ResponseEntity<Optional<Course>> findCByName(@PathVariable String name)
    {
        Optional<Course> course=repo.findByName(name);
        if(course.isPresent()) {
            ResponseEntity.ok().body(course);
        }
        else {
            return null;
        }
        return ResponseEntity.ok().body(course);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Optional<Course>> updateUser(@PathVariable Long id , @RequestBody Course course)
    {
        Optional<Course> existingcourse=repo.findById(id);
        if(existingcourse.isPresent()) {
            Course updatedcourse=existingcourse.get();
            updatedcourse.setName(course.getName());
            updatedcourse.setDescription(course.getDescription());
            updatedcourse.setUrl(course.getUrl());
            repo.save(updatedcourse);
            return ResponseEntity.ok().body(Optional.of(updatedcourse));
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/dcourse/{id}")
    public ResponseEntity<Optional<Course>>deleteCourse(@PathVariable Long id)
    {
        Optional<Course> course=repo.findById(id);
        if(course.isPresent()) {
            repo.deleteById(id);
            return ResponseEntity.ok().body(null);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }


}
