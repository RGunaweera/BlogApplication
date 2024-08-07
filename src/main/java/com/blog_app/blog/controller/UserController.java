package com.blog_app.blog.controller;

import com.blog_app.blog.model.User;
import com.blog_app.blog.service.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private static final Logger LOGGER = Logger.getLogger(UserController.class.getName());

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<User>> getAllUsers() {
        try {
            LOGGER.info("Getting all users");
            List<User> users = userService.getAllUsers();
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            LOGGER.severe("Error getting all users");
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<String> getUser(@PathVariable int id) {

        try {
            LOGGER.info("Getting user");
            User user = userService.getUser(id);
            if (user == null) {
                return ResponseEntity.status(404).body("User not found with the id " + id);
            }
            return ResponseEntity.ok(user.toString());
        } catch (Exception e) {
            LOGGER.severe("Error getting user with id " + id);
            return ResponseEntity.status(404).body("Failed to retrieve user. Please try again later.");
        }
    }

    @PostMapping("/add")
    public ResponseEntity<String> addUser(@RequestBody User user) {

        try {
            LOGGER.info("Adding user");
            userService.saveUser(user);
            return ResponseEntity.ok("User added \n" + user.toString());
        } catch (IllegalArgumentException e) {
            LOGGER.severe("Error adding user");
            return ResponseEntity.status(400).body(e.getMessage());
        } catch (Exception e) {
            LOGGER.severe("Error adding user");
            return ResponseEntity.status(400).body("Failed to add user. Please try again later.");
        }

    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable int id, @RequestBody User user) {

        try {
            LOGGER.info("Updating user");
            User updatedUser = userService.updateUser(id, user);
            if (updatedUser == null) {
                return ResponseEntity.status(404).body("User not found with the id " + id);
            }
            return ResponseEntity.ok(updatedUser.toString() + "\nUser updated");
        } catch (IllegalArgumentException e) {
            LOGGER.severe("Error updating user");
            return ResponseEntity.status(400).body(e.getMessage());
        } catch (Exception e) {
            LOGGER.severe("Error updating user");
            return ResponseEntity.status(400).body("Failed to update user. Please try again later.");
        }

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id) {

        try {
            LOGGER.info("Deleting user");
            User user = userService.getUser(id);
            if (user == null) {
                return ResponseEntity.status(404).body("User not found with the id " + id);
            }
            userService.deleteUser(id);
            return ResponseEntity.ok(user.toString() +"\nUser deleted");
        } catch (Exception e) {
            LOGGER.severe("Error deleting user");
            return ResponseEntity.status(404).body("Failed to delete user. Please try again later.");
        }

    }

}
