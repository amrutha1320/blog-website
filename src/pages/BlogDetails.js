import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectBlogById, deleteBlog } from "../store/blogSlice";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { LikesContext } from "../context/like-context";
import "./BlogDetails.module.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const BlogDetails = () => {

  const { id } = useParams();
  console.log(id);
  const blogUnit = useSelector((state) => selectBlogById(state, id));
  console.log(blogUnit);
  const blogs = useSelector((state) => state.blogs.blogs);
  console.log(blogs);

  const { likes, toggleLike } = useContext(LikesContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
    navigate("/");
  };

  const handleLikeClick = () => {
    toggleLike(id);
  };

  const likeButton = (
    <Button bg="light" variant="danger" onClick={handleLikeClick}>
      {likes[id] ? (
        <>
          {" "}
          'Liked' <FaHeart />
        </>
      ) : (
        <>
          {" "}
          'Like' <FaRegHeart />
        </>
      )}
    </Button>
  );
  const handleEdit = (id) => {
    navigate(`/edit-blog/${id}`);
  };

  return (
    <div style={{ justifyContent: "center",background:"rgb(247, 204, 123)"  }}>
      <Button
        type="button"
        bg="light"
        variant="light"
        onClick={() => navigate("/")}
        style={{
          justifyContent: "center",
          position: "relative",
          top: "50%",
          left: "10%",
          marginBottom: "25px",
        }}
      >
        <u> back to index
       </u>
      </Button>

      <Card
        border="solid"
      
        key={blogUnit.id}
        text={"dark"}
        style={{
          width: "50rem",
          justifyContent: "center",
          position: "relative",
          top: "50%",
          left: "20%",
          marginBottom: "25px",

          className: "mb-2",
        }}
      >
        <Card.Header>
          <Button
            type="button"
            bg="light"
            variant="dark"
            onClick={() => handleDelete(blogUnit.id)}
            style={{
              marginRight: "25px",
            }}
          >
            Delete
          </Button>
          <Button
            type="button"
            bg="dark"
            variant="info"
            onClick={() => handleEdit(blogUnit.id)}
            style={{
              marginRight: "25px",
            }}
          >
            Edit
          </Button>
          {likeButton}
        </Card.Header>

        <Card.Body>
          <Card.Title>
            <div>
              <div
                style={{
                  marginRight: "25px",
                  color: "#B2BEB5",
                  textAlign: "center",
                }}
              >
                {blogUnit.category}
              </div>
              <div>{blogUnit.title}</div>
            </div>
          </Card.Title>

          <Card.Text>
           
            {blogUnit.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogDetails;
