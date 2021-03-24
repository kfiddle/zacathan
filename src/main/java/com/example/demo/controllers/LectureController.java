package com.example.demo.controllers;

import com.example.demo.models.Lecture;
import com.example.demo.models.LectureSeries;
import com.example.demo.repositories.LectureRepository;
import com.example.demo.repositories.LectureSeriesRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Collection;

@Controller
public class LectureController {

    @Resource
    LectureRepository lectureRepo;

    @Resource
    LectureSeriesRepository lectureSeriesRepo;


    @RequestMapping("/the-fun-stuff")
    public String displayAdminPage(Model model) {
        model.addAttribute("fullCaboodle", lectureSeriesRepo.findAll());
        model.addAttribute("lectures", lectureRepo.findAll());

        return "theRealFunStuff";
    }

    @PostMapping("/add-series")
    public String addASeries(@RequestBody LectureSeries newSeries) {
        lectureSeriesRepo.save(newSeries);
        return "redirect:/the-fun-stuff";
    }


}
