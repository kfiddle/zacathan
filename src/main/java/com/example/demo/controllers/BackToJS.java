package com.example.demo.controllers;

import com.example.demo.models.Lecture;
import com.example.demo.models.LectureSeries;
import com.example.demo.repositories.LectureRepository;
import com.example.demo.repositories.LectureSeriesRepository;

import org.springframework.web.bind.annotation.*;

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

    @RequestMapping("/api/series-titles-only")
    public Collection<String> lectureSeriesTitlesInDB() {
        Collection<String> titles = new ArrayList<>();
        for (LectureSeries series : lectureSeriesRepo.findAll()) {
            titles.add(series.getTitle());
        }
        return titles;
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

//    @PostMapping("/api/lecture-series-list/{seriesTitle}/{lectureTitle}/delete-lecture")
//    public void removeLectureFromSpecificSeries(@PathVariable String seriesTitle, @PathVariable String lectureTitle) {
//        LectureSeries seriesToFind = lectureSeriesRepo.findByTitle(seriesTitle);
//        seriesToFind.removeLecture(lectureTitle);
//        lectureSeriesRepo.save(seriesToFind);
//    }


//    @PostMapping("/api/delete-lecture-series")
//    public void removeLectureFromSpecificSeries(@RequestBody MissingJsonTwoStrings incomingDouble) {
//        String series = incomingDouble.getSeriesTitle();
//        String lecture = incomingDouble.getLectureTitle();
//
//        Lecture foundLecture = lectureRepo.findByTitle(lecture);
//        Long foundId = foundLecture.getId();
//
//        lectureRepo.deleteById(foundId);
//    }


    @DeleteMapping("/api/delete-lecture-series")
    public void removeLectureFromSpecificSeries(@RequestBody Lecture incomingLecture) {
        String title = incomingLecture.getTitle();

        Long foundId = lectureRepo.findByTitle(title).getId();

        if (lectureRepo.findById(foundId).isPresent()) {
            lectureRepo.deleteById(foundId);
        }
    }
}

