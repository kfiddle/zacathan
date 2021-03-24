package com.example.demo.repositories;

import com.example.demo.models.Lecture;
import com.example.demo.models.LectureSeries;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface LectureRepository extends CrudRepository<Lecture, Long> {


    Lecture findByTitle(String title);

    Collection<Lecture> findByLectureSeries(LectureSeries series);
}
