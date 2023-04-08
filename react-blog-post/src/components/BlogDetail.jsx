import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

export default function BlogDetail() {
  const { titleSlug } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs?titleSlug=${titleSlug}`)
      .then(res => setBlog(res.data[0]))
      .catch(err => console.error(err));
  }, [titleSlug]);

  return (
    <div className="container text-bg-dark">
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <p>{blog.date}</p>
    </div>
  );
}