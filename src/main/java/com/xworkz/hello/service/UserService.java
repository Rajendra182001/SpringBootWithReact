package com.xworkz.hello.service;

import com.xworkz.hello.dto.UserDto;

import java.util.List;

public interface UserService {

    String onSave(UserDto userDto);

    List<UserDto> getData();

    UserDto getById(Long id);

    UserDto updatingById(Long id,UserDto userDto);

    String deleteById(Long id);
}
