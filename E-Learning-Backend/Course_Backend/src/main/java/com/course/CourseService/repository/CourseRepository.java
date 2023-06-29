package com.course.CourseService.repository;

import com.course.CourseService.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CourseRepository extends JpaRepository<Course,Long> {
    Optional<Course> findByTitle(String title);



//    Optional<Course> findByCourseId(Long courseId);
}
