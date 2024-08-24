package com.blog_app.blog.service;

import com.blog_app.blog.model.Blog;

import java.util.List;

public interface BlogService {

    public List<Blog> getALlBlogs();
    public Blog getBlog(int id);
    public void saveBlog(Blog blog);
    public Blog updateBlog(int id, Blog blog);
    public void deleteBlog(int id);
    
}
