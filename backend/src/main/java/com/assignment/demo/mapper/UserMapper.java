package com.assignment.demo.mapper;

import com.assignment.demo.dto.UserDTO;
import com.assignment.demo.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class UserMapper {
    @Autowired
    private final ModelMapper modelMapper;



    public UserMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public UserDTO convertEntityToDTO(User User) {
        return modelMapper.map(User, UserDTO.class);
    }

    public User convertDTOToEntity(UserDTO UserDTO) {
        return modelMapper.map(UserDTO, User.class);
    }
}
