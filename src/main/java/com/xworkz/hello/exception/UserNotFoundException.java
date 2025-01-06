package com.xworkz.hello.exception;

public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException(Long id){
        super("could not find the user Id"+id);

    }
}
