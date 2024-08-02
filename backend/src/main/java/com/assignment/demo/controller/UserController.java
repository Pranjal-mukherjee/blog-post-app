package com.assignment.demo.controller;

import com.assignment.demo.dto.UserDTO;
import com.assignment.demo.entity.User;
import com.assignment.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin(origins = {"*"} , methods = {RequestMethod.GET , RequestMethod.DELETE,RequestMethod.POST,RequestMethod.PATCH,RequestMethod.PUT} , allowedHeaders = "*" , exposedHeaders = "Access-Control-Allow-Origin")
public class UserController {
@Autowired
    private UserService userService;
@PostMapping("/register")
    public ResponseEntity<User> regiser(@RequestBody User userDTO){
    User userDTO1 = userService.saveUser(userDTO);
    return new ResponseEntity<>(userDTO1, HttpStatus.CREATED);
}
}
