package com.course.CourseService.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseDTO {
    private Long courseId;
    private String title;
    private String description;
    private List<TopicDTO> topics;


//    public CourseDTO(String courseId, String title, String description, List<TopicDTO> topics) {
//        this.courseId = courseId;
//        this.title = title;
//        this.description = description;
//        this.topics = topics;
//    }
}
