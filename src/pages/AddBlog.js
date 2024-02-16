import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addBlog } from "../store/blogSlice";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./BlogDetails.module.css";

const AddPage = () => {
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate("/");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log("========form=========");
    console.log(form.checkValidity());

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === true) {
      const id = uuid();
      const title = event.target.title.value;
      const category = event.target.category.value;
      const description = event.target.description.value;
      console.log(id);
      console.log(title);
      console.log(category);
      console.log(description);

      dispatch(addBlog({ id, title, category, description }));
      // redirect to home page
      navigate("/");
    }

  };

  return (
    <div style={{ justifyContent: "center",background:"rgb(247, 204, 123)"  }}>
      <link rel="stylesheet" href="style.css"/>
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
       <u> back to index</u>
      </Button>
      <Card
        border="primary"
        text={"dark"}
        style={{
          width: "70rem",
          justifyContent: "center",
          position: "relative",
          top: "50%",
          left: "15%",
          marginBottom: "25px",

          className: "mb-2",
        }}
      >
 

        <Card.Body>
          <div
            className="mx-auto col-12  col-lg-12"
            style={{
              width: "70rem",
              justifyContent: "center",
              position: "relative",
              top: "50%",
              left: "7%",
              marginBottom: "25px",
            
              

              className: "mb-2",
            }}
          >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="title">
                  <Form.Label><b>Title</b></Form.Label>
                  <Form.Control
                    required
                    type="text"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide title
                  </Form.Control.Feedback>
                </Form.Group>
                <br></br>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="category">
                  <Form.Label><b>Categories</b></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    autocomplete="off"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide category
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="description">
                  <Form.Label><b>Content</b></Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    required
                  />
            

                  <Form.Control.Feedback type="invalid">
                    Please provide some story :
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
           
              <Button  type="submit" class="btn btn-success" >Submit</Button>&nbsp;
              <Button type="reset" class="btn btn-warning">Cancel</Button>
            
            </Form>
           
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddPage;
