package com.blog_app.blog.service;

import com.blog_app.blog.model.User;

import java.util.List;

public interface UserService {

    public List<User> getAllUsers();
    public User getUser(int id);
    public void saveUser(User user);
    public User updateUser(int id, User user);
    public void deleteUser(int id);

}
