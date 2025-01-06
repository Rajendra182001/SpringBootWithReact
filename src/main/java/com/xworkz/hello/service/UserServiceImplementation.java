package com.xworkz.hello.service;

import com.xworkz.hello.dto.UserDto;
import com.xworkz.hello.entity.UserEntity;
import com.xworkz.hello.exception.UserNotFoundException;
import com.xworkz.hello.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService{
    @Autowired
   private UserRepository userRepository;
    @Override
    public String onSave(UserDto userDto) {
        if (userDto!=null){
            UserEntity userEntity = new UserEntity();
            BeanUtils.copyProperties(userDto,userEntity);
            userRepository.save(userEntity);
            return "data";
        }
        return null;
    }

    @Override
    public List<UserDto> getData() {
        List<UserEntity> userEntity = userRepository.findAll();
        List<UserDto> demoDtos = new ArrayList<>();
        if (!(userEntity).isEmpty()){
            for (UserEntity userEntity1:userEntity){
                UserDto userDto = new UserDto();
                BeanUtils.copyProperties(userEntity1,userDto);
                demoDtos.add(userDto);
            }
        }
        return demoDtos;
    }
    @Override
    public UserDto getById(Long id) {
        UserEntity userEntity = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
        UserDto userDto = new UserDto();
        BeanUtils.copyProperties(userEntity, userDto);
        return userDto;
    }

    @Override
    public UserDto updatingById(Long id, UserDto userDto) {
        UserEntity userEntity = userRepository.findById(id)
                .map(user -> {
                    user.setUserName(userDto.getUserName());
                    user.setName(userDto.getName());
                    user.setEmail(userDto.getEmail());
                    return userRepository.save(user);
                })
                .orElseThrow(() -> new UserNotFoundException(id));
        UserDto updatedUserDto = new UserDto();
        BeanUtils.copyProperties(userEntity, updatedUserDto);
        return updatedUserDto;
    }

    @Override
    public String deleteById(Long id) {
        if (!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
      userRepository.deleteById(id);
        return "user with id"+id+"has been deleted sucessfully";
    }

}
