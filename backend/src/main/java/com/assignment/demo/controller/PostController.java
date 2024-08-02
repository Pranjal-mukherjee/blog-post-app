package com.assignment.demo.controller;

import com.assignment.demo.dto.PostDTO;
import com.assignment.demo.entity.Posts;
import com.assignment.demo.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/post")
@CrossOrigin(origins = {"*"} , methods = {RequestMethod.GET , RequestMethod.DELETE,RequestMethod.POST,RequestMethod.PATCH,RequestMethod.PUT} , allowedHeaders = "*" , exposedHeaders = "Access-Control-Allow-Origin")
public class PostController {
    @Autowired
    private PostService postService;
    @GetMapping
    List<Posts> getALL (){
        return postService.getAll();
    }
    @PostMapping
    Posts save(@RequestBody Posts posts){
        return postService.savePost(posts);
    }
    @DeleteMapping("/{id}")
    String delete(@PathVariable int id){
        return postService.deleteByID(id);
    }
}
