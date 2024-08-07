package com.blog_app.blog.service;

import com.blog_app.blog.model.User;

import java.util.List;

public interface UserService {

    public User saveUser(User user);
    public List<User> getAllUsers();
    public User getUser(int id);
    public User updateUser(int id, User user);
    public void deleteUser(int id);
}
