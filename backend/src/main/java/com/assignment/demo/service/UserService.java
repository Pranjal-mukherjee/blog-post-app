package com.assignment.demo.service;

import com.assignment.demo.dto.UserDTO;
import com.assignment.demo.entity.User;

public interface UserService {
    User saveUser(User userDTO);
}
