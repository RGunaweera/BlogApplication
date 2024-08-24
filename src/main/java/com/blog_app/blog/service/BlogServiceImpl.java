package com.blog_app.blog.service;

import com.blog_app.blog.model.Blog;
import com.blog_app.blog.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogServiceImpl implements BlogService{

    private final BlogRepository blogRepository;

    @Autowired
    public BlogServiceImpl(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    @Override
    public List<Blog> getALlBlogs() {
        return blogRepository.findAll();
    }

    @Override
    public Blog getBlog(int id) {
        return blogRepository.findById(id).orElse(null);
    }

    @Override
    public void saveBlog(Blog blog) {
        if(blog.getTitle() == null || blog.getTitle().isEmpty() ||
                blog.getAuthor() == null || blog.getAuthor().isEmpty() ||
                blog.getCategory() == null || blog.getCategory().isEmpty() ||
                blog.getContent() == null || blog.getContent().isEmpty()) {
            throw new IllegalArgumentException("All data is required");
        }
        blogRepository.save(blog);
    }

    @Override
    public Blog updateBlog(int id, Blog blog) {
        Blog existingBlog = blogRepository.findById(id).orElse(null);

        if(blog.getTitle() == null || blog.getTitle().isEmpty() ||
                blog.getAuthor() == null || blog.getAuthor().isEmpty() ||
                blog.getCategory() == null || blog.getCategory().isEmpty() ||
                blog.getContent() == null || blog.getContent().isEmpty()) {
            throw new IllegalArgumentException("All data is required");
        }

        if (existingBlog != null) {
            existingBlog.setTitle(blog.getTitle());
            existingBlog.setAuthor(blog.getAuthor());
            existingBlog.setCategory(blog.getCategory());
            existingBlog.setContent(blog.getContent());
            return blogRepository.save(existingBlog);
        } else {
            return null;
        }
    }

    @Override
    public void deleteBlog(int id) {
        blogRepository.deleteById(id);
    }
}
