package com.assignment.demo.service;

import com.assignment.demo.dto.PostDTO;
import com.assignment.demo.entity.Posts;

import java.util.List;

public interface PostService {
    Posts savePost(Posts postDTO);
   List<Posts> getAll();
    String deleteByID(int id);
}
