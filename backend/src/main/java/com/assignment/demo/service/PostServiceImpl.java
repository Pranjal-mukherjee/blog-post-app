package com.assignment.demo.service;

import com.assignment.demo.dto.PostDTO;
import com.assignment.demo.entity.Posts;
import com.assignment.demo.mapper.PostMapper;
import com.assignment.demo.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService{
    @Autowired
    private PostRepository postRepository;

    @Override
    public Posts savePost(Posts postDTO) {
        return postRepository.save(postDTO);
    }

    @Override
    public List<Posts> getAll() {
        return postRepository.findAll();
    }

    @Override
    public String deleteByID(int id) {

        postRepository.deleteById(id);
        return "Post deleted with id " + id;
    }
}
