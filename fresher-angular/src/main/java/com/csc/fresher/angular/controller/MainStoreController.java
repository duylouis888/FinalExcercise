package com.csc.fresher.angular.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainStoreController {
	@RequestMapping(value="/store",method = RequestMethod.GET)
    public String homepage(){
        return "mainstore";
    }
}
