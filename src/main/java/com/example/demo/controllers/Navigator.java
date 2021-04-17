package com.example.demo.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Navigator {


    @RequestMapping("/welcome")
    public String displayWelcomePage() {
        return "home";
    }


    @RequestMapping("/angel")
    public String displayAngelTestingPage() {
        return "angel";
    }
}
