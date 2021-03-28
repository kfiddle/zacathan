package com.example.demo.models;

import antlr.ANTLRStringBuffer;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class LectureSeries {

    @Id
    @GeneratedValue
    private Long id;
    private String title;

    @OneToMany(mappedBy = "lectureSeries")
    private Collection<Lecture> lectures;

    public LectureSeries(String title) {
        this.title = title;
    }

    public LectureSeries(String title, Lecture...lectures) {
        this.title = title;
        this.lectures = Arrays.asList(lectures);
    }

    public LectureSeries() {
    }

    public String getTitle() {
        return title;
    }

    public Collection<Lecture> getLectures() {
        return lectures;
    }


    public void removeLecture(String lectureTitle) {
        lectures.removeIf(lecture -> lecture.getTitle().equals(lectureTitle));
    }
}
