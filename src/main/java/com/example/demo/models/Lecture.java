package com.example.demo.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Lecture {

    @Id
    @GeneratedValue
    private Long id;
    private String title;

    @ManyToOne
    @JsonIgnore
    private LectureSeries lectureSeries;

    public Lecture(String title) {
        this.title = title;
    }

    public Lecture(String title, LectureSeries series) {
        this.title = title;
        this.lectureSeries = series;
    }

    public Lecture(){
    }



    public Long getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }

    public LectureSeries getLectureSeries() {
        return lectureSeries;
    }



}
