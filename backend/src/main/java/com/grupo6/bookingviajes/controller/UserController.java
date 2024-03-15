package com.grupo6.bookingviajes.controller;

import com.grupo6.bookingviajes.exception.DuplicatedValueException;
import com.grupo6.bookingviajes.model.User;
import com.grupo6.bookingviajes.model.dto.UserDto;
import com.grupo6.bookingviajes.response.ApiResponseHandler;
import com.grupo6.bookingviajes.services.UserService;
import com.grupo6.bookingviajes.services.impl.MailServiceImpl;
import com.grupo6.bookingviajes.services.impl.UserServiceImpl;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Api(tags="Users")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private MailServiceImpl mailService;

    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping()
    public ResponseEntity<List<UserDto>> getAllUsers(){
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getUserById(@PathVariable int id) {
        Optional<User> userSearch = userService.getUserById(id);
        if(userSearch.isPresent()){
            return ApiResponseHandler.generateResponse("User data retrieved successfully", HttpStatus.OK, userSearch.get());
        } else {
            return ApiResponseHandler.generateResponseError("User "+ id + " not found", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Object> createUser(@RequestBody UserDto userDto) throws DuplicatedValueException {
        User createdUser = userService.saveUser(userDto); // Creamos el usuario

        // Enviamos el correo electrónico
        mailService.sendMail(
                userDto.getEmail(), // Destinatario
                "¡Cuenta creada exitosamente!",
                userDto.getName() + ", tu cuenta se ha creado exitosamente, empieza a planificar tu viaje junto a nosotros para que disfrutes de unas excelentes vacaciones!"
        );
        return ApiResponseHandler.generateResponse("User data save successfully", HttpStatus.OK, createdUser);
    }


    @PutMapping("/update")
    public ResponseEntity<Object> updateUser(@RequestBody UserDto userDto) {
        if(userDto.getId() != null && userService.getUserById(userDto.getId()).isPresent()){
            return ApiResponseHandler.generateResponse("User data update successfully", HttpStatus.OK, userService.updateUser(userDto));
        } else {
            return ApiResponseHandler.generateResponseError("User with ID: "+ userDto.getId() + " not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable int id) {
        if(userService.getUserById(id).isPresent()){
            userService.deleteUserById(id);
            return ApiResponseHandler.generateResponse(null, HttpStatus.NO_CONTENT, null);
        } else {
            return ApiResponseHandler.generateResponseError("User "+ id + " not found", HttpStatus.NOT_FOUND);
        }
    }
}

