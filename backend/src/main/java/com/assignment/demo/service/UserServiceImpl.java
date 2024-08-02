package com.assignment.demo.service;

import com.assignment.demo.dto.UserDTO;
import com.assignment.demo.entity.User;
import com.assignment.demo.mapper.UserMapper;
import com.assignment.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;


    @Override
    public User saveUser(User userDTO) {
        return userRepository.save(userDTO);
    }
}
