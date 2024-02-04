import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);
  useEffect(() => {
    // Fetch posts
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/posts")

      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handlePostClick = (post) => {
    // Set the selected post when a post is clicked
    setSelectedPost(post);
    setSelectedPostId(post.id);
  };

  return (
    <div className="container">
      <h2 className="bg-primary p-3">Blog</h2>
      <div className="row">
        <div className="col-md-6 ">
          <h3 className="bg-secondary">Posts</h3>
          <ul className="list-group ">
            {posts.map((post) => (
              <li
                key={post.id}
                className="list-group-item text-bg-danger"
                onClick={() => handlePostClick(post)}
                style={{ cursor: "pointer" }}
              >
                {post.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6 ">
          <h3 className="bg-secondary">Post Details</h3>
          {selectedPost && (
            <div>
              <div className="text-bg-danger ">
                <h4 className="text-bg-dark p-3">{selectedPost.title}</h4>
                <p className="p-5">{selectedPost.body}</p>
                <div>
                {/* <NavLink to={`/editdata/${selectedPostId}`}>
                  <button>
                    Edit Blog
                  </button>
                </NavLink> */}
              </div>
              </div>  
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
