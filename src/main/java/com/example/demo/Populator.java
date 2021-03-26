package com.example.demo;

import com.example.demo.models.Lecture;
import com.example.demo.models.LectureSeries;
import com.example.demo.repositories.LectureRepository;
import com.example.demo.repositories.LectureSeriesRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Collection;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    LectureRepository lectureRepo;

    @Resource
    LectureSeriesRepository lectureSeriesRepo;


    @Override
    public void run(String... args) throws Exception {

        LectureSeries shows1516 = new LectureSeries("2015-2016 Presentations");
        LectureSeries meetingLength = new LectureSeries("Meeting-Length Presentations");
        LectureSeries courseLength = new LectureSeries("Course-Length Presentations");
        LectureSeries seminarLength = new LectureSeries("Seminar-Length Presentations");
        LectureSeries comingUpNext = new LectureSeries("Coming Up Next");


        lectureSeriesRepo.save(shows1516);
        lectureSeriesRepo.save(meetingLength);
        lectureSeriesRepo.save(courseLength);
        lectureSeriesRepo.save(seminarLength);
        lectureSeriesRepo.save(comingUpNext);

        Lecture a = new Lecture("Genealogy and the Law", shows1516);
        Lecture b = new Lecture("Assumption is the Mother of all Screw-ups!", shows1516);
        Lecture c = new Lecture("Breaking Down Brick Walls: An Introduction to the F.A.N. Club", shows1516);
        Lecture d = new Lecture("Behind the Curtain: The Creation of Source Templates for the Master Genealogist", shows1516);
        Lecture e = new Lecture("Assumption is the Mother of all Screw-ups!", shows1516);
        Lecture f = new Lecture("An Introduction to American Military Records", shows1516);
        Lecture g = new Lecture("Spreadsheets: The Wonderful Tool Genealogists Seldom Use", shows1516);
        Lecture h = new Lecture("Fun with Genealogical Analysis: A Closer Look at the Third Element of the Genealogical Proof Standard", shows1516);
        Lecture i = new Lecture("Finding Treasure in the Library of Congress and National Archives Websites", shows1516);
        Lecture j = new Lecture("The Records Behind the World War I Draft Registration Cards: Can They Help Your Research?", shows1516);
        Lecture k = new Lecture("Finding Treasure in the Library of Congress and National Archives Websites", shows1516);
        Lecture l = new Lecture("Spreadsheets: The Wonderful Tool Genealogists Seldom Use", shows1516);
        Lecture m = new Lecture("An Introduction to American Military Records", shows1516);
        Lecture n = new Lecture("Adventures in Source Citations", shows1516);
        Lecture o = new Lecture("Introducing State and Federal Land Records", shows1516);
        Lecture p = new Lecture("Seeking City Slickers in Lesser-Known Records", shows1516);
        Lecture q = new Lecture("An Introduction to American Military Records", shows1516);
        Lecture r = new Lecture("Advancing Your Skills: Research Methodology & the Genealogical Proof Standard", shows1516);

        Lecture a1 = new Lecture("Adventures in Source Citations", meetingLength);
        Lecture b1 = new Lecture("Assumption is the Mother of All Screw-ups!", meetingLength);
        Lecture c1 = new Lecture("Bounty Land and the War of 1812 Soldier", meetingLength);
        Lecture d1 = new Lecture("Break Down Those Brick Walls!", meetingLength);
        Lecture e1 = new Lecture("Civil War Research: It's More than Pensions and the CMSR", meetingLength);
        Lecture f1 = new Lecture("\"It Becomes My Painful Duty ...\": Uncovering the Stories in Letters of Condolence", meetingLength);
        Lecture g1 = new Lecture("Making Sense of the 'Chicken-scratch' Censuses", meetingLength);
        Lecture h1 = new Lecture("\"No Papers!\" The Life of Uriah Stone - Revolutionary War Pensioner", meetingLength);
        Lecture i1 = new Lecture("Online Research: Going Beyond Ancestry", meetingLength);
        Lecture j1 = new Lecture("Playing Hide-and-Seek in the U.S. Census", meetingLength);
        Lecture k1 = new Lecture("The Records Behind the World War I Draft Registration Cards: Can They Help Your Research?", meetingLength);
        Lecture l1 = new Lecture("Soldiers, Sailors, Privateers: Records from the War of 1812", meetingLength);
        Lecture m1 = new Lecture("Spreadsheets: Your Computer's Secret Genealogy Problem Solver", meetingLength);
        Lecture n1 = new Lecture("Writing Your Family History One Byte at a Time", meetingLength);

        Lecture a2 = new Lecture("American Military Records", courseLength);
        Lecture b2 = new Lecture("Context and Evidence Analysis", courseLength);
        Lecture c2 = new Lecture("Genealogy and the Law", courseLength);
        Lecture d2 = new Lecture("Immigration and Naturalization Records", courseLength);
        Lecture e2 = new Lecture("Seeking City Slickers: Maps, Directories, Tax Lists, and Other Fun Records", courseLength);
        Lecture f2 = new Lecture("Finding Country Cousins: Research in Land and Property Records", courseLength);

        Lecture a3 = new Lecture("The Best Things in Life Are Free: Finding and Using Free Online Genealogy Resources", seminarLength);
        Lecture b3 = new Lecture("American Military Research", seminarLength);









        lectureRepo.save(a);
        lectureRepo.save(b);
        lectureRepo.save(c);
        lectureRepo.save(d);
        lectureRepo.save(e);
        lectureRepo.save(f);
        lectureRepo.save(g);
        lectureRepo.save(h);
        lectureRepo.save(i);
        lectureRepo.save(j);
        lectureRepo.save(k);
        lectureRepo.save(l);
        lectureRepo.save(m);
        lectureRepo.save(n);
        lectureRepo.save(o);
        lectureRepo.save(p);
        lectureRepo.save(q);
        lectureRepo.save(r);

        lectureRepo.save(a1);
        lectureRepo.save(b1);
        lectureRepo.save(c1);
        lectureRepo.save(d1);
        lectureRepo.save(e1);
        lectureRepo.save(f1);
        lectureRepo.save(g1);
        lectureRepo.save(h1);
        lectureRepo.save(i1);
        lectureRepo.save(j1);
        lectureRepo.save(k1);
        lectureRepo.save(l1);
        lectureRepo.save(m1);
        lectureRepo.save(n1);

        lectureRepo.save(a2);
        lectureRepo.save(b2);
        lectureRepo.save(c2);
        lectureRepo.save(d2);
        lectureRepo.save(e2);
        lectureRepo.save(f2);

        lectureRepo.save(a3);
        lectureRepo.save(b3);



    }
};



