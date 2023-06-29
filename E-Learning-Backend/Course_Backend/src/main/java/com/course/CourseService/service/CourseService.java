package com.course.CourseService.service;

import com.course.CourseService.dto.CourseDTO;
import com.course.CourseService.exception.CourseNotFoundException;
import com.course.CourseService.model.Course;
import com.course.CourseService.model.Topic;
import com.course.CourseService.repository.CourseRepository;
import org.springframework.stereotype.Service;

import javax.swing.*;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }


    public Course createCourse(Course course) {

//        course.setCourseId(courseId);
        return courseRepository.save(course);
    }

    public List<Topic> getCourseTopics(Long id) {
        Optional<Course> courseOptional = courseRepository.findById(id);
        if (courseOptional.isPresent()) {
            Course course = courseOptional.get();
            return course.getTopics();
        }
        throw new CourseNotFoundException("Course not found with ID: " + id);
    }

    public Course getCourseId(Long courseId) {
        Optional<Course> courseOptional = courseRepository.findById(courseId);
        if (courseOptional.isPresent()) {
            Course course = courseOptional.get();
            return course;
        }
        throw new CourseNotFoundException("Course not found with ID: " + courseId);
    }

    public List<Course> getall() {
        return courseRepository.findAll();
    }

    public Course getCourseTitle(String title) {
        Optional<Course> existingCourse= courseRepository.findByTitle(title);
        if(existingCourse.isPresent())
        {
            Course course=existingCourse.get();
            return course;
        }
        throw new CourseNotFoundException("Course not found with title " + title);
    }
}
