package com.xworkz.hello.controller;

import com.xworkz.hello.dto.UserDto;
import com.xworkz.hello.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@Slf4j
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/raja")
    public String saveData(@RequestBody UserDto userDto){

        return userService.onSave(userDto);
    }

    @GetMapping("/get")
    public List<UserDto> getData(){
        List<UserDto> data = userService.getData();
        log.info("Datas are{}",data);
        return data;
    }

    @GetMapping("/raja/{id}")
    public UserDto getUserById(@PathVariable Long id) { // Changing return type to UserDto for returning actual data
        UserDto userDto = userService.getById(id);
        log.info("UserDto: {}", userDto);
        return userDto; //
    }

    @PutMapping("/raja/{id}")
    public UserDto updatingById(@PathVariable Long id,@RequestBody UserDto userDto){
        return userService.updatingById(id,userDto);
    }

    @DeleteMapping("/raja/{id}")
   public String deleteById(@PathVariable Long id){
         userService.deleteById(id);
         return "deleted by sucessfulluy";
    }
}
