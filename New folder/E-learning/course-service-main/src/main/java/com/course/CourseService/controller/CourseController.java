package com.course.CourseService.controller;

import com.course.CourseService.dto.CourseDTO;
import com.course.CourseService.model.Course;
import com.course.CourseService.model.Topic;
import com.course.CourseService.service.CourseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CourseController {

    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping
    public ResponseEntity<Course> createCourse(@RequestBody Course course) {
        Course createdCourse = courseService.createCourse(course);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCourse);

    }
    @GetMapping("/{courseId}/topics")
    public ResponseEntity<List<Topic>> getCourseTopics(@PathVariable Long courseId) {
        List<Topic> topics = courseService.getCourseTopics(courseId);
        return ResponseEntity.ok(topics);
    }

    @GetMapping("/{courseId}")
    public ResponseEntity<Course> getCourseId(@PathVariable Long courseId)
    {
        Course course= courseService.getCourseId(courseId);
        return ResponseEntity.ok(course);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Course>> getall()
    {
        List<Course> courses=courseService.getall();
        return ResponseEntity.ok(courses);
    }
}

