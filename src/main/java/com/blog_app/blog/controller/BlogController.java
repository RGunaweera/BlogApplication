package com.blog_app.blog.controller;

import com.blog_app.blog.model.Blog;
import com.blog_app.blog.model.User;
import com.blog_app.blog.service.BlogService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/blog")
@CrossOrigin
public class BlogController {

    private static final Logger LOGGER = Logger.getLogger(UserController.class.getName());

    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Blog>> getAllBlogs() {
        try {
            LOGGER.info("Getting all blogs");
            List<Blog> blogs = blogService.getALlBlogs();
            return ResponseEntity.ok(blogs);
        } catch (Exception e) {
            LOGGER.severe("Error getting all blogs");
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<String> getBlog(@PathVariable int id) {

        try {
            LOGGER.info("Getting blog");
            Blog blog = blogService.getBlog(id);
            if (blog == null) {
                return ResponseEntity.status(404).body("Blog not found with the id " + id);
            }
            return ResponseEntity.ok(blog.toString());
        } catch (Exception e) {
            LOGGER.severe("Error getting blog with id " + id);
            return ResponseEntity.status(404).body("Failed to retrieve blog. Please try again later.");
        }
    }

    @PostMapping("/add")
    public ResponseEntity<String> addBlog(@RequestBody Blog blog) {

        try {
            LOGGER.info("Adding blog");
            blogService.saveBlog(blog);
            return ResponseEntity.ok("Blog added \n" + blog.toString());
        } catch (IllegalArgumentException e) {
            LOGGER.severe("Error adding blog");
            return ResponseEntity.status(400).body(e.getMessage());
        } catch (Exception e) {
            LOGGER.severe("Error adding blog");
            return ResponseEntity.status(400).body("Failed to add blog. Please try again later.");
        }

    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateBlog(@PathVariable int id, @RequestBody Blog blog) {

        try {
            LOGGER.info("Updating blog");
            Blog updatedBlog = blogService.updateBlog(id, blog);
            if (updatedBlog == null) {
                return ResponseEntity.status(404).body("Blog not found with the id " + id);
            }
            return ResponseEntity.ok(updatedBlog.toString() + "\nBlog updated");
        } catch (IllegalArgumentException e) {
            LOGGER.severe("Error updating blog");
            return ResponseEntity.status(400).body(e.getMessage());
        } catch (Exception e) {
            LOGGER.severe("Error updating blog");
            return ResponseEntity.status(400).body("Failed to update blog. Please try again later.");
        }

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id) {

        try {
            LOGGER.info("Deleting blog");
            Blog blog = blogService.getBlog(id);
            if (blog == null) {
                return ResponseEntity.status(404).body("Blog not found with the id " + id);
            }
            blogService.deleteBlog(id);
            return ResponseEntity.ok(blog.toString() +"\nBlog deleted");
        } catch (Exception e) {
            LOGGER.severe("Error deleting blog");
            return ResponseEntity.status(404).body("Failed to delete blog. Please try again later.");
        }

    }

}
