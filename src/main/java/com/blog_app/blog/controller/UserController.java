package com.blog_app.blog.controller;

import com.blog_app.blog.model.User;
import com.blog_app.blog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/add")
    public String addUser(@RequestBody User user) {
        userService.saveUser(user);
        return "New user added";
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/get/{id}")
    public String getUser(@PathVariable int id) {
        userService.getUser(id);
        return "User found.\n" + userService.getUser(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
        return "User deleted";
    }

    @PutMapping("/update/{id}")
    public String updateUser(@PathVariable int id, @RequestBody User user) {
        userService.updateUser(id, user);
        return "User updated";
    }

}
