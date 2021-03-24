package com.example.demo.controllers;


import com.example.demo.models.Lecture;
import com.example.demo.models.LectureSeries;
import com.example.demo.repositories.LectureRepository;
import com.example.demo.repositories.LectureSeriesRepository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Collection;

@RestController
public class BackToJS {

    @Resource
    LectureRepository lectureRepo;

    @Resource
    LectureSeriesRepository lectureSeriesRepo;

    @RequestMapping("/api/lecture-series-list")
    public Collection<LectureSeries> lectureSeriesInDB() {
        return (Collection<LectureSeries>) lectureSeriesRepo.findAll();
    }

    @RequestMapping("/api/lectures")
    public Collection<Lecture> lecturesInDB() {
        return (Collection<Lecture>) lectureRepo.findAll();
    }

    @RequestMapping("/api/{seriesTitle}/lectures")
    public Collection<Lecture> lectureSeriesInDB(@PathVariable String seriesTitle) {
        LectureSeries seriesToFind = lectureSeriesRepo.findByTitle(seriesTitle);
        return lectureRepo.findByLectureSeries(seriesToFind);
    }




}
