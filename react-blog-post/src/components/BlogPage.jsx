import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BlogPage()
{
    const [blogs, setBlogs] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() =>
    {
        axios
            .get("http://localhost:5000/blogs")
            .then(res => setBlogs(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleSubmit = e =>
    {
        e.preventDefault();
        const date = new Date().toLocaleString();
        const titleSlug = title.toLowerCase().replace(/ /g, "-");
        axios
            .post("http://localhost:5000/blogs", {
                title,
                description,
                date,
                titleSlug
            })
            .then(res => setBlogs([...blogs, res.data]))
            .catch(err => console.error(err));
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="form">

                <h3>Title</h3>
                <input className="form-control"
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Write blog title"
                />
                <br />
                <h3>Description</h3>
                <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)} placeholder="Write blog description"></textarea>
                <br />
                <button class="btn btn-primary mx-auto mb-3" type="submit">Create Blog</button>
            </form>
            <h2>All Blogs 👇🏻👇🏻👇🏻</h2>
            {blogs.map(blog => (
                <div className="container text-bg-primary mt-2">
                    <div key={blog.id}>
                        <Link to={`/blogs/${blog.titleSlug}`}>
                            <h2 className="text-warning">{blog.id} {blog.title}</h2>
                        </Link>
                        <p>{blog.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}