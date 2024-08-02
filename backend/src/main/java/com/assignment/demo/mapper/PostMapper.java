package com.assignment.demo.mapper;

import com.assignment.demo.dto.PostDTO;
import com.assignment.demo.entity.Posts;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class PostMapper {
    @Autowired
    private final ModelMapper modelMapper;



    public PostMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public PostDTO convertEntityToDTO(Posts Post) {
        return modelMapper.map(Post, PostDTO.class);
    }

    public Posts convertDTOToEntity(PostDTO PostDTO) {
        return modelMapper.map(PostDTO, Posts.class);
    }
}
