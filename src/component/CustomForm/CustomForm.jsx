import React, { useContext } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import "./CustomForm.css";
const CustomForm = ({
  newUser,
  setNewUser,
  createUserWithEmail,
  signWithEmail,
  error,
}) => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, email, password } = data;
    if (name && email && password) {
      createUserWithEmail(name, email, password)
        .then((res) => {
          return res;
        })
        .catch((error) => {
          return error;
        });
    }
    if (email && password) {
      signWithEmail(email, password)
        .then((res) => {
          return res;
        })
        .catch((error) => {
          return error;
        });
    }
  };
  return (
    <Card>
      <h2 className="text-center mb-4 pt-2">
        {!newUser ? "Login" : "Create"} an Account
      </h2>
      <p className='text-center text-danger'>{error}</p>
      <Form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        {newUser && (
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              <h5>Name</h5>
            </Form.Label>
            <Form.Control
              {...register("name")} //Case Sensitive
              type="text"
              placeholder="Your Full Name"
            />
          </Form.Group>
        )}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <h5>Email Address</h5>
          </Form.Label>
          <Form.Control
            {...register("email", {
              required: true,
              pattern: {
                value: /^[^\s@]+@[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
            type="email"
            placeholder="Enter email"
          />
          {errors.email && (
            <Form.Text className="text-danger">
              {errors.email.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <h5>Password</h5>
          </Form.Label>
          <Form.Control
            {...register("password", {
              required: true,
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,20}$/,
                message:
                  "Password must contain at least one digit, one upper and lower case letter.",
              },
              minLength: {
                value: 6,
                message: "Password must be least 6 charact",
              },
              maxLength: {
                value: 20,
                message: "Passwords can be up to 20 characters",
              },
            })}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <Form.Text className="text-danger">
              {errors.password.message}
            </Form.Text>
          )}
        </Form.Group>
        {newUser && (
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <h5>Confirm Password</h5>
            </Form.Label>
            <Form.Control
              {...register("password", {
                required: true,
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,20}$/,
                  message:
                    "Password must contain at least one digit, one upper and lower case letter.",
                },
                minLength: {
                  value: 6,
                  message: "Password must be least 6 charact",
                },
                maxLength: {
                  value: 20,
                  message: "Passwords can be up to 20 characters",
                },
              })}
              type="password"
              placeholder="Confirm Password"
              required
            />
            {errors.password && (
              <Form.Text className="text-danger">
                {errors.password.message}
              </Form.Text>
            )}
          </Form.Group>
        )}
        {!newUser && (
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
        )}
        <Button className="w-100" variant="danger" type="submit">
          {newUser ? "Create An Account" : "Login"}
        </Button>
        <p className="text-center m-0 p-1">
          {newUser ? "Already an Account?" : "Don't have an Account?"}

          <Button
            onClick={() => setNewUser(!newUser)}
            variant="link"
            className="text-center vertical-align-none vertical-align-baseline shadow-none"
          >
            {newUser ? "Login" : "Create an Account"}
          </Button>
        </p>
      </Form>
    </Card>
  );
};

export default CustomForm;
