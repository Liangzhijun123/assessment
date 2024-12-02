import React, { useState } from "react";


const Profile = () => {
    const [posts, setPosts] = useState([
        { title: "Post Title 1", description: "Description for post 1." },
        { title: "Post Title 2", description: "Description for post 2." },
        { title: "Post Title 3", description: "Description for post 3." },
      ]);
    
      const addPost = () => {
        const newIndex = posts.length + 1;
        setPosts([
          ...posts,
          { title: `Post Title ${newIndex}`, description: `Description for post ${newIndex}.` },
        ]);
      };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="cardN">
        <div className="card">
          <div className="image">
            <img
              src="https://via.placeholder.com/150"
              alt="Matthew"
              style={{ width: "400px", borderRadius: "20px" }}
            />
          </div>
          <div className="content">
            <div className="header1">
              <div className="header">Matt Giampietro</div>
              <a href="#">Friends</a>
            </div>
           
            <div>
              <p className="description">
                Matthew is an interior designer living in New York.
              </p>
            </div>
            
          </div>
          <button className="link">Contact me</button>
        </div>
        <div className="card">
          <div className="image">
            <img
              src="https://via.placeholder.com/150"
              alt="Matthew"
              style={{ width: "400px", borderRadius: "20px" }}
            />
          </div>
          <div className="content">
            <div className="header1">
              <div className="header">Matt Giampietro</div>
              <a href="#">Friends</a>
            </div>
           
            <div>
              <p className="description">
                Matthew is an interior designer living in New York.
              </p>
            </div>
            
          </div>
          <button className="link">Contact me</button>
        </div>
        <div className="card">
          <div className="image">
            <img
              src="https://via.placeholder.com/150"
              alt="Matthew"
              style={{  borderRadius: "20px" }}
            />
          </div>
          <div className="content">
            <div className="header1">
              <div className="header">Matt Giampietro</div>
              <a href="#">Friends</a>
            </div>
           
            <div>
              <p className="description">
                Matthew is an interior designer living in New York.
              </p>
            </div>
            
          </div>
          <button className="link">Contact me</button>
        </div>
      </div>

      <div className="post">
        {posts.map((post, index) => (
          <div key={index} className="card">
            <div className="content">
              <div className="header">{post.title}</div>
              <div className="description">{post.description}</div>
            </div>
            
          </div>
        ))}
        <div className="butn">
          <button
            onClick={addPost}
            className="link"
          >
            
            Add a New Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
