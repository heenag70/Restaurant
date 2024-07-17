import React from "react";
import "./blog.css";
import image1 from "../../assets/images/image_1.jpg";
import image2 from "../../assets/images/image_2.jpg";
import image3 from "../../assets/images/image_3.jpg";

const Blog = () => {
  return (
  <div className="Blog" >

    <div className="chef-cards-contain " >
      <p className="heading">Blog</p>
      <div className="container-service">
        <p className="heading1">Recent posts</p>
        <div className="container-Blogs">
        <div className="blog-post">
          <img src={image1} alt="Blog Post 1" className="blog-image" />
          <div className="blog-content">
            <span> Sep.06, 2019 &nbsp; Admin</span>
            <p className="blog-excerpt">
              <strong> Taste the delicious foods in Asia </strong>
            </p>
            <span>
              <a href="#">Read more</a>
            </span>
          </div>
        </div>
        <div className="blog-post">
          <img src={image2} alt="Blog Post 1" className="blog-image" />
          <div className="blog-content">
            <span> Sep.06, 2019 &nbsp; Admin</span>
            <p className="blog-excerpt">
              <strong> Taste the delicious foods in Asia </strong>
            </p>
            <span>
              <a href="#">Read more</a>
            </span>
          </div>
        </div>
        <div className="blog-post">
          <img src={image3} alt="Blog Post 3" className="blog-image" />
          <div className="blog-content">
            <span> Sep.06, 2019 &nbsp; Admin</span>
            <p className="blog-excerpt">
              <strong> Taste the delicious foods in Asia </strong>
            </p>
            <span>
              <a href="#">Read more</a>
            </span>
          </div>
        </div> 
      </div>
    </div>
    </div>
    </div>
  );
};

export default Blog;
